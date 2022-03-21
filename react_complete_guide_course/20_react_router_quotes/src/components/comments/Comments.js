import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { useEffect, useCallback } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import LoadingSpinner from '../UI/LoadingSpinner';

import CommentsList from './CommentsList';


const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();
  const {quoteId} = params;

  const {sendRequest, status, data: loadedComments} = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler= useCallback( ()=> {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  useEffect(()=> {
    sendRequest(quoteId);
  }, [quoteId,sendRequest]);

  let comments;
  if(status==="pending")
  {
    console.log("1");
    comments =<div className='centered'><LoadingSpinner/></div>// <p>Comments...</p>;
  }
  else if(status ==="completed" && loadedComments && loadedComments.length>0)
  {
    console.log("2");
    comments = <CommentsList comments={loadedComments}/>;
  }
  else
  {
    console.log("3");
    comments = <div className='centered'><p>No Comments to show</p></div>;
  }

  console.log("loaded comments ", loadedComments);
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
