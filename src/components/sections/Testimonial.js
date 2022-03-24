import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

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
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Bienvenid@ a Fiebre™',
    paragraph: 'Bienvenidos a la casa de todos los clientes de Fiebre™ donde pasamos encerrados 12 horas diarias pensando en ideas locas para todos nuestros clientes y buscando continuamente la fórmula para llevar a nuestros clientes a cumplir sus objetivos de ventas. Nuestra aventura nace con el fin de dar vida a todas nuestras ideas lokas, creativas y diferentes. ¿Cansado de publicidad aburrida? ¿No tienes buenos resultados? ¿Tienes mala reputación? ¿Tu primo informático hace tu página web? Somos la p_uta Fiebre.'
  };

  return (
    <section id='fiebre'
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Proceso Creativo</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <p className="text-sm mb-0">
                    — En Fiebre™ tratamos los proyectos como una receta de cocina de Ferran Adrià, mimada y cuidada hasta el más mínimo detalle para que nuestros clientes disfruten de un suculento menú de éxitos profesionales.
                      </p>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Predicamos con el ejemplo</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                  <p className="text-sm mb-0">
                    — Somos los creadores de Laamina, un proyecto especializado en la decoración de espacios, dirigido a todos aquellos que quieran dar un toque especial a su hogar o negocio. Nuestro deseo es que el arte de diseñadores y fotógrafos esté al alcance de todos los bolsillos.
                      </p>
                </div>
                
              </div>
            </div>

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
{/*
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>
*/}
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;