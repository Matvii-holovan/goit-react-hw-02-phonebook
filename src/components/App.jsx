import { Component } from 'react';
import { PhoneBookName } from './phoneBookName/PhoneBookName';
import { nanoid } from 'nanoid';
import BookItem from './phoneBookItem/phoneBookItem';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContacts = (body) => {
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

  handleDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <PhoneBookName createContacts={this.createContacts} />
        <ul className="bookList">
          {this.state.contacts.map(el => (
            <BookItem
              key={el.id}
              contacts={el}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
