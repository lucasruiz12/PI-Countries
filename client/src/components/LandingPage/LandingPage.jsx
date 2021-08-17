import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export function LandingPage() {
    return (
        <div>
            <h2 className={style.title}>BIENVENIDO - WELCOME - 欢迎 - BEM VINDO - いらっしゃいませ - BENVENUTO - BIENVENEU - ברוך הבא</h2>
            <Link to='/home'>
                <button className={style.button}>Ingresar</button>
            </Link>
        </div>
    )
}

export default LandingPage;
