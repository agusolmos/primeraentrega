import { useState, useEffect } from "react"
import './MercadoLibre.css'
const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    console.log(products)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
            return response.json()
        }).then(res => {
            setProducts(res.results)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <h1 className= "titulo-nav">Linbox | Technologies</h1>
            <h2 className="titulo-nav2">Empresa dedicada a la fabricacion de maquinas arcade.</h2>
            <form onSubmit={handleSubmit}>
                <input  className= "input-search" type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Buscar</button>
            </form>
            <ul>
                {products.map(prod => {
                    return (
                        <li key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title}/>
                            <p>{prod.title}</p>
                            <p>{prod.price}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default MercadoLibre