import React from "react";
import "./css/contacts.css";


export default class ContactList extends React.Component {

  render() {
    const { contacts } = this.props;
    return (
      <>
        <ul>
          <div className="filter-contacts">
            {contacts.map((contact) => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={() => this.props.onDelete(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
          </div>
        </ul>
      </>
    );
  }
}
