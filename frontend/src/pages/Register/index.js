import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assents/logo.svg'

export default function Register() {
        return (
                <div className="register-container">
                        <div className="content">
                                <section>
                                        <img src={logoImg} alt="Be The hero" />
                                        <h1> Create</h1>
                                        <p>Create your SingIn entre na plataforma e ajude as pessoas </p>

                                        <Link className="back-link" to="/">
                                                <FiArrowLeft size={16} color="#E02041">
                                                       
                                                </FiArrowLeft>
                                                I dont have
                                        </Link>
                                </section>

                                <form>
                                        <input placeholder="ONG Name" />
                                        <input type="email" placeholder="Email" />
                                        <input placeholder="Whatsapp" />


                                        <div className="input-group">
                                                <input placeholder="City" />
                                                <input placeholder="Code" style={{ width: 80 }} />
                                        </div>

                                        <button className="button" type="submit"> Submit</button>
                                </form>
                        </div>
                </div>
        )
}