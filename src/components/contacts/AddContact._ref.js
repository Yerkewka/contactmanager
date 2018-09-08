import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: 'Serikbayev Yerkebulan',
    email: 'e.seribayev@curs.kz',
    phone: '8 707 656 11 43'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card md-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
