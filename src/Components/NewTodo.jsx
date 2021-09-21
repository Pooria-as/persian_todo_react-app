import React from 'react';
import {v1 as uuid} from "uuid"; 
import Swal from "sweetalert2"; 

class NewTodo extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            task:'',
            
        }
    }   

  
   
    handleTask = (e) =>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    submitForm = (e) =>
    {
        e.preventDefault();
        if(this.state.task==='')
        {
            Swal.fire({  
                icon: 'error',  
                title: 'خطا',  
                text: 'فیلد  خالی است',  
              });  

        }
        else
        {
            this.props.create({...this.state,id:uuid()})
            Swal.fire({  
                icon: 'success',  
                title: 'موفق',  
                text: 'برنامه با موفقیت اضافه شد',  
              });  


        }
    
    } 

    render() { 
        return <div>

        <form onSubmit={this.submitForm}>
           <div className='row'>
               <div className='col-md-9'>
               <input 
            name='task'
            onChange={this.handleTask}
            value={this.state.task}
            className="form-control"
            />
                </div>
                <div className='col-md-3'>
                <button onClick={this.validation} className='btn btn-block btn-success'>
                افزودن
            </button>
                </div>
           </div>

           
        </form>
        </div>;
    }
}
 
export default NewTodo;