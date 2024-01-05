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
                    style={{'padding-top':'10px'}}>Soluciones para Marketplace
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Incrementa tu nivel de ventas
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El objetivo principal de esta categoría es ayudarte a dirigir tus referencias y productos para incrementar tu nivel de ventas, optimizando los recursos existentes, eligiendo los canales de distribución adecuados y adaptando tus referencias y productos a las necesidades externas.</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <ul className="text-sm mb-0">
                        <li><strong className='micolo'>Estudio previo de alternativas y alta en la plataforma: </strong>la solución incluye la apertura de cuenta y alta de tu perfil, por tu cuenta, en, al menos, una plataforma de Marketplace y en, al menos, un país.</li>
                        <li><strong className='micolo'>Análisis de la competencia: </strong> la solución incluye la realización de una investigación de mercado focalizada en las características de tus competidores para mejorar tu proceso de toma de decisiones y ayudarte a alcanzar una posición competitiva.</li>
                        <li><strong className='micolo'>Diseño y definición de la estrategia de negocio:  </strong>la solución incluye la generación de la estrategia de negocio para lograr la consecución de los objetivos deseados orientando los recursos disponibles hacia dicha finalidad. </li>
                        <li><strong className='micolo'>Producción del catálogo de referencias:  </strong>análisis de las categorías a comercializar para seleccionar, al menos, diez productos alineados con la estrategia de negocio, salvo que no dispongas de este número, en cuyo caso podrá ser menor. </li>
                        <li><strong className='micolo'>Creación del contenido del listing:  </strong> definición de, al menos, diez descripciones del catálogo de referencias, salvo que no dispongas de este número, en cuyo caso podrá ser menor.</li>
                        <li><strong className='micolo'>Alta de referencias:  </strong> carga de, al menos, diez referencias, y sus respectivas descripciones y fotografías, en la plataforma, salvo que no dispongas de este número, en cuyo caso podrá ser menor, acompañada por la descripción y fotografía individual de cada producto.</li>
                        
                        
                        
                        
                        
                         </ul>
                    <p className='text-sm'>El importe de la ayuda no incluirá el coste asociado a la suscripción o alta en la plataforma de Marketplace ni los costes variables asociados a la venta de las referencias dadas de alta en la plataforma.</p>
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