import React from 'react'
import OwnerData from './OwnerData';


import '../styles/CardHeader.css'
import Options from './Options';

const CardHeader = ({ post }) => {

  const { username, pp, date } = post
  return (
    <div className='card-header'>
      <OwnerData 
        username={username}
        pp={pp}
        date={date}
      />
      <Options username={username} />
    </div>
  )
}

export default CardHeader