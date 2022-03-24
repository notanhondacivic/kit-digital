import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from '../sections/partials/SectionHeader';
import './servicios.css';
import Button from '../elements/Button';
import Image from '../elements/Image';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section id='fiebre'
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses} style={{'padding-bottom':'0px','padding-top':'20px'}}>
          <SectionHeader data={sectionHeader} className="center-content" />
            <div className="center-content">
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200"
                    style={{'padding-top':'10px'}}>Soluciones para Comercio Electrónico
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Creación de Tienda Online
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El principal objetivo de la categoría es crear tu página web de compraventa de productos y/o servicios que utilice medios digitales para su intercambio. Además de dar visibilidad a tu marca, dispondrás de un e-commerce o tienda online.</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <ul className="text-sm mb-0">
                        <li><strong className='micolo'>Creación de la tienda online o E-Commerce y alta del catálogo de productos: </strong>Creación de la tienda online o E-Commerce y alta del catálogo de productos: tendrás a tu disposición un catálogo en tu tienda online, en el que estarán disponibles tus productos, mediante su alta, importación o carga. La solución incluye la carga de al menos 100 referencias de tus productos, salvo que no dispongas de este número, en cuyo caso podrá ser menor.</li>
                        <li><strong className='micolo'>Métodos de pago: </strong>Pago con tarjeta de crédito o débito, contra reembolso, PayPal, etc.</li>
                        <li><strong className='micolo'>Diseño Responsive: </strong>Diseño Responsive: tu E-Commerce se podrá utilizar en todo tipo de dispositivos. </li>
                        <li><strong className='micolo'>Accesibilidad: </strong>Accesibilidad: el diseño de tu tienda online cumplirá con los criterios de conformidad de nivel AA de las Pautas WCAG-2.1. </li>
                        <li><strong className='micolo'>Posicionamiento básico en internet: </strong>Posicionamiento básico en internet: tu tienda online será indexable por los principales motores de búsqueda (Google, Bing, Yahoo).</li>
                        <li><strong className='micolo'>Autogestionable: </strong>Autogestionable: contarás también con una plataforma de gestión de contenidos para que puedas modificar los contenidos de tu web sin necesidad de ayuda.</li>
                        <li><strong className='micolo'>Formas de envío: </strong>Formas de envío: tendrás configurados e integrados los métodos de envío digital y físico de los productos de tu tienda online.</li>
                      </ul>
                </div>
                
              </div>
            </div>
            
            <div className="tiles-item reveal-from-bottom baldosa-md" data-reveal-delay="500" style={{'max-width':'50% !important','flex-basis':'1 !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Importe máximo de la ayuda</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                    <ul className="text-sm mb-0">
                        <li><strong className='micolo'>0 &lt; 3 empleados: </strong>2.000€</li>
                        <li><strong className='micolo'>3 &lt; 9 empleados: </strong>2.000€</li>
                        <li><strong className='micolo'>10 &lt; 50 empleados: </strong>2.000€</li>
                    </ul>
                </div>
                
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom baldosa-md" data-reveal-delay="500" style={{'max-width':'50% !important','flex-basis':'1 !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Precio de la solución</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                    <ul className="text-sm mb-0">
                        <li> <strong className='micolo'>El precio de este servicio en Fiebre™ va desde los 2000€ hasta los 4500€ según las características y necesidades de cada proyecto.</strong> </li>
                        
                    </ul>
                </div>
                
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              
              <Image id="logo-digitalizadores"
                className="grow"
                src={require('./../../assets/images/Logo-digitalizadores.png')}
                alt="Hero"
                width={1024}
                height={504}
                style={{'backgroundColor':'white','margin':'auto'}}/>
          
                
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;