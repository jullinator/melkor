import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import Emitter from 'events'

const app = new Emitter()
app.on('ent-clicked', (ent)=>console.log(ent.name))

export default  (Target, prop, desc) =>({
    value:function(...params){
        desc.value(app, ...params)
    }
})