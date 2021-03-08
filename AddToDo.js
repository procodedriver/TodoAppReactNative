import React from 'react';
import { Body, Icon, CheckBox, ListItem, List } from 'native-base';
import { Input, Button } from 'native-base';

export default class AddToDo extends React.Component {
    render() {
        const completed = false;
        return (
            <ListItem>
                <CheckBox
                    checked = { completed }
                    onPress = { () => console.log("set todo as completed") } 
                />
                <Body>
                    <Input
                        placeholder = "What needs to be done?"
                        onChangeText = { (txt) => console.log(txt) }
                        onSubmitEditing = { () => console.log("Text Submitted") }
                    />
                </Body>
                <Button
                    transparent
                    onPress = { () => console.log("put todo in trash") }
                    >
                    <Icon name = { 'trash' } />
                </Button>
            </ListItem>
        );
    }
}