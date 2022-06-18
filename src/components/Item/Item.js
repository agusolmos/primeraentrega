const Item = ({ name, img }) => {
    return (
        <li>
            <img src={img} alt={name}/>
            {name}
            <button>+Info</button>
        </li>
    )
}

export default Item