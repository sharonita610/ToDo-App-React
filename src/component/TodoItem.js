import React from 'react';
import {MdDone} from "react-icons/md";

const TodoItem = () => {
    return (
           <li className='todo-list-item'>
               <div className='check-circle'>
                   <MdDone />
               </div>
           </li>
    );
};

export default TodoItem;