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
                    style={{'padding-top':'10px','maxWidth':'80% ','margin':'auto'}}>Soluciones para Gestión de Procesos (ERP)
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Digitalización de Negocio
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El principal objetivo de esta categoría es digitalizar y/o automatizar procesos de tu negocio, relacionados con los aspectos operativos o productivos.</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <ul className="text-sm mb-0">
                        <li>
                            <strong className='micolo'>Digitalización y/o automatización de procesos y flujos de trabajo: </strong>tendrás digitalizados y/o automatizados procesos como:
                            <ul className="text-sm mb-0">
                                <li><strong className='micolo'>Contabilidad/finanzas: </strong>cuentas por cobrar/por pagar, gestión de activos y generación de cierres y balances, etc.</li>
                                <li><strong className='micolo'>Facturación: </strong>automatización de los procesos de facturación con la generación de presupuestos, albaranes y facturas.</li>
                                <li><strong className='micolo'>Proyectos: </strong>control de presupuestos, costes, estimaciones, optimización de los recursos, etc</li>
                                <li><strong className='micolo'>Inventario: </strong>previsión, niveles de stock, envíos, distribuciones, devoluciones y cancelaciones, etc.</li>
                                <li><strong className='micolo'>Compras y pagos: </strong>gestión de pedidos de compra y proveedores.</li>
                                <li><strong className='micolo'>Recursos humanos: </strong>gestión de los recursos humanos, nóminas, etc.</li>
                                <li><strong className='micolo'>Logística: </strong>gestión de flotas y rutas, entre otras.</li>
                            </ul>
                        </li>
                        <li><strong className='micolo'>Integración con diversas plataformas: </strong>la solución dispondrá de APIs o Web Services para su integración con otras herramientas.</li>
                        <li><strong className='micolo'>Actualizable: </strong>accederás a actualizaciones de la solución con nuevas versiones. </li>
                        <li><strong className='micolo'>Escalable: </strong>si tu empresa crece o cambia estructuralmente, la solución se adaptará a estos cambios. </li>
                        <li><strong className='micolo'>Cumplimiento: </strong>podrás asegurar el cumplimiento de la normativa aplicable, en concreto del Reglamento por el que se regulan las obligaciones de facturación del Real Decreto 1619/2012, así como cualquier normativa de aplicación.</li>
          
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
                        <li><strong className='micolo'>0 &lt; 3 empleados: </strong>500€ (hasta 1 usuario)</li>
                        <li><strong className='micolo'>3 &lt; 9 empleados: </strong>2.000€ (hasta 3 usuarios)</li>
                        <li><strong className='micolo'>10 &lt; 50 empleados: </strong>6.000€ (hasta 10 usuarios)</li>
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
                        <li> <strong className='micolo'>El precio de este servicio en Fiebre ™ va desde los 450€ hasta los 6200€ dependiendo de las necesidades, usuarios y funcionalidades de  cada cliente.</strong>  </li>
                        
                        
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