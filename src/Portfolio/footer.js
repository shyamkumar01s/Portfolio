import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <h5 className="quote">
          “Push beyond your limits like a Saiyan.” 💪🏻
        </h5>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shyam-kumar-40a74a319/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BaPUSZxt8TeWknkLJK3wXjA%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/__mikeeyyy_._?igsh=MWR5MHJsbzl4bTNpaw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/916369086899" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://github.com/shyamkumar01s" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Shyam | Saiyan | Built with 💖 using React</p>
      </div>
    </footer>
  );
};

export default Footer;
