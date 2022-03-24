import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '¿Cómo conseguir el bono digital?',
    paragraph: 'Si cumples con las condiciones establecidas en las bases de la convocatoria de la ayuda del Kit Digital, podrás disponer de un bono digital que te permitirá acceder a las soluciones de digitalización.',
  };
 

  return (
    <section id='kit'
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className=" text-color-primary fw-600 tt-u mb-8 pasos" >
                Primer paso
                  </div>
                <h3 className="mt-0 mb-12">
                  Registro

                  </h3>
                <p className="m-0">
                Regístrate en <a href='https://www.acelerapyme.gob.es/user'>el área privada</a>  y completa el <a href='https://www.acelerapyme.gob.es/quieres-conocer-el-grado-de-digitalizacion-de-tu-pyme'>test de diagnóstico digital</a> .

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/paso1.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-color-primary fw-600 tt-u mb-8 pasos">
                Segundo paso
                  </div>
                <h3 className="mt-0 mb-12">
                Consulta
                  </h3>
                <p className="m-0">
                Consulta la información disponible de las <a href='https://www.acelerapyme.gob.es/kit-digital/soluciones-digitales'>soluciones de digitalización</a>  que pondrá a tu disposición el programa Kit Digital.

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/paso2.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className=" text-color-primary fw-600 tt-u mb-8 pasos">
                Tercer paso
                  </div>
                <h3 className="mt-0 mb-12">
                  Solicitud
                  </h3>
                <p className="m-0">
                Accede a los trámites para <a href='https://sede.red.gob.es/es/procedimientos/convocatoria-de-ayudas-destinadas-la-digitalizacion-de-empresas-del-segmento-i-entre'>solicitar tu bono Kit Digital </a> (Las solicitudes se podrán presentar a partir del 15 de Marzo).
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/paso3.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;