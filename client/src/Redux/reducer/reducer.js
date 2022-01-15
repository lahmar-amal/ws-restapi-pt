import {
    GET_ALL_CONTACTS,
    GET_CONTACT_FAIL,
    GET_CONTACT_LOAD,
} from "../types/types";

const initialState = {
    contacts: [],
    contact: {},
    isLoad: false,
    isError: false,
};

const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CONTACT_LOAD:
            return { ...state, isLoad: true };

        case GET_ALL_CONTACTS:
            return {
                ...state,
                contacts: payload.allContacts,
                isLoad: false,
                isError: false,
            };
        case GET_CONTACT_FAIL:
            return { ...state, isError: true };

        default:
            return state;
    }
};

export default contactReducer;
