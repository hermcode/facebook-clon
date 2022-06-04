import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/SettingsOption.css'

const SettingsOption = ({Icon, title, description}) => {
  return (
    <li>
      <Link to='#' className='settings-option'>
        <Icon className='settings-icon'/>
        <div>
          <p>{title}</p>
          { description && (<span>{description}</span> ) }
        </div>
      </Link>
    </li>
  )
}

export default SettingsOption