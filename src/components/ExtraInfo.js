import React from 'react';
import '../styles/ExtraInfo.css';

function ExtraInfo() {
    return (
        <div className="extra-info">
            <p id="first" className="extrainfo-paragraph">
                Somos una empresa dedicada a birndar la mejor alternativa de alimentación a tu vida, saludable y nutritia.
Únete a nosotros y sé parte de la familia SlamandraMilk. Disfruta del placer y  los beneficios de una alimentación que está al alcance de tus manos.
            </p>
            <div className="separador-vertical"></div>
            <p id="second" className="extrainfo-paragraph">
                Aprovecha todos los beneficios del Kéfir en diferentes productos. Ideal para los intolerantes a la lactosa, en el proceso de fermentación se logra eliminarla casi en su totalidad.
Prueba las maravillas nutricionales de los frutos secos que nos ofrece la naturaleza.
            </p>
            <div className="separador-vertical"></div>
            <p id="third" className="extrainfo-paragraph">
                Alguna contraindicación del Kéfir podría ser para las personas con problemas de intestino permeable. No por esto, deja de ser un alimento por excelencia nutritivo que contiene probióticos vivos de varias cepas; proteinas y calcio; vitamina D y B; magnesio, potasio y minerales. 
            </p>
        </div>
    );
;}

export default ExtraInfo;