import React from 'react'
import {Row, Col, Button} from 'react-materialize'
import {Firebase, Store} from 'at-react'
import {database} from '../api/firebase'
///Local




@Store
@Firebase("files", database)
export default class File {
    id=""
    name =""
    value = ""

    static createNew (){
        File.ref.push({})
    }

     Name = ()=> <h4 className="blue">{this.name}</h4>
	 Open = ()=> <Button>Open</Button>
}
