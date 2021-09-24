import { useState } from "react"
import { Input } from "../form/Input"
import { SubmitButton } from "../form/SubmitButton";

import styles from './Login.module.css';
// export function Login({ userLogged }) {
export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let userLogged = "deslogado"

    const submit = (e) => {
        e.preventDefault();

        if (email.length > 0 && password.length > 0) {
            userLogged = 'logado';
        }
        alert(`${email} - ${password} - ${userLogged}`)
    }

    return (
        <form onSubmit={submit} className={styles.login}>
            <h1>Login</h1>

            <Input
                type="email"
                name="email"
                text="Email"
                placeholder="example@email.com"
                value={email}
                handleOnChange={(e) => setEmail(e.target.value)}
            />

            <Input
                type="password"
                name="password"
                text="Senha"
                placeholder="******"
                value={password}
                handleOnChange={(e) => setPassword(e.target.value)}
            />
            <SubmitButton
                text="Login"
            />


            <p>{userLogged}</p>
            <p>{email} - {password}</p>
        </form>
    )
}