import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assents/heroes.png';
import logoImg from '../../assents/logo.svg';

export default function Logon(){

    return(
        <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero" />
        
            <form>
                <h1>Logon</h1>

                <input placeholder="Your Id" />

                <button className="button" type="submit">Sign In</button>
                
                <Link to="/register">
                    <FiLogIn  size={16} color="#E02041"/>    
                    Sign Up
                </Link>
            </form>
        
        </section>

        <img src={heroesImg} alt="Heroes" />
      </div>
    );
}