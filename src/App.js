import React from 'react';
import TodoList from './Components/TodoList';

class App extends React.Component {
    render() { 
        return <div className='container'>
            <TodoList/>
            <p className='text text-center'>
                App by : Pooria Asiabi👌
            </p>
        </div>;
    }
}
 
export default App;