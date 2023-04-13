import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({phone}) => {

    const {id, name, image}  = phone;
    return (
        <div style={{border: '1px solid #ddd', padding: '10px 25px'}}>
            <h5>{name}</h5>
            <div>
                <img src={image} width={150} height={150} alt="" />
            </div>
            <Link to={`/phones/${id}`}><button style={{width: '100%', padding: '5px', marginTop: '5px'}}>Show Details</button></Link>
        </div>
    );
};

export default Phone;