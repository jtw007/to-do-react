import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
const toDos = ["Buy ice cream", "Walk the doge", "Dirty the dishes", "Clean the dishes"]

root.render(
  <MyList theList={toDos}/>
)


