import React from 'react';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="https://www.fiebrecreativa.com/">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="logo fiebre tm"
            width={52}
            height={52} />
        </a>
      </h1>
    </div>
  );
}

export default Logo;