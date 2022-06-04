import React, { useEffect, useState } from 'react'
import CardHeader from './CardHeader';
import Description from './Description';
import Reactions from './Reactions';

import '../styles/Card.css'
import CommentsSection from './CommentsSection';
import CardButtons from './CardButtons';

const Card = ({post}) => {

  const [ comments, setComments] = useState(post.comments)
  const [showComments, setShowComments] = useState(false)

  const handleShowComments = () => setShowComments(!showComments)

  useEffect(() => {
    setComments(post.comments)
  }, [post.comments])

  return (
    <div className='card'>
      
      <CardHeader post={post} />
      <Description description={post.description}/>

      <figure>
        <img src={post.postImage} alt="Post image" />
      </figure>

      <div className='reactions-data'>
        <Reactions reactions={post.reactions}/>

        <div className='comments-counter' onClick={handleShowComments}>
          {
            comments.length > 0 && <p>{comments.length} { 
              comments.length === 1 ? 'comentario' : 'comentarios' 
            }</p>
          }
        </div>
      </div>
      <hr className='card-hr'/>
      <CardButtons handleShowComments={handleShowComments}/>

      {
        showComments && <CommentsSection comments={comments} setComments={setComments}/>
      }
      
    </div>
  )
}

export default Card