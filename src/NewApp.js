import React from 'react'
import {observer} from 'mobx-react'
import {observable, computed} from 'mobx'
import {Row, Col,  Button} from 'react-materialize'
//
import {File,Project } from './classes'





class Switcher {
	@observable currentView = 0

	views = []

	constructor(views){
		this.views = views
	}
	get isFirst(){
		return this.currentView === 0
	}
	get isLast(){
		return this.currentView >= this.views.length -1
	}
	next = ()=>{
		this.isLast ? this.currentView = 0 : this.currentView++
	}
	previous = ()=>{
		this.isFirst ? this.currentView = this.views.length-1 : this.currentView --
	}

	View = observer(()=> this.views[this.currentView] )
	Next = ()=> <Button floating icon="keyboard_arrow_right" className="light-blue lighten-2" onClick={this.next} />
	Previous = ()=> <Button floating icon="keyboard_arrow_left" className="light-blue lighten-2" onClick={this.previous} />
}

const ProjectList = observer(()=>
	<div>
		{Project.store.map(project=>
			<div>
				<project.Name />
			</div>
		)}
	</div>
)

const top = new Switcher([
	<Button onClick={Project.createNew}>Project</Button>,
	<Button onClick={Project.createNew}>Package</Button>,
])

const content = new Switcher([
	<h1>Welcome!</h1>,
	<ProjectList />
])



export default observer(()=>
	<div>
		<Row>
			<Col s={1}> <top.Previous /> </Col>
			<Col s={10}> <top.View /> </Col>
			<Col s={1}> <top.Next /> </Col>
		</Row>
		<Row>
			<Col s={1}> <content.Previous /> </Col>
			<Col s={10}> <content.View /> </Col>
			<Col s={1}> <content.Next /> </Col>
		</Row>
	</div>
)
