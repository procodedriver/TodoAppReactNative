import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon, ListItem } from 'native-base';
import ToDoItem from './ToDoItem';
import NewToDo from './NewToDo';
import AddToDoButton from './AddToDoButton';
import { connect } from 'react-redux';
import { addToDo, deleteToDo, updateToDo } from './ToDoReducer';

class ToDoAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            new_todo: false
        };
    }

    saveToDoData = (todo) => {
        this.addNewToDo(show = false);
        this.props.addToDo(todo);
    }

    addNewToDo = (show) => {
        this.setState({
            new_todo: show
        });
    }

    screenFilterTodos = () => {
        const { screen, todos } = this.props;
        if(screen == "Active") {
            return todos.filter(function(todo) {
                return !todo.completed;
            })
        } else if(screen == "Completed") {
            return todos.filter(function(todo) {
                return todo.completed;
            })
        } else {
            return todos;
        }
    }

    render() {

        const { new_todo } = this.state;
        const { todos, show_new_todo, name, deleteTodo, updateTodo } = this.props;

        let listItem = [];
        if(todos.length > 0) {
            let scrTodos = this.screenFilterTodos();
            listItem = scrTodos.map((todo, index) =>
                <ToDoItem
                    key = { index }
                    todo = { todo }
                    deleteTodo = { deleteToDo }
                    updateTodo = { updateToDo }
                />
            );
        }

        return(
            <Container>
                <Header>
                    <Body>
                        <Title>{ name }</Title>
                    </Body>
                </Header>
                <Content>
                    { listItem }
                    { new_todo && 
                        <NewToDo
                            onPress = { this.saveToDoData }
                            onCancel = { this.addNewToDo }
                        />
                    }
                </Content>
                { show_new_todo &&
                    <AddToDoButton onAddNewToDo = { this.addNewToDo } />
                }
            </Container>
        );
    }

}

function mapStateToProps(state) {
    return {
        todos: state.ToDoReducer.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (todo) => dispatch(addToDo(todo)),
        deleteToDo: (todo) => dispatch(deleteToDo(todo)),
        updateToDo: (todo) => dispatch(updateToDo(todo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoAll)