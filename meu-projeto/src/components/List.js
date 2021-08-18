import { Item } from "./Item"

export function List() {
    const marca = ["Gol", "Nestle", "Bauducco", "Sadia", "Ferrari", "Fiat"]
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                {marca.map(item => {
                    // key={item} 
                    return <Item marca={item} key={item} />
                })}
                {/* <Item marca="Gol" />
                <Item marca="Nestle" />
                <Item marca="Bauducco" />
                <Item marca="Sadia" /> */}
                <li>Item 1</li>

            </ul>

        </>
    )
}