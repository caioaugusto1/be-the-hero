import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assents/logo.svg'

export default function NewIncident() {

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

                <form>
                    <input placeholder="Case Title" />
                    <textarea placeholder="Description" />
                    <input placeholder="How much €" />

                    <button className="button" type="submit"> Submit</button>
                </form>
            </div>
        </div>

    );
}