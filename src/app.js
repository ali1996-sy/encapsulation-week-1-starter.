'use strict';

/* This is the core application object, it contains:

  the state of your web page
    encapsulated in this object in the property _state

  methods that read, write, and change state
    these play the same role as Logic functions in the last module

  some basic rules:
    methods can read and write the _state property in your object
    methods can call other methods
    methods can NOT read or write the DOM

  study tips:
    copy your app object into JS Tutor
    remove extra methods when studying in JS Tutor (for cleaner visuals)

*/

const app = {
  _state: {
    todos: [],
    names:[] ,
  emails:[]
  },
  get state() {
    return this._state;
  },
  set state(newState) {
    this._state = newState;
  },
  
  displayList() {
    var data = '';
    const element=document.getElementById('list');
    element.innerHTML='';
    if (this._state.names.length > 0) {
      for (let i = 0; i < this._state.names.length; i++) {
        data += '<tr>';
        data += '<td>' + this._state.names[i] + '</td>'+'<td>' + this._state.emails[i] + '</td>';
        data += '</tr>';
      }
    }
    
    return element.innerHTML += data;
  },
  AddSomeone : function () {
   let  eleName = document.getElementById('name');
    let eleEmail = document.getElementById('email');
    // Get the value
    let name = eleName.value;
    let email=eleEmail.value;
    if (name&&email) {
      // Add the new value
      this._state.emails.push(email);
      this._state.names.push(name);
      // Reset input value
      eleName.value = '';
      eleEmail.value='';
      // Dislay the new list
       
      this.displayList();
    }
  }
/*  displayEmails () {
    var data = '';
    console.log(document);
    const element=document.getElementById("list");
    if (this._state.emails.length > 0) {
      for (let i = 0; i < this._state.emails.length; i++) {
        data += '<tr>';
        data += '<td>' + this._state.emails[i] + '</td>';
        data += '</tr>';
      }
    }
    return element.innerHTML += data;}*/
}
