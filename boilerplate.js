/**
* This file provides an `install` function that should install React Native,
* copy over any folders and template files, and install any desired plugins.
* 
* It's a simpler version of the one found in https://github.com/infinitered/ignite-ir-boilerplate.
* Refer to that one to see a more full featured example of what you can do.
* 
*/

const options = require('./options')
const { merge, pipe, assoc, omit, __ } = require('ramda')

const REACT_NATIVE_VERSION = '0.56.0'

/**
* Let's install.
*
* @param {any} context - The gluegun context. Docs: https://infinitered.github.io/gluegun/#/context-api.md
*/
async function install(context) {
    const APP_PATH = process.cwd()
    const PLUGIN_PATH = __dirname

    const {
        filesystem,
        parameters,
        ignite,
        reactNative,
        print,
        system,
        prompt,
        template
    } = context

    const name = parameters.third
    const spinner = print
        .spin(`using the ${print.colors.cyan('GraitReactnativeBoilerplate')} boilerplate`)
        .succeed()

    // attempt to install React Native or die trying
    // this will also chdir into the new directory
    const rnInstall = await reactNative.install({ name, version: REACT_NATIVE_VERSION })
    if (rnInstall.exitCode > 0) { process.exit(rnInstall.exitCode) }

    // copy our App & Tests directories
    spinner.text = '▸ copying files'
    spinner.start()
    filesystem.copy(`${PLUGIN_PATH}/boilerplate/App`, `${APP_PATH}/App`, {
        overwrite: true
    })
    filesystem.copy(`${PLUGIN_PATH}/boilerplate/Tests`, `${APP_PATH}/Tests`, {
        overwrite: true
    })
    spinner.stop()

    // generate some templates
    spinner.text = '▸ generating files'
    spinner.start()
    const templates = [
        { template: 'index.js.ejs', target: 'index.js' },
        { template: 'ignite/ignite.json', target: 'ignite/ignite.json' }
    ]
    await ignite.copyBatch(context, templates, { name: name }, {
        quiet: true,
        directory: `${PLUGIN_PATH}/boilerplate`
    })

    const templateProps = {
        name,
        igniteVersion: ignite.version,
        reactNativeVersion: rnInstall.version,
    }
    await ignite.copyBatch(context, templates, templateProps, {
        quiet: true,
        directory: `${ignite.ignitePluginPath()}/boilerplate`
    })

    spinner.stop()

    // run npm install
    spinner.text = '▸ installing ignite dependencies'
    spinner.start()
    await system.run('yarn install')
    spinner.stop()


    /**
    * Merge the package.json from our template into the one provided from react-native init.
    */
    async function mergePackageJsons() {
        // transform our package.json in case we need to replace variables
        const rawJson = await template.generate({
            directory: `${ignite.ignitePluginPath()}/boilerplate`,
            template: 'package.json.ejs',
            props: templateProps
        })
        const newPackageJson = JSON.parse(rawJson)

        // read in the react-native created package.json
        const currentPackage = filesystem.read('package.json', 'json')

        // deep merge, lol
        const newPackage = pipe(
            assoc(
                'dependencies',
                merge(currentPackage.dependencies, newPackageJson.dependencies)
            ),
            assoc(
                'devDependencies',
                merge(currentPackage.devDependencies, newPackageJson.devDependencies)
            ),
            assoc('scripts', merge(currentPackage.scripts, newPackageJson.scripts)),
            merge(
                __,
                omit(['dependencies', 'devDependencies', 'scripts'], newPackageJson)
            )
        )(currentPackage)

        // write this out
        filesystem.write('package.json', newPackage, { jsonIndent: 4 })
    }
    await mergePackageJsons()
    spinner.stop()

    // install any plugins, including ourselves if we have generators.
    // please note you should always do `stdio: 'inherit'` or it'll hang

    // --max, --min, interactive
    let answers
    if (parameters.options.max) {
        answers = options.answers.max
    } else if (parameters.options.min) {
        answers = options.answers.min
    } else {
        answers = await prompt.ask(options.questions)
    }

    try {

        await system.spawn(`ignite add ${__dirname}`, { stdio: 'inherit' })

        const DEPS = [
            'axios@^0.18.0',
            'react-navigation@^2.0.1',
            'react-redux@^5.0.7',
            'redux@4.0.0',
            'redux-logger@^3.0.6',
            'redux-promise-middleware@^5.1.1',
            'redux-thunk@^2.2.0',
            'redux-persist@^5.9.1'
        ]

        if (answers['animatable'] === 'Yes') {
            DEPS.push('react-native-animatable')
        }

        spinner.text = '▸ Installing dependencies'
        spinner.start()
        await system.spawn(`yarn add ${DEPS.join(' ')}`)
        spinner.stop()

        // example of another plugin you could install
    } catch (e) {
        ignite.log(e)
        throw e
    }

    const gitExists = await filesystem.exists('./.git')
    if (!gitExists && !parameters.options['skip-git'] && system.which('git')) {
        // initial git
        const spinner = print.spin('configuring git')

        // TODO: Make husky hooks optional
        const huskyCmd = '' // `&& node node_modules/husky/bin/install .`
        system.run(`git init . && git add . && git commit -m "Initial commit." ${huskyCmd}`)

        spinner.succeed(`configured git`)
    }

    // Wrap it up with our success message.
    print.info('')
    print.info('🍽 Installed!')
    print.info('')
    print.info(print.colors.yellow(`  cd ${name}`))
    print.info(print.colors.yellow('  yarn run ios'))
    print.info(print.colors.yellow('  yarn run iosx'))
    print.info(print.colors.yellow('  yarn run android'))
    print.info('')
}

module.exports = { install }