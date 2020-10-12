import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre mi</h2>
            <Link to='/sign-up'>Mis proyectos</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Carrera</Link>
            {/* <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          </div>
          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Buy a coffee</Link>
            {/* <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsor</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>redes sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Facebook</Link>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Homer
            </Link>
          </div>
          <small className='website-rights'>HOMER © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;