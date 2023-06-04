import React, {Component} from 'react';
import './SCSS/TodoHeader.scss';
class TodoHeader extends Component {
    render() {
        return (
                <header>
                    <h1>2023년 5월 24일</h1>
                    <div className='day'>수요일</div>
                    <div className='tasks-left'>할일 X개 남음</div>
                </header>
        );
    }
}


TodoHeader.propTypes = {};

export default TodoHeader;