export class Auth {
	constructor(login, password) {
		this.login = login;
		this.password = password;
	}

	authStart() {
		localStorage.setItem('login', this.login)
		localStorage.setItem('password', this.password)
		return alert('Успешно!')
	}
} 

