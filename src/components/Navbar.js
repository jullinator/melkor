import React, {Component} from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import {UiState} from '../api/state'
import {observer} from 'mobx-react'

const searchState = new UiState()

const SearchBar = observer(() =>{
    if(searchState.visible) {
        return <input />
    } else { return null }
})

export default () =>(
    <Navbar brand='logo' right>
        
        <NavItem onClick={searchState.toggleVisible} ><Icon  >search</Icon></NavItem>
        <NavItem ><Icon>view_module</Icon></NavItem>
        <NavItem ><Icon>refresh</Icon></NavItem>
        <NavItem ><Icon>more_vert</Icon></NavItem>
        <SearchBar />
    </Navbar>
)

