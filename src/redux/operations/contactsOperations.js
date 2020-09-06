import axios from "axios";
import contactsActions from "../contacts/contactsActions";

const addContactOperation = (contact) => async (dispatch) => {
  dispatch(contactsActions.loaderOn());
  // dispatch(contactsActions.addContactReequest()); // сброс ошибки (который делается не так)
  try {
    const result = await axios.post(
      "https://hw-07-async-redux.firebaseio.com/contacts.json",
      contact
    );
    dispatch(
      contactsActions.addContactSuccess({
        ...contact,
        id: result.data.name,
      })
    );
  } catch (error) {
    console.log("error-add", error);
    dispatch(contactsActions.addErrorContact(error));
  } finally {
    dispatch(contactsActions.loaderOff());
  }
};

const getContactOperation = () => async (dispatch) => {
  dispatch(contactsActions.loaderOn());
  // dispatch(contactsActions.()); // сброс ошибки (который делается не так)
  try {
    const result = await axios.get(
      "https://hw-07-async-redux.firebaseio.com/contacts.json"
    );
    const entries = Object.entries(result.data);
    const items = entries.map((item) => ({ id: item[0], ...item[1] }));
    dispatch(contactsActions.getContactSuccess(items));
  } catch (error) {
    console.log("error-get", error);
    dispatch(contactsActions.getErrorContact(error));
  } finally {
    dispatch(contactsActions.loaderOff());
  }
};

const removeContactOperation = (id) => async (dispatch) => {
  dispatch(contactsActions.loaderOn());

  try {
    const result = await axios.delete(
      `https://hw-07-async-redux.firebaseio.com/contacts/${id}.json`
    );
    dispatch(contactsActions.removeContact(id));
  } catch (error) {
    console.log("error-remove", error);
    dispatch(contactsActions.removeErrorContact(error));
  } finally {
    dispatch(contactsActions.loaderOff());
  }
};

export default {
  addContactOperation,
  getContactOperation,
  removeContactOperation,
};
