import { Item } from "./Item"
import styles from "./List.module.css"
export function List() {
    // const marca = ["Gol", "Nestle", "Bauducco", "Sadia", "Ferrari", "Fiat"]
    const marca = [
        { marca: "Gol", anoLancamento: 1980 },
        { marca: "Fiat", anoLancamento: 2016 },
        { marca: "Renault", anoLancamento: 1999 },
        { marca: "Bmw", anoLancamento: 2012 },
        { marca: "Ferrari", anoLancamento: 1929 },
    ]
    return (
        <div className={styles.Container}>
            <h1>Minha Lista</h1>
            <ul>
                {marca.map(item => {
                    // return <Item marca={item} key={item} />
                    return <Item marca={item.marca} anoLancamento={item.anoLancamento} key={item.marca} />
                })}
                {/* <Item marca="Gol" />
                <Item marca="Nestle" /> */}
                {/* <li>Item 1 - 2020</li> */}
                <Item />

            </ul>

        </div>
    )
}