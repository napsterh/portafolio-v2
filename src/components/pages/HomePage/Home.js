import React from 'react'
import Presentacion from '../Presentacion'
import { homeObjOne } from './Data'

function Home() {
    return (
        <div>
            <Presentacion {...homeObjOne}/>
        </div>
    )
}

export default Home
