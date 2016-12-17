import React, {Component} from 'react'
import {CollectionItem, Col, Icon, Button, Row, Input} from 'react-materialize'
import {UiState} from '../api/state'
import {observer} from 'mobx-react'
import {observable, computed} from 'mobx'

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import {Files} from '../api/firebase'

export default class File {
    constructor(id, data){
        Object.assign(this, data, {id})
    }
    static createNew (){
        let file = new File(),
            {name, value} = file
        Files.push({name, value})
    }
    id = ""
    @observable name = "new file"
    @observable selected = false
    @observable value = ""
    get fields(){
        return {name:this.name, value: this.value}
    }

    EditMode = observer(()=> <Row>
                                    <Input onChange={(e)=>this.name=e.target.value} s={4}  value={this.name} />

                             </Row>
    )
    Item = observer(()=> <CollectionItem active={this.selected} >
                            <span onClick={this.update("toggle-selected")}> {this.name}  </span>
                            
                        </CollectionItem>
    )
    Editor = observer(({i})=> <Col s={6} l={3} m={4} >
                                <this.EditMode />
                                <AceEditor  mode="javascript" theme="monokai" name={i} 
                                            value ={this.value} onChange={this.update("value")} 
                                            showGutter={false} height="600px" width="100%" />
                           </Col>)
    update = (action) => (e) => {
        action === "toggle-selected" ? this.selected = !this.selected : null 
        action === "value" ? this.value = e : null
        
        action === "value" || action === "name" ? this.save() : null
    }
    save(){
        Files.child(this.id).set(this.fields)
    }
}