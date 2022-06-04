import React, { useState } from 'react'
import Card from './Card'
import '../styles/Home.css'
import { data } from '../data'

const App = () => {

  const [ posts, setPosts ] = useState(data)

  return (
    <main className='main-container'>
      <div className="container">
        {
          data.map( (post) => ( 
            <Card key={post.id} post={post}/>
          ))
        }
      </div>
    </main>
  )
}

export default App