import React from 'react'
import Presentacion from '../Presentacion'
import Experiencia from '../Experiencia'
import { homePresentacion, homeExperiencia, homeSkills, homeProyectos, homeContacto } from './Data'

function Home() {
    return (
        <div>
            <Presentacion {...homePresentacion}/>
            <Experiencia {...homeExperiencia}/>
            {/* <Presentacion {...homeSkills}/>
            <Presentacion {...homeProyectos}/>
            <Presentacion {...homeContacto}/> */}
        </div>
    )
}

export default Home
