import React from 'react';
import {Link} from 'react-router-dom';
/* importar estilo del module.css y agregar imagen y etc */

export function LandingPage(){
    return(
        <div>       
            <h1>BIENVENIDO - WELCOME - BEM-VINDO - BENVENUTO</h1>
            <Link to ='/home'>
                <button className={style.button}>Ingresar</button>
            </Link>
        </div>
    )
}

export default LandingPage;
