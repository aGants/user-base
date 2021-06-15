import React from 'react';
import './style.scss'

const Loading= () => {
  return (
    <div className="loading">
      <svg className="spinner" width="105px" height="105px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  )
}
    
export default Loading;
