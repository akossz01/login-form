function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}

const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

registerPassword.addEventListener('input', function () {
	registerConfirmPassword.pattern = `${this.value}`;
})

const passwordInput = document.getElementById('password');
function checkLock() {
	const lockOpen = document.querySelector(".input-group i.fa-solid.fa-lock-open");
	const lockLock = document.querySelector(".input-group i.fa-solid.fa-lock");
	if (passwordInput.checkValidity()) {
		if (lockOpen.classList.contains('fa-solid')) {
			lockOpen.className = 'fa-solid fa-lock';
		}
	} else {
		lockLock.className = 'fa-solid fa-lock-open';
	}
}

passwordInput.addEventListener('input', checkLock);

const emailMsg = document.querySelector('.email-msg');
const passMsg = document.querySelector('.pass-msg');

function validation() {
	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;

	if (email === "contact@admin.com" && pass === "password") {
		window.alert("Login succesful");
	} else if(email === ""){
		/* window.alert("You need to provide an email address"); */
		emailMsg.innerText = "You need to provide an email address";
	} else if(pass === ""){
		/* window.alert("You need to enter a password"); */
		passMsg.innerText = "You need to enter a password";
	} else{
		window.alert("Login failed");
	}
}

const loginBtn = document.querySelector('.btn-submit');
loginBtn.addEventListener('click', validation);