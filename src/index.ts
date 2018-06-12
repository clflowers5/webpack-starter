import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/main.scss';
import simpleComponent from './components/simpleComponent';

const element: string = `
<div>
  <p class="${styles.yolo}">testing123...</p>
</div>
`;

// Just for show
document.write(element);

const reactElement = React.createElement(simpleComponent, {
  message: 'React-y.'
});

ReactDOM.render(reactElement, document.getElementById('app-root'));
