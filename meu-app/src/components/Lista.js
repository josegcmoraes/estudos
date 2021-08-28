import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, nome: 'item1', completo: false },
                { id: 2, nome: 'item2', completo: false },
                { id: 3, nome: 'item3', completo: true },
                { id: 4, nome: 'item4', completo: false },
            ]
        }

    }

    // this.state = {
    //     items: ['item1', 'item2', 'item3', 'item4']
    // }

    render() {
        return (
            <>
                <ul>
                    {/* {this.props.children} */}
                    {/* {React.Children.map(child => (
                        child.type == Item ? child : null
                    ))} */}

                    {React.Children.map(this.props.children, child => (
                        child.type === Item ? child : null
                    ))}
                    {this.state.items.map(item => (
                        // <li key={indice}>{item.id} - {item.nome} - {item.completo}</li>
                        <Item key={item.id} completo={item.completo}>{item.nome}</Item>
                    ))}
                </ul>
            </>
        )
    }
};

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const textDecoration = this.props.completo ? 'line-through' : 'none';
        return (
            <>
                <li dataId={this.props.id} style={{ textDecoration: textDecoration }}>
                    {this.props.children}
                </li>
            </>
        )
    }

}

// render() {
//     return (
//         <>
//             <ul>
//                 {this.state.items.map((item, indice) => (
//                     <li key={indice}>{item}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }
// }

export { Lista, Item };