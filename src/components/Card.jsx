import React from 'react'
import CardHeader from './CardHeader';
import Description from './Description';

import '../styles/Card.css'

const Card = () => {
  return (
    <div className='card'>
      
      <CardHeader />
      <Description />

      <figure>
        <img src='https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/285623717_1214979345709899_6655235087880127644_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cfcDjB880mcAX8PNxlh&_nc_ht=scontent.fntr5-1.fna&oh=00_AT8HQD1AvMJWpx1VjdWzEhhn6hOOjyaKgmsMIdnTKCwjnw&oe=629F8B46' alt="" />
      </figure>

      
    </div>
  )
}

export default Card