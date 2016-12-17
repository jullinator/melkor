import React from 'react'
import {Row, Col} from 'react-materialize'
import {Firebase, Store} from 'at-react'
import {database} from '../api/firebase'
///Local
import File from './_File'



@Store
@Firebase("projects", database)
export default class Project {
    id= ""
    name =""
    description =""
    files = []
    notes = []

    static createNew (){
        Project.ref.push({name:'new'})
    }

    get fileObjects(){
        return File.filter(file=> this.files.includes(file.id) )
    }

     Name = ()=> <h4 className="blue-text">{this.name}</h4>
     Description = ()=> <span className="black">{this.description}</span>
     FileList = ()=> (
         <div>
             {this.fileObjects.map(file=>(
                 <Row>
                     <Col s={8}> <file.Name /> </Col>
                     <Col s={4}> <file.Open /> </Col>
                 </Row>
             ))}
         </div>
     )
}
