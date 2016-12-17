import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {observable} from 'mobx'
//COMPONENTS
import {Button, Input, Row} from 'react-materialize'
import FileStore from './classes/FileStore'
import Project from './classes/Project'

//TEST

//END TEST

const topViews = [
  <h2>1</h2>,
  <h2>2</h2>
]
const midViews = [
  <div>
      <FileStore.FileOptions />
      <FileStore.List />
      <FileStore.SelectedFiles />
  </div>,
  <div>
    <h1>Packages</h1>
  </div>,
  <h1>Projects</h1>
]


@observer
class App extends Component {
  @observable topView = 0
  @observable midView = 0

  LoginPrompt = ()=>{
    let {login} = this.props.appState
    const checkKey = (e) =>{
      if(e.key==="Enter"){
        login(e.target.value)
      }
    }
    return <Row>
            <Input onKeyDown = {checkKey} type="password" label="Password"  />
          </Row>
  }
  update = action => e => {
    if(action==="top-view"){
      this.topView >= topViews.length-1 ? this.topView=0 : this.topView++
    }
    if(action==="mid-view"){
      this.midView >= midViews.length-1 ? this.midView=0 : this.midView++
    }
  }
  LoggedIn = observer(() =>(
    <div>
        {topViews[this.topView]} <button onClick={this.update("top-view")} >Next</button>
        {midViews[this.midView]} <button onClick={this.update("mid-view")}> Next </button>
    </div>
  ))


  render() {
    let {appState} = this.props
    return (
      <div>
        {appState.loggedIn ? <this.LoggedIn/> : <this.LoginPrompt/>}

        <DevTools />
      </div>
    );
  }

};

export default App;
