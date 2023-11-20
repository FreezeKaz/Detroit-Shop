import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class Contact extends Component{


  constructor(props){
    super(props)
  }

  componentDidMount = () =>{
    const [show, setShow] = {useState(false)};
  }
  

  handleClose = () => setShow(false);
  handleShow = () => setShow(true);

  handleSubmit = (event) => {
    let prenom = event.target[0].value
    let nom = event.target[1].value
    let mail = event.target[2].value
    let message = event.target[3].value

    const infos = {
      "data":{
        "prenom" : prenom,
        "nom" : nom,
        "mail" : mail,
        "message" : message
      }
    }

    fetch('http://localhost:1337/api/contacts', {
        method: 'POST',
        headers:{
          'Content-type' : "application/json",
        },
        body : JSON.stringify(infos),
      })
  }
  render () {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={this.handleClose} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <label>
                Prénom :
                <input type="text" placeholder="Veuillez saisir votre prénom" ></input>
              </label>
              <label>
                Nom :
                <input type="text" placeholder="Veuillez saisir votre nom"></input>
              </label>
              <label>
                Adresse mail :
                <input type="email" placeholder="Veuillez saisir votre adresse mail"></input>
              </label>
              <label>
                Message :
                <textarea placeholder="Veuillez saisir votre message" ></textarea>
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}