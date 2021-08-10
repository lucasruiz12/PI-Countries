import React from 'react';
import { Link } from 'react-router-dom';

//importar style

const Activity = ({ activities, country }) => {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h3>Activities in {country}</h3>
                <table className={style.activities}>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration (hs)</th>
                            <th>Difficulty</th>
                            <th>Season</th>
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
        return <Link className ={style.link} to='/activities'><h3>Activities for this countries!</h3></Link>
    }
}

export default Activity;