class MCQ {
    constructor({ description, choices }) {

        this.choices = choices
        this.description = description
    }

    printQuestions() {
        console.log(this.description)
        this.choices.forEach((choice, index) => {
            console.log(`${index}. ${choice}`)
        })

    }

}

class TrueOrFalse {
    constructor({ description, choices }) {

        this.choices = choices
        this.description = description
    }

    printQuestions() {
        console.log(this.description)
        this.choices.forEach((choice, index) => {
            console.log(`${index}. ${choice}`)
        })
    }

}

class FillBlanks {
    constructor({ description }) {
        this.description = description
    }

    printQuestions() {
        console.log(this.description)
        console.log("____________________________________")
    }

}


function questionaire(questions) {
    console.log('OPEN CLOSE SOLUTION')
    questions.forEach(question => {
        question.printQuestions()
    })
}

const questionsArr = [
    new MCQ({ description: 'Fav Prog Language', choices: ['JAVASCRIPT', 'C#', 'JAVA'] }),
    new TrueOrFalse({ description: 'Are you a Doctor?', choices: ['True', 'False'] }),
    new FillBlanks({ description: 'Your Fullname' })
]

questionaire(questionsArr)