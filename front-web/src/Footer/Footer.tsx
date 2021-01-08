import React from 'react';

import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

export default function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a segunda edição do semana DevSuperior
      <div className="footer-icons">
        <a href="http://youtube.com/" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/wesley-castelani/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
