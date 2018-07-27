/**
 * The questions to ask during the install process.
 */
const questions = [
    {
        name: 'animatable',
        message: 'Add React Native Animatable?',
        type: 'list',
        choices: ['Yes', 'No']
    }
]

/**
 * The max preset.
 */
const max = {
    'animatable': 'Yes'
}

/**
 * The min preset.
 */
const min = {
    'animatable': 'No'
}

module.exports = {
    questions,
    answers: { min, max }
}