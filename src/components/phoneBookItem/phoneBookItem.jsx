const BookItem = ({ contacts, handleDelete }) => {
  return (
    <li className="bookItem">
      <span>{contacts.name}</span> :
      <span>{contacts.number}</span>
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
