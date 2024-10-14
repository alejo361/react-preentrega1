const products = [
    {
        id: "1",
        name: "Laptop ABC",
        description: "Laptop ligera y potente, ideal para trabajo y juego. Con una pantalla de 15.6 pulgadas Full HD y un teclado retroiluminado, es perfecta para trabajar en cualquier lugar. Su procesador i7 y 16 GB de RAM permiten manejar múltiples tareas sin esfuerzo, y su diseño delgado facilita el transporte. Una opción excelente para profesionales y estudiantes.",
        stock: 30,
        category: "computadoras",
        image: "/img/laptophp.png",
        price: 1299.99
    },
    {
        id: "2",
        name: "Tablet 123",
        description: "Tablet versátil con stylus incluido para dibujar y tomar notas. Con una pantalla de alta resolución de 10.2 pulgadas, es perfecta para el entretenimiento y la productividad. Su batería de larga duración te permite trabajar todo el día sin preocuparte por la carga. Ideal para estudiantes, artistas y profesionales que necesitan una herramienta portátil.",
        stock: 20,
        category: "tablets",
        image: "/img/tablet.png",
        price: 499.99
    },
    {
        id: "3",
        name: "Auriculares Inalámbricos",
        description: "Auriculares Bluetooth con cancelación de ruido, perfectos para disfrutar de música sin interrupciones. Con una calidad de sonido superior y un diseño ergonómico, son ideales para largas sesiones de escucha. La batería dura hasta 20 horas, y son compatibles con asistentes de voz, lo que los convierte en una opción práctica para usuarios activos.",
        stock: 100,
        category: "accesorios",
        image: "/img/auris.jpg",
        price: 199.99
    },
    {
        id: "4",
        name: "Reloj Inteligente",
        description: "Reloj con seguimiento de actividad y notificaciones, diseñado para ayudarte a llevar un estilo de vida saludable. Monitoriza tu ritmo cardíaco, sueño y actividades diarias. Con una interfaz intuitiva, puedes recibir mensajes y llamadas directamente en tu muñeca. Su diseño elegante lo hace perfecto tanto para el uso diario como para ocasiones especiales.",
        stock: 75,
        category: "wearables",
        image: "/img/smartwatch.png",
        price: 249.99
    },
    {
        id: "5",
        name: "Cámara DSLR",
        description: "Cámara profesional para fotografía y video, ideal para capturar momentos especiales con calidad excepcional. Con un sensor de 24 MP y un sistema de enfoque rápido, podrás tomar fotos nítidas en cualquier situación. Es perfecta tanto para fotógrafos aficionados como para profesionales que buscan mejorar su técnica y creatividad.",
        stock: 15,
        category: "camaras",
        image: "/img/camara.png",
        price: 899.99
    },
    {
        id: "6",
        name: "Monitor 4K",
        description: "Monitor ultra HD para gamers y diseñadores, ofreciendo una calidad de imagen impresionante. Con un tiempo de respuesta de 1 ms y soporte para HDR, es perfecto para juegos y trabajos de edición. Su diseño ergonómico y biseles delgados hacen que se adapte a cualquier configuración de escritorio. Una opción excelente para quienes buscan una experiencia visual inmersiva.",
        stock: 40,
        category: "monitores",
        image: "/img/monitor.png",
        price: 349.99
    },
    {
        id: "7",
        name: "Smartphone XYZ",
        description: "Un smartphone de última generación con pantalla AMOLED. Ofrece un rendimiento excepcional gracias a su procesador potente y 8 GB de RAM. La cámara de 108 MP permite tomar fotos de calidad profesional, mientras que su batería de larga duración garantiza que te mantengas conectado todo el día. Ideal para quienes buscan tecnología avanzada en sus manos.",
        stock: 50,
        category: "celulares",
        image: "/img/celular.png",
        price: 799.99
    },
    {
        id: "8",
        name: "Router Wi-Fi 6",
        description: "Router de alta velocidad para conectividad óptima, ideal para hogares y oficinas. Con tecnología Wi-Fi 6, ofrece velocidades de conexión más rápidas y una mayor capacidad para múltiples dispositivos. Su fácil configuración y administración a través de una app lo hacen accesible para todos. Perfecto para streaming, juegos en línea y trabajo remoto.",
        stock: 25,
        category: "redes",
        image: "/img/router.png",
        price: 149.99
    },
    {
        id: "9",
        name: "Altavoz Inteligente",
        description: "Altavoz con asistente virtual y control de voz, diseñado para facilitar tu vida diaria. Con un sonido de alta calidad, podrás disfrutar de tu música favorita y controlar dispositivos del hogar inteligente. Su diseño compacto se adapta a cualquier espacio, y su capacidad para responder preguntas y realizar tareas lo convierte en un compañero ideal para el hogar.",
        stock: 80,
        category: "audio",
        image: "/img/altavoz.png",
        price: 129.99
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products);
        }, 1000 )
        
    })
}

const getProduct = (idProduct) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const product = products.find( (product) => product.id === idProduct)
            resolve(product);
        }, 1000 )
        
    })
}

export { getProducts, getProduct }
