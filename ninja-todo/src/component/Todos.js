import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length 
        ?(
            todos.map(({id, content}) => {
                return (
                    <div className="collection-item" key={id}>
                        <span onClick={() => {deleteTodo(id)} }>{content}</span>
                    </div>
                )
            })
        )
        :(
            <p className="center green-text">You have no todo's left. Yay!</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;
