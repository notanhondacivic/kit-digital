import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

import {Button,  SideSheet,Position, Paragraph } from 'evergreen-ui'

import { NavLink, Switch, Route } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const innerClasses2 = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Nuestros Servicios',
    paragraph: ''
  };
  const sectionHeader2 = {
    title: '¿Cómo de grande es tu empresa?',
    paragraph: ''
  };
  const [isShown, setIsShown] = React.useState(false)

  return (
    <>
    <section id="servicios"
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sitio Web y Presencia en Internet
                    </h4>
                  <p className="m-0 text-sm">
                  La solución para que tus clientes te encuentren rápida y fácilmente. Te haremos un sitio personalizado, auto gestionable, responsive y funcional, incluyendo configuración básica de SEO.
                    </p>

                    <React.Fragment>
                      <SideSheet 
                        position={Position.LEFT}
                        isShown={isShown}
                        onCloseComplete={() => setIsShown(false)}
                        preventBodyScrolling
                      >
                        <Paragraph  id='botonPadre'
                          
                          margin={40}>
                             <Button 
                      id='informacionCerrar'
                      onClick={() => setIsShown(false)} 
                      
                      >Cerrar</Button>
                            </Paragraph>
                       
                        <Paragraph  id='titulo-sideSheet'
                          
                        margin={40}>
                          <Image 
                            src={require('./../../assets/images/feature-tile-icon-01.svg')}
                            alt="Features tile icon 01"
                            width={34}
                            height={34} />
                        Sitio Web y Presencia en Internet</Paragraph>
                        <Paragraph id='parrafo-sideSheet'
                  
                          margin={40}>-Coste: 2.000€ <br></br>-Duración de la prestación: 12 meses</Paragraph>

                        <Paragraph id='titulo-sideSheet'
                        
                        margin={40}>
                          <Image 
                            src={require('./../../assets/images/feature-tile-icon-02.svg')}
                            alt="Features tile icon 04"
                            width={34}
                            height={34} />
                        Comercio Electrónico</Paragraph>
                        <Paragraph id='parrafo-sideSheet'
                          
                          margin={40}>-Coste: 2.000€ <br></br>-Duración de la prestación: 12 meses</Paragraph>

                        <Paragraph id='titulo-sideSheet'
                        
                        margin={40}>
                          <Image 
                            src={require('./../../assets/images/feature-tile-icon-03.svg')}
                            alt="Features tile icon 04"
                            width={34}
                            height={34} />
                        Gestión de redes sociales</Paragraph>
                        <Paragraph id='parrafo-sideSheet'
                          
                          margin={40}>
                            -Coste: 2.000€ <br></br>
                            -Duración de la prestación: 12 meses
                        </Paragraph>

                        <Paragraph id='titulo-sideSheet'
                        
                        margin={40}>
                          <Image 
                            src={require('./../../assets/images/feature-tile-icon-04.svg')}
                            alt="Features tile icon 04"
                            width={34}
                            height={34} />
                        Gestion de Clientes (CRM)</Paragraph>
                        <Paragraph id='parrafo-sideSheet'
                          
                          margin={40}>-Coste: De 2.000€ a 4.000€<br></br>-Duración de la prestación: 12 meses</Paragraph>
                        
                        <Paragraph id='titulo-sideSheet'
                         
                        margin={40}>
                          <Image 
                            src={require('./../../assets/images/feature-tile-icon-06.svg')}
                            alt="Features tile icon 04"
                            width={34}
                            height={34} />
                        Gestión de Procesos (ERP)</Paragraph>
                        <Paragraph id='parrafo-sideSheet'
                          
                          margin={40}>-Coste: De 500€ a 6.000€ <br></br>-Duración de la prestación: 12 meses</Paragraph>




                        
                      </SideSheet>
                    </React.Fragment>
                      <NavLink to='/PresenciaOnline'><Button id="informacion">Más Información</Button></NavLink>
    
                  
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Comercio Electrónico
                    </h4>
                  <p className="m-0 text-sm">
                  La solución para que tus clientes puedan comprarte en cualquier momento, con todo tu portfolio de artículos o servicios, con intranet gestionable y enlace a contabilidad, incluyendo posicionamiento básico de SEO.
                    </p>
                   
                      
                    <NavLink to='ComercioElectronico'><Button id="informacion">Más Información</Button></NavLink>
                      
                    
                </div>
              </div>
            </div>
            
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Gestión de Redes Sociales
                    </h4>
                  <p className="m-0 text-sm">
                    La solución para promocionar y gestionar tus redes sociales, mantener la constancia y comunicar a tus clientes lo que realmente haces y les interesa.
                    </p>
                    {/* 
                    <Button 
                      id='informacion'
                      onClick={() => setIsShown(true)} 
                      >Más información</Button>
                      */} 

                      
                </div><NavLink to='/RedesSociales'><Button id="informacion">Más Información</Button></NavLink>
              </div>
            </div>
            
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Gestion de Clientes (CRM)
                    </h4>
                  <p className="m-0 text-sm">
                  La solución para gestionar tus clientes, iniciativas, oportunidades, acciones comerciales y ventas realizadas.
                    </p>
                    
                      <NavLink to='/CRM'><Button id="informacion">Más Información</Button></NavLink>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Gestión de Procesos (ERP)
                    </h4>
                  <p className="m-0 text-sm">
                  La solución para llevar todo el control contable, de facturación, costes, compras, ventas y recursos humanos con el mejor ERP del mercado, ODOO.
                    </p>
                    <NavLink to='/ERP'><Button id="informacion">Más Información</Button></NavLink>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Marketplace
                    </h4>
                  <p className="m-0 text-sm">
                  La solución ideal para ayudarte a dirigir tus productos con el fin de incrementar tu nivel de ventas, optimizando los recursos existentes, eligiendo los canales de distribución adecuados…
                    </p>
                    <NavLink to='/Marketplace'><Button id="informacion">Más Información</Button></NavLink>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Presencia avanzada en internet
                    </h4>
                  <p className="m-0 text-sm">
                  La solución para la prestación de funcionalidades y/o servicios que aseguren tu posicionamiento en Internet, aumentando el tráfico y alcance de tus clientes potenciales.
                    </p>
                    <NavLink to='/PresenciaAvanzadaEnInternet'><Button id="informacion">Más Información</Button></NavLink>
                </div>
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </section>
    <section id='foto'
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses2} >
          <SectionHeader data={sectionHeader2} className="center-content" />

          <div className="hero-figure reveal-from-bottom illustration-element-01 " data-reveal-value="20px" data-reveal-delay="800">
           
            
              <Image id="tabla"
                className="has-shadow"
                src={require('./../../assets/images/tabla.png')}
                alt="Hero"
                width={1024}
                height={504}
                style={{'backgroundColor':'white','width':'100% !important'}}/>
            
          </div>
        </div>
      </div>
    </section>
    
    
    </>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;