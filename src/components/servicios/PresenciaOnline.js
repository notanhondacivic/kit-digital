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
            <h2 className="mt-0 mb-16 reveal-from-bottom " data-reveal-delay="200"
                    style={{'padding-top':'10px','maxWidth':'80% ','margin':'auto'}}>Soluciones para Sitio Web y Presencia en Internet
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Creación de Página Web 
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El principal objetivo de esta categoría es que puedas tener una página web para darte visibilidad en internet.</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <ul className="text-sm mb-0">
                        
                        <li><strong className='micolo'>Dominio: </strong>la solución incluye el dominio de tu web durante un plazo mínimo de doce meses. La titularidad del dominio será tuya por completo. </li>
                        <li><strong className='micolo'>Hosting: </strong>también tendrás a tu disposición el alojamiento de la página web durante un plazo mínimo de doce meses.  </li>
                        <li><strong className='micolo'>Diseño de la página web: </strong>como parte del servicio tendrás la estructura de la web, con un mínimo de 10 apartados. Se consideran páginas o apartados de una web, elementos tales como: página de inicio (Landing Page), presentación de la empresa, formulario de contacto, descripción de productos, datos de contacto, mapa del sitio (sitemap), etc. </li>
                        <li><strong className='micolo'>Web responsive: </strong>tu web se adaptará perfectamente a cualquier tipo de dispositivo.  </li>
                        <li><strong className='micolo'>Accesibilidad: </strong>el diseño de tu web cumplirá con los criterios de conformidad de nivel AA de las Pautas WCAG-2.1.  </li>
                        <li><strong className='micolo'>Posicionamiento básico en internet: </strong>la información de tu pyme será indexable por los principales motores de búsqueda (Google, Bing, Yahoo). </li>
                        <li><strong className='micolo'>Autogestionable: </strong>dispondrás también de una plataforma de gestión de contenidos para que puedas modificar los contenidos de tu web sin necesidad de ayuda. </li>
                        <li><strong className='micolo'>Optimización de la presencia en buscadores (SEO básico): </strong>Análisis de palabras clave, SEO On-Page de 10 páginas o apartados, indexación y jerarquización del contenido. </li>
                        
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
                        <li><strong className='micolo'>0 &lt; 3 empleados: </strong>2.000€ </li>
                        <li><strong className='micolo'>3 &lt; 9 empleados: </strong>2.000€ </li>
                        <li><strong className='micolo'>10 &lt; 50 empleados: </strong>2.000€ </li>
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
                        
                        <li><strong className='micolo'>En Fiebre™ desarrollamos tu web desde los 1500€ hasta los 2500€ según las características y necesidades de cada proyecto.</strong> </li>
                        
                        
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