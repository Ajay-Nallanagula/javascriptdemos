//Consider in below scenario
//If I want to add another item (Fill In the blank) to questions array
//I will have to make changes to both questionaire and questions
//Open close: open for extension ,close for modification 
//We are violating the principle

//KEY :SWITCH CASE IS GREAT EXAMPLE


function questionaire(questions) {

    questions.forEach(question => {
        const { type, description } = question
        console.log(description)
        switch (type) {
            case 'TrueOrFalse': {

                console.log('A. True')
                console.log('B. False')
                break;
            }

            case 'MCQ': {
                console.log('A. OptA')
                console.log('B. OptB')
                console.log('B. OptC')
                break;
            }

            default:
                break;

        }
    })


}

const questions = [
    { type: 'TrueOrFalse', description: 'Are you a Doctor?' },
    { type: 'MCQ', description: 'What is your favourtie programming language?' },
]

questionaire(questions)