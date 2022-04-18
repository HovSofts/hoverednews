import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery'

export default function CommentCard({comment, replies, topParent, canReply}) {
  const [editFormShow, setEditFormShow] = useState(false);
  const [replyFormShow, setReplyFormShow] = useState(false);
  const [commentData, setCommentData] = useState(comment);
  const [commentText, setCommentText] = useState(comment.text);
  const [repliesData, setRepliesData] = useState(replies);

  useEffect(() => {
    if(editFormShow !== false){
      $('.edit_form textarea').val(editFormShow)
      document.querySelector('.edit_form textarea').focus();
      setReplyFormShow(false)
    }
  }, [editFormShow]);

  useEffect(() => {
    if(editFormShow !== false){
      document.querySelector('.reply_comment_text').focus();
      setEditFormShow(false)
    }
  }, [replyFormShow]);

  const updateComment = event => {
    event.preventDefault();
    console.log(event)
    commentData.text = event.target.text.value;
    setCommentText(event.target.text.value);

    setEditFormShow(false)
  }

  const addReply = event => {
    event.preventDefault();

    document.querySelector('.comment_card_'+topParent+' .replies').innerHTML += ReactDOMServer.renderToString(<CommentCard comment={{
      name: 'Forhad Hossain',
      image: 'https://via.placeholder.com/150',
      createdAt: '03/03/2022',
      text: event.target.reply_comment_text.value,
      commentId: commentData.commentId+''+repliesData.length,
      parentId: topParent
    }} topParent={topParent} key={commentData.commentId+''+repliesData.length} replies={[]} />);

    setReplyFormShow(false)
  }

  return (
    <>
      <div className={'comment_card comment_card_'+comment.commentId}>
        <div className='image'>
          <Image width="100%" src='https://via.placeholder.com/150' layout="fill" alt='Commenter' />
        </div>
        <div className='details'>
          <div className='top'>
            <div className='left'>
              <div className='name'>{commentData.name}</div>
              <div className='date'> - {commentData.createdAt} | </div>
            </div>
            <div className='actions'>
              <div className='edit' onClick={() => {setEditFormShow(commentData.text)}}>Edit</div>
              {
                canReply?
                <div className='reply' onClick={() => {setReplyFormShow(true)}}>Reply</div>
                : ''
              }
              <div className='delete'>Delete</div>
            </div>
          </div>
          <div className='text'>{commentText}</div>
          
          {
            editFormShow === false?
            <></>
            :
            <form className='edit_form default bg_w' onSubmit={updateComment}>
              <div className='inputs'>
                <div className='input_container'>
                  <label>Edit your comment</label>
                  <textarea style={{height: '80px'}} className='edit_comment_text' name='text' required></textarea>
                </div>
              </div>
              <div className='actions' style={{marginTop: '10px'}}>
                <button className='submit_btn w_min'>Update Comment</button>
                <button className='submit_btn w_min bg_gray' type='button' onClick={() => {setEditFormShow(false)}}>Cancel</button>
              </div>
            </form>
          }
  
          {
            repliesData.length > 0 && (
              <div className='replies'>
                {
                  repliesData.map(reply => (
                    <CommentCard comment={reply} canReply={false} topParent={topParent} key={reply.id} replies={[]} />
                  ))
                }
              </div>
            )
          }

          {
            replyFormShow === false?
            <></>
            :
            <form className='reply_form default bg_w' onSubmit={addReply}>
              <div className='inputs'>
                <div className='input_container'>
                  <label>Reply to this comment</label>
                  <textarea style={{height: '80px'}} className='reply_comment_text' name='reply_comment_text' required></textarea>
                </div>
              </div>
              <div className='actions' style={{marginTop: '10px'}}>
                <button className='submit_btn w_min'>Reply</button>
                <button className='submit_btn w_min bg_gray' type='button' onClick={() => {setReplyFormShow(false)}}>Cancel</button>
              </div>
            </form>
          }
        </div>
      </div>

    </>
  )
}
