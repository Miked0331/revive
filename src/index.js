import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Landing from './components/Landing'
import Nav from './components/Nav'


ReactDOM.render(<div>
    <Landing />
    <Nav />
    <App />

</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
