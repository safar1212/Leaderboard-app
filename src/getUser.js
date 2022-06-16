import { url } from "./submit";


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
  
    for (let i = 0; i < user.length; i += 1) {
      const list = document.createElement('li');
      const text = document.createTextNode(`${user[i].user}: ${user[i].score}`);
      list.appendChild(text);
      listContainer.appendChild(list);
    }
}

export default getUserInput;