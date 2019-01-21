import React, { Component } from 'react';
import Contact from './Contact';

// a "smart" component because it possesses state
export class Contacts extends Component {
  // this is where the contact info of each person goes
  // 'id' is needed to keep track of data
  state = {
    contacts: [
      {
        id: 1,
        name: 'Anthony Diké',
        email: 'anthony@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Doraian Givens',
        email: 'dgivens@gmail.com',
        phone: '123-456-7890'
      },
      {
        id: 3,
        name: 'Matt Henderson',
        email: 'matt@gmail.com',
        phone: '718-929-4061'
      }
    ]
  };

  // delete contact function
  // passed through the probs, to the handler in the Contact components, and then to the target line
  deleteContact = id => {
    const { contacts } = this.state;

    // to "delete" we use the filter method to return a new list w/o the item of a specified id
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    // Destructuring - pulling contacts obj out of state
    const { contacts } = this.state;

    // displaying each contact card by using map to loop through the list of objects in the state
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
