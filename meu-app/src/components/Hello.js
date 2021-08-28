import React from "react";

// export function Hello(props) {
//     return (
//         <>
//             {props.children}
//             <h1>{props.text || ""}</h1>
//         </>

//     )
// }

export function Hello({ text, children }) {
    return (
        <>
            {children}
            <h1>{text}</h1>
        </>
    )
}

// const Hello = ({ text }) => (<h1>{text}</h1>);
// export default Hello;


// const Hello = ({ text }) => <h1>{text}</h1>;
// export default Hello;