import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assents/logo.svg'
import api from '../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e) {

        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile');

        } catch (error) {

        }
    }

    return (

        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The hero" />
                    <h1> Create new Incident</h1>
                    <p> Insert more details about the incident </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Case Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="€"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit"> Submit</button>
                </form>
            </div>
        </div>

    );
}