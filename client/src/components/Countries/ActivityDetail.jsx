import React from 'react';
import { Link } from 'react-router-dom';

//importar style

const Activity = ({ activities, country }) => {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h3>Actividades para hacer en {country}</h3>
                <table className={style.activities}>

                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Duración (en horas)</th>
                            <th>Dificultad</th>
                            <th>Estación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities && activities.map((el) => (
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.duration}</td>
                                <td>{el.difficulty}</td>
                                <td>{el.season}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <Link className ={style.link} to='/activities'><h3>Actividades para este país!</h3></Link>
    }
}

export default Activity;