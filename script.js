const passageE = document.getElementById('passage');
const questionE = document.getElementById('question');
const button = document.getElementById('button');
const answerE = document.getElementById('answer');

const answer = async (model, passage, question) => {
    console.log(model);
    try {
        const answers = await model.findAnswers(question, passage);
        return answers[0].text
    } catch (e) {
        return false;
    }
}

const main = async () => {
    const model = await qna.load();

    button.onclick = async () => {
        let ans = await answer(model, passageE.value, questionE.value);
        if (!ans) {
            answerE.innerHTML = 'No answer found';
        } else {
            answerE.innerHTML = ans;
        }

    }
}

main();