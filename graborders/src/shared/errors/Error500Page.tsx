import React, { Component } from 'react'
import './Styles/error.css'
import {Link } from 'react-router-dom'
import { i18n } from "../../i18n";
export class Error500Page extends Component {
  render() {
    return (
      <div className='app__error'>
      <h1 className='error__title'>500</h1>
      <div className='error__description'>{i18n('errors.500')}</div>
      <Link to="/" className="underline">
      <div className='error__button'> 
      {i18n('errors.backToHome')} </div>
      </Link>
    </div>
    )
  }
}

export default Error500Page
