import { useState } from "react"
import styles from './Condicional.module.css';


export function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);

        console.log(`Email: ${userEmail}`);
    }

    function limparEmail() {
        setUserEmail('');
    }
    return (
        <div className={styles.Container}>
            <h1>Condicionais</h1>
            <h2>Cadastre o seu email</h2>

            <form>
                <input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <button onClick={enviarEmail} type="submit">Enviar email</button>

                {userEmail && (
                    <div>
                        <br />
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>

        </div>

    )
}