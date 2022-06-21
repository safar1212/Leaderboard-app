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
  listContainer.innerHTML = '';
  
  let list = '';
  user.forEach((person) => {
    list += `<li>${person.user}: ${person.score}</li>`;
  });
  listContainer.innerHTML = list;

};

export default getUserInput;
