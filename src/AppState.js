import { observable } from 'mobx';
import {auth} from './api/firebase'




class AppState {
  @observable loggedIn = false
  constructor() {
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    })
  }
  login(password){
    auth.signInWithEmailAndPassword("justus.karlsson@hotmail.se", password)
  }
}




export default new AppState ()
