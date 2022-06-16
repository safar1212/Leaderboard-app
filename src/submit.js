const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9HZDVCFWYQKSpUTaoOtR/scores';


const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input');
    const scoreInput = document.getElementById('score-input');
    fetch(url, {
        method: 'post',

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            user: `${nameInput.value.trim()}`,
            score: `${scoreInput.value.trim()}`,
        }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  nameInput.value = '';
  scoreInput.value = '';
});

export {submitButton, url};