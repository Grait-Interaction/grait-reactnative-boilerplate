module.exports = async function (context) {

    const { parameters, strings, print, ignite } = context
    const { pascalCase, isBlank } = strings

    // validation
    if (isBlank(parameters.first)) {
        print.info(`ignite generate screen <name>\n`)
        print.info('A name is required.')
        return
    }

    const name = pascalCase(parameters.first)
    const props = { name }

    const jobs = [{
        template: 'screen.js.ejs',
        target: `App/screens/${name}.js`
    }]

    // make the templates and pass in props with the third argument here
    await ignite.copyBatch(context, jobs, props)
}
