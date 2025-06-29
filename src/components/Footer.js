import React from 'react';
import '../styles/_footer.scss'; // Make sure _footer.scss starts with @import 'variables';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container container">
        <p className="footer-copy">© {year} Prakash Rajwar. All rights reserved.</p>

        <ul className="footer-social">
          <li>
            <a
              href="https://www.linkedin.com/in/prakash-rajwar88"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ronnj18"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ronngjacob"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
