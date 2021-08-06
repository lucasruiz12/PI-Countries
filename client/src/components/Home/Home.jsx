import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions';
import CountryCard from '../Countries/CountryCard'

export function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div>
            <Nav />
            <div>
                <CountryCard />
            </div>
        </div>
    );
}

export default Home;