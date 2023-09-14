const BookItem = ({ contacts }) => {
    return <li className="bookItem">
        {BookItem.name}
        <button className="btnClose" type="button" aria-label="close">Delete</button>
    </li>
}

export default BookItem;