import React from 'react';
import { Font, AppLoading } from "expo";
import TabNavigator from './TabNavigator';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoading = true,
        };
    }

    async componetWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ fontLoading: false });
    }

    render() {
        if(this.state.fontLoading) {
            return (
                <AppLoading />
            );
        } else {
            return (
                <TabNavigator />
            );
        }
    }

}