import {Auth} from '../class/Auth.js';

export function form() {
	document.querySelector('body').innerHTML = `
	<form onclick="return false">
		<div>
			<input type="text" id="login" placeholder="Login" autocomplete="off">
			<input type="password" id="pass" placeholder="Password" autocomplete="off">
		</div>
		<button>Войти</button>
	</form>`;
	document.querySelector('button').addEventListener('click', () => {
		const login = document.querySelector('#login').value;
		const pass = document.querySelector('#pass').value;
		if (!(login === '') && !(pass === '')) {
			const auth = new Auth(login, pass)
			auth.authStart()
		} else {
			localStorage.clear()
			alert('Пусто')
		}
	})
}

