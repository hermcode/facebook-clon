import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import '../styles/Options.css'
import Settings from './Settings';

const Options = ({username}) => {

  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = () => setShowSettings(!showSettings)
  return (
    <div className='card-options'>
      <figure onClick={handleShowSettings}>
        <BiDotsHorizontalRounded />
      </figure>
      <Settings showSettings={showSettings} username={username} />
    </div>
  )
}

export default Options