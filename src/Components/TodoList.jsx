import React from 'react';
import NewTodo from './NewTodo';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            todos:[]
        }
    }


    createTodo = (newTodo) =>
    {
        return this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }

    delete = (idx) =>
    {
        this.setState({
            todos:this.state.todos.filter(item=>item.id!==idx)
        })
    }

    render() { 
        return (<div className='card'>

        <div className='card-header'>
        <h2 className='text text-center'>
            لیست انجام کار ها
        </h2>

        </div>
           <div className='card-body'>
          
            <NewTodo  create={this.createTodo}/>
            <br/>

            {
                this.state.todos.map((item)=>{
                    return  <Todo key={item.id} id={item.id} delete={this.delete} items={item.task}/>
                })
            }
           </div>


        </div>
        
            );
    }
}
 
export default TodoList;


