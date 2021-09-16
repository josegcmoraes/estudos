import React, { useState } from 'react'

import { FaUserAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

import styles from './FormularioCadastro.module.css'


export function FormularioCadastro({ addEdit }) {

    const user = {
        nameFull: '',
        phone: '',
        email: '',
        address: ''
    }

    let { values, setValues } = useState(user);

    const manipulatorInputChange = e => {
        let { nameFull, value } = e.target

        setValues({
            ...values,
            [nameFull]: value
        })
    }


    const manipulatorFormSend = e => {
        e.preventDefault()
        addEdit(values)
    }

    return (
        <form
            className={styles.containerForm}
            autoComplete="off"
            onSubmit={manipulatorFormSend}
        >
            {/* <h1>Cadastro</h1> */}
            <div className={styles.group_input}>
                <label htmlFor="name"><span><FaUserAlt /></span></label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome Completo"
                    value={values.nameFull}
                    onChange={manipulatorInputChange}
                // onChange={(e) => setValues({ ...values, [values.nameFull]: e.target.value })}
                />
            </div>

            <div className={styles.group}>
                <div className={styles.group_input}>
                    <label htmlFor="phone"><span><FaPhone /></span></label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Telefone"
                        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                        value={values.phone}
                    // onChange={manipulatorInput}
                    // onChange={e => setValues(...values, [values.phone])}
                    />
                </div>
                <div className={styles.group_input}>
                    <label htmlFor="email"><span><FaEnvelope /></span></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                    />
                </div>
            </div>

            <div className={styles.group_input}>
                {/* <label htmlFor="address"><span><FaUserAlt /></span></label> */}
                <label htmlFor="address"></label>

                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Endereço"
                    value={values.address}
                // onChange={(e) => setValues({ ...values, [values.nameFull]: e.target.value })}
                />
            </div>


            <div className={styles.group_input}>
                <input
                    type="submit"
                    name="save"
                />
            </div>
        </form >

    )
}