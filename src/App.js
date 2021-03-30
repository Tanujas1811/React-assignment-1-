import React, {Component} from 'react'
import Main from './components/Main'

import './App.css';
class App extends Component{
  constructor(props){
      super(props)
      this.state={
          activetab:''
      }
  }
  tab1=()=>{
      console.log('tab1')
      this.setState({
          activetab:'tab1'
      })
  }
  tab2(){
      console.log('tab2')
      this.setState({
         activetab: 'tab2'
      })
  }
  tab3(){
      console.log('tab3')
      this.setState({
         activetab:'tab3'
      })
  }
  render(){
    console.log(this.state)
      return(
          <div className="App"><br/><br/><br/>
              <button onClick={this.tab1}>Tab 1</button>&nbsp;&nbsp;
              <button onClick={() => this.tab2()}>Tab 2</button>&nbsp;&nbsp;
              <button onClick={() => this.tab3()}>Tab 3</button>&nbsp;&nbsp;
              <Main activetab={this.state.activetab}/>
          </div>
      )
  }
}
export default App;
