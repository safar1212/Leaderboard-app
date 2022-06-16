import './style.css';

const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit-button');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9HZDVCFWYQKSpUTaoOtR/scores';


submitButton.addEventListener('click', () => {
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

const getUserInput = async (url) => {
    let user;
    let data;
    try {
      const response = await fetch(url);
      data = await response.json();
      user = data.result;
    } catch (e) {
      console.log(`Error: ${e}`);
    }

    const listContainer = document.querySelector('#list-container');
  
    while (listContainer.hasChildNodes()) {
      listContainer.removeChild(listContainer.firstChild);
    }
  
    for (let i = 0; i < data.result.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('name-list');
      const texting = document.createTextNode(`${user[i].user}: ${user[i].score}`);
      list.appendChild(texting);
      listContainer.appendChild(list);
    }
}

getUserInput(url);

refreshButton.addEventListener('click', () => {
    getUserInput(url);
});
