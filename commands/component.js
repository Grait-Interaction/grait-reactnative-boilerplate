module.exports = async function (context) {

    const { parameters, strings, print, ignite } = context
    const { pascalCase, isBlank } = strings

    // validation
    if (isBlank(parameters.first)) {
        print.info(`ignite generate component <name>\n`)
        print.info('A name is required.')
        return
    }

    const name = pascalCase(parameters.first)
    const props = { name }

    const jobs = [
        {
            template: 'component.js.ejs',
            target: `App/components/${name}/${name}.js`
        },
        {
            template: 'component-index.js.ejs',
            target: `App/components/${name}/index.js`
        },
        {
            template: 'component-styles.js.ejs',
            target: `App/components/${name}/styles.js`
        }
    ]

    // make the templates and pass in props with the third argument here
    await ignite.copyBatch(context, jobs, props)
}
