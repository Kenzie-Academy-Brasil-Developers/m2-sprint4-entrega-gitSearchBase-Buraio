const baseUrl   = 'https://api.github.com/users/';
const myHeaders = { 'content-Type': 'application/json' };

// Busca da API
function getUserFromApi(user) {

  fetch(`${baseUrl}${user}`, {
    method: 'GET',
    headers: myHeaders,
  })
  .then(response => {
    console.log(response)
    if (response.ok) {
      message.classList.add('noDisplay');
      setTimeout(() => {
        resetBtn();
        window.location.replace('pages/profile/profile.html');
      }, 500)
      return response.json();
    }
    else {
      userNotFound();
    }
  })
  .then(response => {
    if (response) {
      localStorage.setItem('user', JSON.stringify(response));
    }
    verifyUserArr(response);
    const stringArr = JSON.stringify(userArr);
    localStorage.setItem('userArr', stringArr);
    setTimeout(() => {
      recentUserList.innerHTML = '';
      createUserElement(userArr);
    }, 1000);
  })

}