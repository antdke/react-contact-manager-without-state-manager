import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  // holds the state of the "show toggle"
  state = {
    showContactInfo: false
  };

  // the "id" and "this" have been binded into this function prop as it was passed down
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    // destructures the props that were passed to this component
    // In this case, the "contact" obj is being pass to this component and in this line, I'm pulling out its props
    const { name, email, phone } = this.props.contact;

    // destructuring showContactInfo from state
    const { showContactInfo } = this.state;

    // displays the content with the destructured props variables
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} {/*toggles the state to show or not show contact card */}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          {/* the delete button */}
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {/* Ternary operator for toggling display of contact info*/}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

// ensures that the right props are passed
// only the "contact" object is being passed from the Contacts component
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
