import React from 'react'
import './Styles/error.css'
import {Link } from 'react-router-dom'
import { i18n } from "../../i18n";
function Error404Page() {
  return (
    <div className='app__error'>
      <h1 className='error__title'>404</h1>
      <div className='error__description'>{i18n('errors.404')}</div>
      <Link to="/" className="underline">
      <div className='error__button'> 
      {i18n('errors.backToHome')} </div>
      </Link>
    </div>
  )
}

export default Error404Page
