import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/operations/contactsOperations";
import styles from "./contactList.module.css";

function ContactListItem({ name, number, id, onRemoveContact }) {
  return (
    <li className={styles.contactListItem}>
      <div className={styles.contactWrapper}>
        <span>{name}:</span>
        <span>{number}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          onRemoveContact(id);
        }}
        className={styles.btnDelete}
      >
        &#10060;
      </button>
    </li>
  );
}

const mapStateToProps = (state, { id }) => {
  return {
    contact: state.contacts.items.find((item) => item.id === id),
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsOperations.removeContactOperation,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRemoveContact: (id) => {
//       dispatch(contactsActions.removeContact(id));
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
