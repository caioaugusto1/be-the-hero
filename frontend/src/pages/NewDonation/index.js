import React, { useState, useEffect } from 'react';

import logoImg from '../../assents/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function NewDonation() {

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {

        api.get('incidents', {
        }).then(response => {
            setIncidents(response.data);
        })
    });

    return (

        <div className="new-donation-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome to Donnation Page</span>
            </header>


            <div className="content">

                <h1>Donation</h1>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>

                            <strong>Incident</strong>
                            <p>{incident.title}</p>

                            <strong>NGO Name</strong>
                            <p>{incident.name}</p>

                            <strong>Description</strong>
                            <p>{incident.description}</p>

                            <strong>Value</strong>
                            <p>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(incident.value)}</p>


                            <div className="input-group">
                                <a className="button" href="mailto:caiio_augustto@hotmail.com?Subject=Donation%20" target="_top">Send Mail</a>
                                <a className="button" href="https://wa.me/353831203927?text=I am%20interested%20in%20make%20a%20donation" target="_blank">WhatsApp</a>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
};