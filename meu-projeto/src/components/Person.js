import styles from "./Person.module.css"
// export function Person(props) {
//     return (
//         <>
//             <img src={props.imageProfile} alt={props.name} />
//             <h2>Nome: {props.name}</h2>
//             <p>Idade: {props.age}</p>
//             <p>Profissão: {props.profession}</p>
//         </>
//     )
// }

export function Person({ urlImageProfile, name, age, profession }) {
    return (
        <div className={styles.personContainer}>
            <img src={urlImageProfile} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}

