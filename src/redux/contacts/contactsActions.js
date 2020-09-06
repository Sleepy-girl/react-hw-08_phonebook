import constantsTypes from "./constantsTypes";

const removeContact = (id) => ({
  type: constantsTypes.REMOVE_CONTACT,
  payload: {
    id,
  },
});

const removeErrorContact = (error) => ({
  type: constantsTypes.REMOVE_ERROR,
  payload: { error },
});

//--------------------------------

const addContactReequest = () => ({
  type: constantsTypes.ADD_REQUEST,
});

const addContactSuccess = (contact) => ({
  type: constantsTypes.ADD_SUCCESS,
  payload: { ...contact },
});

const addErrorContact = (error) => ({
  type: constantsTypes.ADD_ERROR,
  payload: { error },
});

//------------------------------------

const getContactReequest = (contact) => ({
  type: constantsTypes.GET_REQUEST,
  payload: { ...contact },
});

const getContactSuccess = (items) => ({
  type: constantsTypes.GET_SUCCESS,
  payload: items,
});

const getErrorContact = (error) => ({
  type: constantsTypes.GET_ERROR,
  payload: { error },
});

//------------------------------------

const getFilterValue = (filter) => ({
  type: constantsTypes.FILTER_VALUE,
  payload: {
    filter,
  },
});

const toggleAlert = () => ({
  type: constantsTypes.EXIST_CONTACT,
});

//----------------------------------

const loaderOn = () => ({
  type: constantsTypes.LOADER_ON,
});

const loaderOff = () => ({
  type: constantsTypes.LOADER_OFF,
});

export default {
  removeContact,
  removeErrorContact,

  addContactReequest,
  addContactSuccess,
  addErrorContact,

  getContactReequest,
  getContactSuccess,
  getErrorContact,

  getFilterValue,
  toggleAlert,

  loaderOn,
  loaderOff,
};
