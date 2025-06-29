import React from 'react';
import '../styles/_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Prakash Rajwar</p>
        <ul className="social">
          <li><a href="https://www.linkedin.com/in/prakash-rajwar88" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://twitter.com/ronnj18" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com/ronngjacob" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
