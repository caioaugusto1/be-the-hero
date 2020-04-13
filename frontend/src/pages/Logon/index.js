import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowRight } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assents/heroes.png';
import logoImg from '../../assents/logo.svg';

import '../../services/api';
import api from '../../services/api';

export default function Logon() {

    const history = useHistory();

    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')

        } catch (error) {
            alert('Try again')
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Logon</h1>

                    <input placeholder="Your Id"
                        value={id}
                        onChange={e => setId(e.target.value)} />

                    <button className="button" type="submit">Sign In</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                    Sign Up
                </Link>
                <Link to="/newDonation">
                        <FiArrowRight size={16} color="#E02041" />
                    New Donation
                </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}