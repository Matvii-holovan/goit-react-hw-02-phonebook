import { Component } from 'react';
import { PhoneBookName } from './phoneBookName/PhoneBookName';
import { nanoid } from 'nanoid';
import BookItem from './phoneBookItem/phoneBookItem';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContacts = body => {
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          ...body,
          id: nanoid(),
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <PhoneBookName createContacts={this.createContacts} />(
        <ul className="bookList">
          ¨¨
        </ul>
      </div>
    );
  }
}