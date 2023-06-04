import React from 'react';
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";
import './SCSS/TodoTemplate.scss';
const TodoTemplate = () => {
    return (
            <div className='TodoTemplate'>
                <TodoHeader />
                <TodoMain />
                <TodoInput />
            </div>
    );
};

export default TodoTemplate;