import React from "react";

export default class ContactForm extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: crypto.randomUUID(),
    };
    this.props.onAddContact(newContact);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="add-inputs">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChangeName}
            />
            <label>Number</label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="[0-9+\- ()]+"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChangeNumber}
            />
            <button>Add contact</button>
          </div>
        </form>
      </>
    );
  }
}