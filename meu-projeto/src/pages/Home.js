import { useState } from 'react';


import { HelloWorld } from '../components/HelloWorld';
import { SayMyName } from '../components/SayMyName';

import { Person } from '../components/Person';
import { List } from '../components/List';
import { Evento } from '../components/Evento'
import { Condicional } from '../components/Condicional';
import { ListMap } from '../components/ListMap';

import { SeuNome } from '../components/stateLift/SeuNome';
import { Saudacao } from '../components/stateLift/Saudacao';

import '../App.css';
import { Footer } from '../components/layout/Footer/Footer';


export function Home() {
    const [nome, setNome] = useState();

    const name = "jose"
    const newName = name.toUpperCase();
    const url = 'https://via.placeholder.com/150'

    const meusitens = ['React', 'Vue', 'Angular'];

    function sum(a, b) {
        return a + b
    }

    return (
        <div>
            {/* // <div className="App"> */}
            {/* <header className="App-header"> */}
            <header className="App-Header">
                <h1>{name} - {newName}</h1>
                <p> Soma {sum(2, 4)}</p>

                <img src={url} alt="imageCenter" />
            </header>

            <main>
                <HelloWorld />
                <br />
                <SayMyName name={name} />
                <SayMyName name="Maria" />
                <SayMyName name="Ricardo" />

                <Person
                    urlImageProfile='https://via.placeholder.com/150'
                    name="Ricardo"
                    age="30"
                    profession="programador"
                />
                <List />

                <Evento numero={1} />

                <Condicional />

                <ListMap itens={meusitens} />
                <ListMap itens={[]} />

                <SeuNome setNome={setNome} />
                <Saudacao nome={nome} />

            </main>

            <Footer />

        </div >
    )
}