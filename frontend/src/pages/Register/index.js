import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css'

import logoImg from '../../assents/logo.svg'

export default function Register() {

        const history = useHistory();

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [whatsapp, setWhatsapp] = useState('');
        const [city, setCity] = useState('');
        const [uf, setUf] = useState('');

        async function handleRegister(e) {

                e.preventDefault();

                const data = {
                        name, email, whatsapp, city, uf
                }

                try {
                        const response = await api.post('ongs', data);

                        history.push('/')

                        alert(`Your access ID is:  ${response.data.id}`);
                } catch (error){
                        alert(`Error the create `);
                }
        };

        return (
                <div className="register-container">
                        <div className="content">
                                <section>
                                        <img src={logoImg} alt="Be The hero" />
                                        <h1> Create</h1>
                                        <p>Create your SingIn and help the animals </p>

                                        <Link className="back-link" to="/">
                                                <FiArrowLeft size={16} color="#E02041">

                                                </FiArrowLeft>
                                                I dont have
                                        </Link>
                                </section>

                                <form onSubmit={handleRegister}>

                                        <input placeholder="NGO Name" value={name}
                                                onChange={e => setName(e.target.value)} />

                                        <input type="email" placeholder="Email" value={email}
                                                onChange={e => setEmail(e.target.value)} />

                                        <input placeholder="Whatsapp" value={whatsapp}
                                                onChange={e => setWhatsapp(e.target.value)} />


                                        <div className="input-group">
                                                <input placeholder="City" value={city}
                                                        onChange={e => setCity(e.target.value)} />

                                                <input placeholder="Code" value={uf}
                                                        onChange={e => setUf(e.target.value)}
                                                        style={{ width: 80 }} />
                                        </div>

                                        <button className="button" type="submit"> Submit</button>
                                </form>
                        </div>
                </div>
        )
}