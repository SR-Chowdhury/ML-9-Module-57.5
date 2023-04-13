import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {

    const phones = useLoaderData();

    return (
        <div>
            <h1>This is Phones page</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'}}>
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone} />)
                }
            </div>


        </div>
    );
};

export default Phones;