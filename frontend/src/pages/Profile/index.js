import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assents/logo.svg';
import api from '../../services/api';

import './styles.css';

export default function Profile() {

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongName]);

    async function handleDeleteIncident(id) {
        try {
            var response = await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident !== id));

        } catch (error) {
            alert('Sorry, I cant delete ')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome to {ongName}</span>

                <Link className="button" to="/incidents/new">Create new</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>

            <h1>Incidents</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Incident</strong>
                        <p>{incident.title}</p>

                        <strong>Description</strong>
                        <p>{incident.description}</p>

                        <strong>Value</strong>
                        <p>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                )
                )}
            </ul>
        </div>
    );
};