import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { useSelector } from 'react-redux';
/* IMPORTAR UN ESTILO DE MODULE.CSS */

const Countries = () => {
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(0);

    let firstPage = () => {
        setCurrentPage(0)
    }
    let nextPage = () => {
        if (countries.length <= currentPage + 10) {
            setCurrentPage(currentPage)
        } else setCurrentPage(currentPage + 10)
    };
    let previousPage = () => {
        if (currentPage < 9) {
            setCurrentPage(0);
        } else setCurrentPage(currentPage - 10);
    }
    useEffect(() => {
        firstPage()
    }, [countries]);

    const filterCountries = countries.slice(currentPage, currentPage + 10);

    return (
        <div>
            <button onClick={nextPage} className={style.btn}>{'=>'}</button>
            <button onClick={previousPage} className={style.btn}>{'<='}</button>
            <div className={style.grid}>
                {filterCountries.map((el) => (
                        <CountryCard
                            id={el.id}
                            img={el.img}
                            name={el.name}
                            continent={el.continent} />
                    ))}
            </div>
        </div>
    );
}

export default Countries;