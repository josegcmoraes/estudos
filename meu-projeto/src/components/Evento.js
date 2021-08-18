import { Forms } from './Forms';

import styles from './Evento.module.css';
import { useState } from 'react';

import { Button } from './evento/Button';

export function Evento({ numero }) {
    const [active, setActive] = useState(false);

    function openForm() {
        setActive(!active);
        // <Forms />
        console.log(`Função ativada...${numero}... estado:${active}`)
        // alert(`Função ativada...${numero}... estado:${active}`)
    }

    function myEvent() {
        console.log('my event')
    }
    return (
        <div className={styles.Container}>
            <h1>Eventos</h1>
            <p>Clique no botão para disparar um evento</p>
            <Button type="text" text="novo evento" />
            <Button type="button" text="Ativar formulário!" event={openForm} />
            <Button type="text" text="meu evento" event={myEvent} />
            {/* <button type="button" onClick={myEvent}>Ativar!</button> */}
            {active && <Forms openForm={openForm} />}
        </div>
    )
}