import React, { Component } from 'react'
import Contact from './Contact'


export default class Contacts extends Component {

    state = {
        contacts:[
            {
                id: 1,
                nom: 'Jean Lefrancois',
                email: 'jean.lefrancois@email.fr',
                tel: '00 11 22 33 44'
            },
            {
                id: 2,
                nom: 'Latifa Lefrancois',
                email: 'latifa.lefrancois@email.fr',
                tel: '11 22 33 44 55'
            },
            {
                id: 3,
                nom: 'Yanis Lefrancois',
                email: 'yanis.lefrancois@email.fr',
                tel: '22 33 44 55 66'
            } 
        ]
    }

    deleteContact = (id) => {
        const newContacts = this.state.contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        })
    }
    render() {
        return (
            <div>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                    />
                )
                )
            }
            </div>
        )
    }
}
