import React, {Component} from 'react'
import brace from 'brace'
import ReactAce from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import Dropdown from '../decorators/Dropdown'
import app from '../decorators/app'
import {observer} from 'mobx-react'

@Dropdown({title:'Editor'})
@observer
export default class Editor extends Component{
	static defaultProps = {
		onChange: ()=>null,
		value: '',
        name:'unique-id',
		mode: 'javascript',
		theme: 'github',
		height:'1200px',
		width: '1000px'
	}
	@app watchApp(app){
		app.on('ent-clicked', (ent)=>{
			console.log(`Selected ent: ${ent.name}`)
		})
	}
	
	constructor(props){
		super(props)
		this.watchApp()
	}
	render = () => 	<ReactAce
		onChange={this.props.onChange}
		value = {this.props.value}
		mode = {this.props.mode}
		theme = {this.props.theme}
		name = {this.props.name}
		height = {this.props.height}
		width = {this.props.width}
					   />
}