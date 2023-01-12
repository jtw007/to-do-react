import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'


export default class MyList extends Component {

  state = {
    taskArray: this.props.theList 
  }

  clearList = () => {
    // console.log('clearing list')
    this.setState({
      taskArray: []
    })
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render() {
    const todosComponents = this.state.taskArray.map((item, idx) =>{
      return <ListItem task={item} key={`listitem-${idx}`} />
    })
    return(
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <input type='text' value={this.state.newItem} onChange={this.handleChange} />
          <button type='submit'>Add To List</button>
        </form>

        <ul>
          {todosComponents}
        </ul>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}
