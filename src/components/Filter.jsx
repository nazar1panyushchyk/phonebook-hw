import React from "react";

export default class Filter extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.props.onFilterChange(e.target.value);

  }

  render() {
    return (
      <>
        <div className="filter-contacts">
          <label>Find contacts by name:</label>
          <input
            type="text"
            id="filter"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
