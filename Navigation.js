import React from 'react';
import TabNavigation from './TabNavigation';
import { Font, AppLoading } from "expo";

export default class Navigation extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = { 
      fontLoading: true,
    };
  }  
      
  async componentWillMount() {
    {/*await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });*/}
    this.setState({ fontLoading: false });
  }

  render() {
    if (this.state.fontLoading) {
        return (            
          <AppLoading />        
        );
      }else{
        return (
            <TabNavigation />          
        );
      }
  }
}