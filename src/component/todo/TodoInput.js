import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import './SCSS/TodoInput.scss';
import cn from 'classnames';

const TodoInput = ({addTodo}) => {

    // 입력창이 열리는 여부를 표현하는 상태값
    const [open, setOpen] = useState(false);

    // 할일 입력창에 입력한 내용을 표현하는 상태값
    const [todoText, setTodoText] = useState('');

    // + 버튼 클릭 시 이벤트 처리
    const onToggle = () => {
        setOpen(!open);
    };

    // submitEvent handler
    const submitHandler = e => {

        e.preventDefault(); // 태그의 기느을 제한해야된다. 화면이 전환되면 안됨.
        // console.log('폼이 제출됨');

        // console.log(todoText);
        addTodo(todoText);

        // 입력이 끝나면 입력창 비우기
        setTodoText('');

    };

    // input change 이벤트 핸들러 함수
    const todoChangeHandler = e => {

        // console.log(e.target.value);
        setTodoText(e.target.value);

    }
    return (
            <>
                {
                        open && (
                                <div className='form-wrapper'>
                                    <form className="insert-form" onSubmit={submitHandler}>
                                        <input type='text'
                                               placeholder='할 일을 입력후, 엔터를 누르세요'
                                               onChange={todoChangeHandler}
                                               autoFocus
                                               value={todoText}
                                        />
                                    </form>
                                </div>
                        )
                }
                {/*
                    cn() : 첫번째 파라미터는 항상 유지할 클래스
                    두번째 파라미터는 논리 상태값
                    => 논리상태값이 true일경우 해당클래스가 추가
                       false일 경우 제거

                       ** css 클래스 이름이 다를 경우 abc : open 이런 식으로 하면 된다
                 */}
                <button className={cn('insert-btn', {open})} onClick={onToggle}>
                    <MdAdd/>
                </button>
            </>

    );
};

export default TodoInput;