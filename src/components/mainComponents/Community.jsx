import React from 'react'
import './Community.css';
import on from './on.jpeg'
import File from './File';

const Community = () => {
  return (
    <>
      <div className='main'>
        <div className='one'>
        <img className='on' src={on}/>
        <div className='input'>
        <input className='post' type='text'
        placeholder='Start a post' />
        </div>
        <div className='media'>
        <File />
        </div>
        </div>
        <div className='two'>
          two
        </div>
      </div>
    </>
  )
}

export default Community