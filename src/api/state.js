import {observable, computed} from 'mobx'

export class UiState {
    @observable visible = false
    toggleVisible = () => this.visible=!this.visible

}