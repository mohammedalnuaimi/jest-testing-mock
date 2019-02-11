import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// var rest = require('rest');



// describe('test',() => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  
  // it('test mocking',(done) => {
  
  //   rest('http://localhost:3000/').then(function(response) {
  //       console.log('response: ', response);
  //       done()
  //   });
  
  // });

// })

