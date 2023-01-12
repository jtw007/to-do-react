import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'


export default class MyList extends Component {
  render() {
    const todosComponents = this.props.theList.map((item, idx) =>{
      return <ListItem task={item} key={`listitem-${idx}`} />
    })
    return(
      <div>
        <h1>Things I should stop procrastinating:</h1>

        <ul>
          {todosComponents}
        </ul>
      </div>
    )
  }
}
