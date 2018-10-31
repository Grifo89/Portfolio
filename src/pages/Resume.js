import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

class Resume extends Component {
  render(){
    return(
      <div className="resume-container">
      <div className="resume-sub-container">
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{textAlign:"center"}}>
              <img src={require("../images/avatar.png")}
              alt="avatar"
              style={{height:"200px"}}
            />
            </div>

            <h2 style={{paddinTop:"2em"}}>Christian Salazar Miño</h2>
            <h4 style={{color:"grey"}}>Desarrollador & Data Scientist</h4>
            <hr style={{borderTop:"3px solid #FF1E00", width:"74%"}}/>
            <p>Soy desarrollador autodidacta <span role="img" aria-label="">💪</span> y data scientist <span role="img" aria-label="">🚀🚀🚀</span> con título en economía  <span role="img" aria-label="">📈</span> de la universidad del Rosario de Bogotá Colombia. Manejo varios lenguagues de programacion como: Python, JavaScript y R. También manejo bases de datos SQL (PosgreSQL, MySQL) y NoSQL (MongoDB, Redis); tengo conocimiento en procesamiento de datos a través de modelos stadísticos y de aprendizaje de máquina <span role="img" aria-label="d">🤖🤖</span>, también desarrollo applicaciones fullstack <span role="img" aria-label="">🦖🦖🦖🦖</span> a través de frameworks como React y backend en NodeJS-express. Manejo de control de versiones. Amo aprender cosas nueva y los retos <span role="img" aria-label="">🔥🔥🔥</span> </p>
            <hr style={{borderTop:"3px solid #FF1E00", width:"74%"}}/>
            <h5>Email</h5>
            <p>calaca89@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educación</h2>
            <Education
              startYear={2010}
              endYear={2017}
              schoolName="Universidad del Rosario"
              schoolDescription="Pregrado en Economía"
            />
            <hr style={{borderTop:"3px solid #FFB100"}}/>
            <h2>Experiencia</h2>
            <Experience
              startYear="2017"
              endYear="2017"
              jobName="Kuehne + Nagel"
              position="Regional Credit + Accounts Receivable Manager Assistant"
              jobDescription="En mi rol como Regional Credit + Accounts Receivable Manager Assistant tenía que llevar el control de los ingresos de dinero en todas las cuentas bancarias de todo el Knowledge Center, monitorear la deuda de todos los clientes, hacer la predicción del recaudo y monitoriar el credito. Para realizar mis tareas desarrollé aplicaciones de VBA y algo de lo cual me siento orgullozo es que cuando estaba de practicante calculé la prima de riesgo cambiario para el negocio en Colombia."
            />
            <Experience
              startYear="2018"
              endYear="2018"
              jobName="Alkanza"
              position="Front end Developer"
              jobDescription="
              En mi rol como Front end Developer tenía que desarrollar parte de aplicaciones junto con un equipo a través de la metodología de desarrollo agile Scrum."
            />
            <hr style={{borderTop:"3px solid #FFB100"}}/>
            <h2>Habilidades</h2>
            <h4>JavaScript</h4>
            <Skills
              skill="Vanilla JS"
              progress={80}
              buffer={80}
            />
            <Skills
              skill="React"
              progress={70}
              buffer={70}
            />
            <Skills
              skill="NodeJS-express"
              progress={40}
              buffer={40}
            />
            <h4>Python</h4>
            <Skills
              skill="Python"
              progress={70}
              buffer={70}
            />
            <h4>R</h4>
            <Skills
              skill="R"
              progress={40}
              buffer={40}
            />
          </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default Resume;
