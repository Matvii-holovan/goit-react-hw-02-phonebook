const BookItem = ({ contacts, handleDelete }) => {
  return (
    <li className="bookItem">
      {contacts.name}
      <button
        className="btnClose"
        type="button"
        aria-label="close"
        onClick={() => handleDelete(contacts.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default BookItem;
