const products = [
    { 
        id: '1', 
        name: 'retro', 
        price: 160000, 
        category: 'retro', 
        img:'../src/images/RETRO 32/1.jpg', 
        stock: 5, 
        description:'Descripcion'
    },
    { id: '2', name: 'Tablero', price: 50000, category: 'Tablero', img:'./images/TABLERO/1.jpg', stock: 6, description:'Descripcion'},
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'pedestal', img:'./images/PEDESTAL 2 PLAYER/1.jpg', stock: 10, description:'Descripcion'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}