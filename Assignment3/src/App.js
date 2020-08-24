import React , {Component} from 'react';
import './App.css';
import ListItems from './Items';

class App extends Component {

  state ={
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }

  handleInput = event =>{
    this.setState({
      currentItem:{
        text:event.target.value,
        key:Date.now()
      }
    })
  }

  addItem = event =>{
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==''){
      const newItems = [...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })      
    }
  }

  handleDelete = key =>{

    const updateItems = this.state.items.filter(item=>{
        return item.key !== key
    })

    this.setState({
      items:updateItems
    })

  }

  render(){
    return (
      <div className='App'>
        <h1>To-Do App</h1>
        <header>
          <form id='to-do-form' onSubmit={event=>this.addItem(event)}>
            <input 
            type='text' 
            placeholder='Enter text '
            value={this.state.currentItem.text}
            onChange={event=>this.handleInput(event)}/>
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItems 
        items={this.state.items}
        onClick={key=>this.handleDelete(key)}/>
      </div>

    );
  }
}

export default App;
