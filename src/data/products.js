const products = [
    { id: "1", title: "Vestido floral", description: "Elegante vestido con estampado floral para mujeres", img: "https://i.postimg.cc/K4XL8jSW/vestido-floreado.jpg", price: "49.99", stock: "20", category: "mujeres" },
    { id: "2", title: "Blusa rayada", description: "Blusa de manga corta con rayas horizontales para mujeres", img: "https://i.postimg.cc/JhJdKDKT/remera-rayada.jpg", price: "29.99", stock: "15", category: "mujeres" },
    { id: "3", title: "Jeans ajustados", description: "Jeans ajustados de tiro alto para mujeres", img: "https://i.postimg.cc/YqKNfnTw/jeans.jpg", price: "39.99", stock: "25", category: "mujeres" },
    { id: "4", title: "Vestido floral", description: "Elegante vestido con estampado floral para mujeres", img: "https://i.postimg.cc/K4XL8jSW/vestido-floreado.jpg", price: "49.99", stock: "20", category: "mujeres" },
    { id: "5", title: "Blusa rayada", description: "Blusa de manga corta con rayas horizontales para mujeres", img: "https://i.postimg.cc/JhJdKDKT/remera-rayada.jpg", price: "29.99", stock: "15", category: "mujeres" },
    { id: "6", title: "Jeans ajustados", description: "Jeans ajustados de tiro alto para mujeres", img: "https://i.postimg.cc/YqKNfnTw/jeans.jpg", price: "39.99", stock: "25", category: "mujeres" },
    { id: "7", title: "Camisa a cuadros", description: "Camisa de manga larga a cuadros para hombres", img: "https://i.postimg.cc/t4Rx2L58/camisa-rayada.jpg", price: "34.99", stock: "18", category: "hombres" },
    { id: "8", title: "Pantalones chinos", description: "Pantalones chinos cómodos y elegantes para hombres", img: "https://i.postimg.cc/DZ3fYGhm/pantalon-chino.jpg", price: "45.99", stock: "22", category: "hombres" },
    { id: "9", title: "Sudadera con capucha", description: "Sudadera con capucha y bolsillo frontal para hombres", img: "https://i.postimg.cc/wvkzfbFb/sudadera.jpg", price: "49.99", stock: "30", category: "hombres" },
    { id: "10", title: "Camisa a cuadros", description: "Camisa de manga larga a cuadros para hombres", img: "https://i.postimg.cc/t4Rx2L58/camisa-rayada.jpg", price: "34.99", stock: "18", category: "hombres" },
    { id: "11", title: "Pantalones chinos", description: "Pantalones chinos cómodos y elegantes para hombres", img: "https://i.postimg.cc/DZ3fYGhm/pantalon-chino.jpg", price: "45.99", stock: "22", category: "hombres" },
    { id: "12", title: "Sudadera con capucha", description: "Sudadera con capucha y bolsillo frontal para hombres", img: "https://i.postimg.cc/wvkzfbFb/sudadera.jpg", price: "49.99", stock: "30", category: "hombres" },
    { id: "13", title: "Vestido de princesa", description: "Vestido de princesa con detalles encantadores para niñas", img: "https://i.postimg.cc/Xv7tN7gx/vestido-princesa.jpg", price: "29.99", stock: "18", category: "ninios" },
    { id: "14", title: "Gorra deportiva", description: "Gorra deportiva ajustable para hombres", img: "https://i.postimg.cc/hP1CJRvY/gorra.jpg", price: "14.99", stock: "30", category: "ninios" },
    { id: "15", title: "Suéter de lana", description: "Suéter de lana cálido y confortable para hombres", img: "https://i.postimg.cc/3NBgw71C/sueter.jpg", price: "39.99", stock: "12", category: "ninios" },
    { id: "16", title: "Vestido de princesa", description: "Vestido de princesa con detalles encantadores para niñas", img: "https://i.postimg.cc/Xv7tN7gx/vestido-princesa.jpg", price: "29.99", stock: "18", category: "ninios" },
    { id: "17", title: "Gorra deportiva", description: "Gorra deportiva ajustable para hombres", img: "https://i.postimg.cc/hP1CJRvY/gorra.jpg", price: "14.99", stock: "30", category: "ninios" },
    { id: "18", title: "Suéter de lana", description: "Suéter de lana cálido y confortable para hombres", img: "https://i.postimg.cc/3NBgw71C/sueter.jpg", price: "39.99", stock: "12", category: "ninios" }
]

export const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    })
}