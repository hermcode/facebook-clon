import { useState } from 'react'
import Comment from './Comment'
import '../styles/CommentsSection.css'

const CommentsSection = ({comments, setComments}) => {

  const [ newComment, setNewComment ] = useState('')
  const handleNewComment = (e) => setNewComment(e.target.value)


  const handleSubmitNewComment = (e) => {
    e.preventDefault()

    const message = newComment
    setComments([{user:'Tu', message}, ...comments])
    setNewComment('')
  }

  return (
    <div className='comments-section active'>
      <hr className='comments-hr'/>

      <form action="" className='comments-form' onSubmit={handleSubmitNewComment}>
        <input 
          type="text" 
          placeholder='Escribe un comentario...' 
          value={newComment} 
          onChange={handleNewComment}
        />
      </form>

      {
        comments.map((comment, index) => (
          <Comment
            key={index} 
            user={comment.user} 
            message={comment.message}
          />
        ))
      }
      
    </div>
  )
}

export default CommentsSection