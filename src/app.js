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
    names:['ali'] ,
  emails:['ali@gamil.com']
  },
  get state() {
    return this._state;
  },
  set state(newState) {
    this._state = newState
  },
  
  displayNames() {
    var data = '';
    element=document.getElementById('list');
    if (this.names.length > 0) {
      for (i = 0; i < this.state.names.length; i++) {
        data += '<tr>';
        data += '<td>' + this.state.names[i] + '</td>';
        data += '</tr>';
      }
    }
    return this.element.innerHTML += data;
  },
  displayEmails () {
    var data = '';
    element=document.getElementById('list');
    if (this.emails.length > 0) {
      for (i = 0; i < this.state.emails.length; i++) {
        data += '<tr>';
        data += '<td>' + this.state.emails[i] + '</td>';
        data += '</tr>';
      }
    }
    return this.element.innerHTML += data;}
}
