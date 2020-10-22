import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bouton from './components/Bouton'
/*import Picker from './components/Picker'
import FormInputs from './components/FormInputs'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Contenu from './components/Contenu'*/

export default class App extends Component{

  render() {
    
    return (
    <div className="container">
      <Bouton />
      {/* <Header />
      <div className="container">
        <Contacts />
      </div>
      <Contenu />
      <FormInputs />
      <Picker /> */}
    </div>
    );
  }
}