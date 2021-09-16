import React, { useState, useEffect } from 'react'
import { FormularioCadastro } from './FormularioCadastro'
import fireDb from '../firebase'

import styles from './Cadastro.module.css';

export function Cadastro() {
    let [dataUsers, setDataUsers] = useState({})

    useEffect(() => {
        fireDb.child('users').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDataUsers({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])

    const addEdit = obj => {
        fireDb.child('users').push(
            obj,
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    }

    return (
        <div>

            <div className={styles.headerCadastro}>
                <div className={styles.itemHeaderCadastro}>
                    <h1>Cadastro de pacientes</h1>
                    <p>Realize o cadastro agora mesmo!</p>
                </div>
            </div>

            <div className={styles.formMain}>
                <div className={styles.form}>
                    <FormularioCadastro addEdit={addEdit} />
                </div>

                <div className={styles.list}>
                    <h1>List pacients</h1>

                    <table>
                        <thead>
                            <tr>
                                <td>Nome Completo</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Endereço</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(dataUsers).map(id => {
                                    return <tr key={id}>
                                        <td>{dataUsers[id].nameFull}</td>
                                        <td>{dataUsers[id].phone}</td>
                                        <td>{dataUsers[id].email}</td>
                                        <td>{dataUsers[id].address}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}