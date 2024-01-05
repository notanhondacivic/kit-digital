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
                    style={{'padding-top':'10px'}}>Soluciones para Presencia Avanzada en Internet
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Mejora tu presencia Online
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El principal objetivo de esta categoría es la prestación de funcionalidades y/o servicios que aseguren tu posicionamiento en internet, aumentando tu alcance de potenciales clientes e incrementando el tráfico de visitas en tu/-s plataforma/-s.

</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <ul className="text-sm mb-0">
                        <li><strong className='micolo'>Posicionamiento básico en internet: </strong>a solución deberá posicionar la información básica del negocio, contacto y perfil de tu empresa en los principales sites, redes de negocio o directorios de empresas y profesionales.</li>
                        <li><strong className='micolo'>Análisis de palabras clave: </strong>Gestión, búsqueda y análisis de palabras clave con el fin de desarrollar estrategias útiles para que los buscadores clasifiquen el contenido y ayuden a los usuarios a encontrar resultados relevantes para sus consultas.</li>
                        <li><strong className='micolo'> Análisis de la competencia: </strong>la solución incluye un análisis mensual de la competencia para informarte de tu situación frente a otros competidores. </li>
                        <li><strong className='micolo'>SEO On-Page:  </strong> la solución debe ofrecer un servicio mínimo de dos páginas o apartados SEO On-Page, optimizando la estructura y el contenido interno para mejorar la posición natural de tu pyme en buscadores, así como la indexación y jerarquización del contenido.</li>
                        <li><strong className='micolo'> SEO Off-Page: </strong> la solución deberá proveer este servicio, que conllevará la ejecución de acciones fuera del entorno del sitio web para mejorar tu posicionamiento orgánico.</li>
                        <li><strong className='micolo'> Informes mensuales de seguimiento: </strong>la solución incluye un reporte mensual de los resultados de las acciones ejecutadas para generar consciencia de la evolución y la repercusión de las mismas en la presencia en internet de tu negocio. </li>

                       
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