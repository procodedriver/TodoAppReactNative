const ADD_TODO = 'TODO/TODO/ADD_TODO';
const UPDATE_TODO = 'TODO/TODO/UPDATE_TODO';
const DELETE_TODO = 'TODO/TODO/DELETE_TODO';

const initialState = {
    todos: []
};

export default function ToDoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        ...action.todo,
                        completed: action.todo.completed
                    }
                ]
            };

        case UPDATE_TODO:
            let todos = [...state.todos];
            let indexOfUpdate = todos.findIndex((todo) =>{
                return todo.title == action.todo.title;
            });        
            todos[indexOfUpdate] = action.todo;        
            return {
                ...state,
                todos: todos,
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(function(todo) {
                    return todo.title != action.todo.title;
                })
            }
        default:
            return state;
    }
}

export function addToDo(todo) {    
    return {
        type: ADD_TODO,
        todo,
    };
}

export function updateToDo(todo){
    return {
        type: UPDATE_TODO,        
        todo,
    }
}

export function deleteToDo(todo){
    return {
        type: DELETE_TODO,
        todo,        
    }
}