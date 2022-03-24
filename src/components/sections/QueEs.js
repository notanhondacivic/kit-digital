import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const QueEs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses} style={{'width':'100%'}} >
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Digitalizamos tu negocio <br></br> <span style={{'color':'#ffed00'}}>100% gratis</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a"  wideMobile href="#contacto" style={{'color':'Black','backgroundColor':'#ffed00'}}>
                    Contacto
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="#kit">
                    Guia Kit Digital
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
           
            <a
              data-video="https://www.youtube.com/embed/fI_Y5W25hPs"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image id="video"
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={1024}
                height={504}
                style={{'backgroundColor':'white'}}/>
            </a> 
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/fI_Y5W25hPs"
          videoTag="iframe" />
        </div>
      </div>
    </section>
    <section>
    <div className="container-sm" >
        <div className={innerClasses}  >
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
          <Image id="logo-digitalizadores"
                className="has-shadow"
                src={require('./../../assets/images/Logo-digitalizadores.png')}
                alt="Hero"
                width={1024}
                height={504}
                style={{'backgroundColor':'white','margin':'auto'}}/>
          </div>
        </div>
    </div>
    </section>
    </>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;