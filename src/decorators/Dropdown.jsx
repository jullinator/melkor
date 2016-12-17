import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

export default (config) => (Target) =>(
    @observer 
    class extends Component {
        @observable hidden = true 
        toggleHidden = () => this.hidden = !this.hidden
        render(){
            let title = config.title 
            let view = this.hidden ? null : <Target {...this.props} />
            return(
                <div>
                    <button onClick={this.toggleHidden}>{title}</button>
                    {view}
                </div>
            )
        }
    
    }
)