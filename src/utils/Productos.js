let leches = [
    {
    title: 'Bebida de Almendras',
    price: 50,
    quantity: '1L',
    imgageURL: process.env.PUBLIC_URL + '/images/almendra.jpeg',
    description: 'Por su alto contenido de fósforo y magnesio, las almendras nos ayudan a tener unos huesos fuertes, cuidan nuestros músculos, combaten la ansiedad y favorecen un buen descanso; además, por su contenido de calcio previene la osteoporosis.'
}, {
    title: 'Bebida de Nuez',
    price: 50,
    quantity: '1L',
    imgageURL: process.env.PUBLIC_URL + '/images/nuez.jpeg',
    description: 'Reduce el colesterol por su alto contenido en ácidos grados omega3 de origen vegetal, ayuda a prevenir enfermedades cardiovasculares y tener un corazón sano, cuida tu cerebro y regula el tránsito intestinal, entre muchos otros beneficios que nos ofrece.'
}, {
    title: 'Bebida de Avena',
    price: 40,
    quantity: '1L',
    imgageURL: process.env.PUBLIC_URL + '/images/avena.jpeg',
    description: 'Ayuda a reducir el colesterol malo, aumenta tus defensas, ayuda a perder peso y mejora tu digestión, solo por mencionar algunos beneficios de este maravilloso cereal.'
}, {
    title: 'Bebida de Arroz',
    price: 40,
    quantity: '1L',
    imgageURL: process.env.PUBLIC_URL + '/images/arroz.jpeg',
    description: 'Es una potente fuente de energía con alto contenido de fibra, bajo en grasa y alto contenido en hierro.'
}];
let kefir = [{
    title: 'Leche de Kéfir',
    price: 70,
    quantity: '1L',
    imgageURL: process.env.PUBLIC_URL + '/images/leche-kefir.jpeg',
    description: 'Probióticos vivos'
}, {
    title: 'Yogur Griego',
    price: 35,
    quantity: '',
    imgageURL: process.env.PUBLIC_URL + '/images/yogurt-griego.jpeg',
    description: (
        <>
            Libre de conservadores y endulzantes artificiales. A elegir:
            <ul style={{margin: '5px 20px'}}>
                <li>Almendra + miel</li>
                <li>Avena + miel</li>
                <li>Amaranto + miel</li>
                <li>Nuez + miel</li>
            </ul>
        </>
    )
}, {
        title: 'Hot Cakes',
        price: 70,
        quantity: '12 piezas',
        imgageURL: process.env.PUBLIC_URL + '/images/hotcakes-horizontal.jpg',
        description: 'Libre de gluten, conservadores y azúcares. Elaborado con leche de Kéfir y mantequilla de coco. Ideal para acompañar con dulce o salado.'
    }];

export {leches};
export {kefir};