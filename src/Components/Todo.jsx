import React from 'react';
import Swal from "sweetalert2"; 

class Todo extends React.Component {
    

    Delete =() =>
    {
        Swal.fire({
            title: 'آیا مطمنی میخوای پاک کنی?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'green',
            confirmButtonText: 'آره !',
            cancelButtonText: 'خیر!',

          }).then((result) => {
            if (result.isConfirmed) {
        this.props.delete(this.props.id)
              
              Swal.fire(
                'حذف شد!',
                'با موفقیت حذف شد',
                'success'
              )
            }
          })
    }


    render() { 
        return <div className='row'>
            <div className='col-md-9'>
            <ul className="list-group">
                          <li className="list-group-item">
                              {this.props.items}
                          
                          </li>
            </ul>
            </div>
            <div className='col-md-3'>
            
            <button className='btn btn-danger btn-block'
                          onClick={this.Delete}
                          >حذف</button>
            </div>
        </div>;
    }
}
 
export default Todo;