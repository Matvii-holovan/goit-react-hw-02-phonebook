import { Component } from 'react';
import css from './PhoneBookName.module.css';

export class PhoneBookName extends Component {
  state = {
    name: '',
  };

  handelChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
    // console.log(this.state)
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.createContacts(this.state)
    console.log(this.state)
  };

  render() {
    return (
      <form className={css.container} onSubmit={this.handelSubmit}>
        <div className={css.container}>
          <label htmlFor="name">Phone Book</label>
          <input
            value={this.state.name}
            onChange={this.handelChange}
            className={css.inputName}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    );
  }
}