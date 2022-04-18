import React, { useState } from 'react'
// Components
import CommentCard from './CommentCard'

export default function Comments() {
  
  const [comments, setComments] = useState([
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '1',
      parentId: null
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '2',
      parentId: null
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '4',
      parentId: '1'
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '5',
      parentId: '2'
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '6',
      parentId: '3'
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      commentId: '3',
      parentId: null
    },
  ]);

  const rootComments = comments.filter(comment => comment.parentId === null);

  const getReplies = commentId => {
    return comments.filter(comment => comment.parentId === commentId);
  }

  const addComment = event => {
    event.preventDefault();

    const comment = {
      name: 'Forhad Hossain',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: event.target.comment_text.value,
      commentId: comments[comments.length - 1].commentId + 1,
      parentId: null
    }

    setComments([...comments, comment]);
  }

  return (
    <div className='comments'>
      <div className='section_title'>Comments (02)</div>

      <div className='comments_container'>
        {
          rootComments.map((comment, index) => {
            return(
              <CommentCard key={index} comment={comment} canReply={true} topParent={comment.commentId} replies={getReplies(comment.commentId)} />
            )
          })
        }
      </div>

      <form className='add_comment_form default bg_w' style={{marginTop: '30px'}} onSubmit={addComment}>
        <div className='input_container'>
          <label htmlFor='add_comment_input'>Add a comment</label>
          <textarea id='add_comment_input' style={{height: '80px'}} placeholder='Write your comment here...' name='comment_text' required></textarea>
        </div>
        <div className='actions' style={{marginTop: '15px'}}>
          <button className='submit_btn'>Post Comment</button>
        </div>
      </form>
    </div>
  )
}
