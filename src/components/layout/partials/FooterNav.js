import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://www.somosfiebre.com/aviso-legal/">Aviso Legal</Link>
        </li>
        <li>
          <Link to="https://www.somosfiebre.com/politica-de-privacidad/">Política de Privacidad</Link>
        </li>
        <li>
          <Link to="https://www.somosfiebre.com/politica-de-cookies/">Política de Cookies</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default FooterNav;