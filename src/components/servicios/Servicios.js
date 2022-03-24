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

const Hero = ({
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
    <section style={{'padding-top':'100px'}}>
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
    <section style={{'padding-top':'-100px'}}
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses} style={{'width':'100%','padding-top':'0px'}} >
          <div className="hero-content">
            <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <h4>Solución:</h4> Sitio Web y Presencia Online <br></br> 
            </h3>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                
                </p>
              
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
           
            <p>hola</p>

        <div >
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">La Agencia</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <p className="text-sm mb-0">
                    — Bienvenidos a la casa de todos los clientes de Fiebre™ donde pasamos encerrados 12 horas diarias pensando en ideas locas para todos nuestros clientes y buscando continuamente la fórmula para llevar a nuestros clientes a cumplir sus objetivos de ventas.
                      </p>
                </div>
                
              </div>
            </div>
        </div>


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