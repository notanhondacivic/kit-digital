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
                    style={{'padding-top':'10px','maxWidth':'80% ','margin':'auto'}}>Soluciones para Gestión de Clientes (CRM)
                </h2>
                <div className='mititulo'>
                <h3 className="mt-0 mb-16 reveal-from-bottom mitexto" data-reveal-delay="200"
                    style={{'color':'#ffed00'}}>Digitalización de Clientes
                    </h3>
                {/*<Button className='miboton reveal-from-bottom' data-reveal-delay="200" >
                Precio 2000€
  </Button>*/}
                </div>
            <p className='reveal-from-bottom' style={{'width':'80%','margin':'auto', 'padding-bottom':'30px','padding-top':'20px'}} data-reveal-delay="300">El principal objetivo de esta categoría es digitalizar y optimizar la gestión de las relaciones comerciales con tus clientes.</p>
            </div>
            
          <div className={tilesClasses} style={{'width':'80%','margin':'auto'}}>
                
            <div className="tiles-item reveal-from-bottom baldosa-lg" data-reveal-delay="400" style={{'max-width':'auto !important','flex-basis':'auto !important'}}> 
              <div className="tiles-item-inner ">
              <div className="testimonial-item-footer   ">
                  <span className="testimonial-item-name text-color-high">Funcionalidades y servicios</span>
                 
                </div>
                <div className="testimonial-item-content has-top-divider " style={{'paddingTop':'30px'}}>
                <ul className="text-sm mb-0">
                        <li><strong className='micolo'>Gestión de clientes: </strong>serás capaz de almacenar y consultar los datos de cada uno de tus clientes, desde su alta como oportunidad de negocio, y simular la compra de productos o contratación de servicios.</li>
                        <li><strong className='micolo'>Gestión de Clientes potenciales (Leads): </strong>podrás dar de alta nuevos Leads de forma manual o mediante una importación por fichero. Los datos asociados a los Leads te permitirán su gestión comercial con el objetivo de convertirlos en clientes. Adicionalmente podrás parametrizar reglas de negocio para la asignación de Leads según diferentes criterios.  </li>
                        <li><strong className='micolo'>Gestión de oportunidades: </strong>tendrás la posibilidad de gestionar todas las oportunidades de negocio que conlleven el envío al cliente potencial o Lead de ofertas y presupuestos. Además, podrás comprobar el estado de cada oportunidad (en análisis, oferta presentada, en negociación, ganadas, canceladas, etc.).   </li>
                        <li><strong className='micolo'>Acciones o tareas comerciales: </strong>creación de acciones y tareas comerciales, tanto de forma manual como automática.  </li>
                        <li><strong className='micolo'>Reporting, planificación y seguimiento comercial: </strong>podrás realizar seguimiento mediante indicadores (KPI´s), listado de oportunidades, y otros, con diferentes niveles de agregación de información en función de tus necesidades. Podrás también generar informes para el seguimiento y monitorización de tu actividad comercial, contemplando ratios de eficiencia, estado de fases, pipeline y otros atributos medibles (como productos, cotizaciones, etc.), y según los canales, perfiles, roles y/o fases comerciales. Estos informes podrán mostrar, al menos, datos mensuales, acumulados y/o comparativos entre diferentes ejercicios comerciales.  </li>
                        <li><strong className='micolo'>Alertas: </strong>serás capaz de visualizar Alertas de Clientes en formato gráfico de diferente tipología (iconos, mensajes emergentes, etc.).  </li>
                        <li><strong className='micolo'>Gestión documental: </strong>la solución incluirá un software para la gestión centralizada de la documentación capaz de insertar y/o vincular documentos tanto relativos a tu actividad comercial, como los que proporcionados por los propios clientes.  </li>
                        <li><strong className='micolo'>Diseño Responsive: </strong>tendrás una interfaz funcional en todo tipo de dispositivos.  </li>
                        <li><strong className='micolo'>Integración con diversas plataformas: </strong>dispondrás de APIs o Web Services para la consolidación de la información y datos de toda tu empresa.  </li>
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
                        <li><strong className='micolo'>0 &lt; 3 empleados: </strong>2.000€ (incluye 1 usuario)</li>
                        <li><strong className='micolo'>3 &lt; 9 empleados: </strong>2.000€ (incluye 1 usuario)</li>
                        <li><strong className='micolo'>10 &lt; 50 empleados: </strong>4.000€ (incluye 3 usuarios)</li>
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
                        
                        <li> <strong className='micolo'>El precio de este servicio en Fiebre ™ va desde los 2000€ hasta los 5000€ dependiendo de las necesidades, usuarios y funcionalidades de  cada cliente.</strong> </li>
                        
                        
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