import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {

    const phone = useLoaderData();
    const {name, image, price} = phone;
    
    return (
        <div>
            <h5>{name}</h5>
            <div>
                <img src={image} width={150} height={150} alt="" />
            </div>
            <h3>Price: ${price}</h3>
        </div>
    );
};

export default PhoneDetails;