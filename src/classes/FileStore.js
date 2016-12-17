import React, {Component} from 'react'
import {Row, Collection , Icon, Button} from 'react-materialize'
import {observer} from 'mobx-react'
import {observable, computed} from 'mobx'

import File from './File'
import {Files} from '../api/firebase'

class FileStore {

    constructor(){
        Files.on('child_added', (child)=>{

            this.store.push(new File(child.key, child.val()))
        })
    }
    @observable store = []
    @computed get selectedFiles (){
        return this.store.filter(file=>file.selected)
    }

    ///
    AddFile = () => <Button floating icon='add' className='red' onClick={File.createNew} tooltip="Add a new file" />

    FileOptions = observer(()=> <Row>
                                    <this.AddFile/>
                                    {this.selectedFiles.length > 0 ?(
                                        <Button tiny floating  className='green' waves='light' icon='edit' />): null }
                                    
                                </Row>
    )
    /////


    /////////

    List = observer(()=> <Collection> 
                            {this.store.map((file, i)=> <file.Item/>  )}
                        </Collection>
    )
    SelectedFiles = observer(()=> <Row>
                                    {
                                        this.selectedFiles.map((file,i)=> <file.Editor i={i}/> )
                                    }      
                                  </Row>)

}

export default new FileStore()