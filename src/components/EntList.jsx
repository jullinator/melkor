import React, {Component} from 'react'
import Dropdown from '../decorators/Dropdown'
import app from '../decorators/app'
import {Actions} from '../AppState'




@Dropdown({title:'EntList'})
export default class extends Component{
	static defaultProps = {
		entities:[]
	}

	render(){
        let {entities} = this.props 
        return(
        <table>
            <tbody>
                {entities.map(this.renderEnt)}
            </tbody>
        </table>
        )
    }
    @app entClicked (app, ent){
        app.emit('ent-clicked', ent)
    }
    renderEnt = (ent, i) =>(
        <tr key={i}>
            <td onClick={()=>this.entClicked(ent)}> {ent.name} </td>
            <td> {ent.type} </td>
            <td> {ent.description} </td>
        </tr>
    )
}