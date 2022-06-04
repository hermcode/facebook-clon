import React from 'react'
import '../styles/Description.css'

const Description = ({description}) => {
  return (
    <div className='description'>
        <p>{description}</p>
      </div>
  )
}

export default Description