import React from 'react';

const ContactsFilter = ({filterContacts}) => {
  const handelChange = ({ target: { value } }) => {
    filterContacts(value);
  };
  return (
    <form className={'css.container'}>
      <div className={'css.container'}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          //   value={this.state.filter}
          onChange={handelChange}
          className={'css.inputName'}
          type="text"
          name="filter"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </form>
  );
};

export default ContactsFilter;
