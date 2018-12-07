import React from 'react';
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import './stylesheets/index.css';
import App from './javascript/react/components/App';
import * as serviceWorker from './javascript/serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('root')
  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<App />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<App />, reactElement)
    }
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
