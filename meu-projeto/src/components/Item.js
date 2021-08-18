import PropTypes from 'prop-types'

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "marca não cadastrada",
    anoLancamento: 0
}

// export function Item(props) {
export function Item({ marca, anoLancamento }) {
    return (
        <>
            {/* <li>{props.marca} - {props.lancamento}</li> */}
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}