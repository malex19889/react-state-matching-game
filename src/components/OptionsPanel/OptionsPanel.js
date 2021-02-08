import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => (
  <div>
    <TileSelector numtiles={props.numtiles}/>
    <Button playing={props.playing} startGame={props.startGame}/>
  </div>
)
  
  

export default OptionsPanel
