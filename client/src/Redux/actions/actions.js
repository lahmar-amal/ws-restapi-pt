import {
    GET_ALL_CONTACTS,
    GET_CONTACT_FAIL,
    GET_CONTACT_LOAD,
} from "../types/types";
import axios from "axios";
export const getAllContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACT_LOAD });
    try {
        let res = await axios.get(
            "http://localhost:5000/api/contact/allcontacts"
        );
        dispatch({ type: GET_ALL_CONTACTS, payload: res.data }); // payload : { message , allContacts}
    } catch (error) {
        dispatch({ type: GET_CONTACT_FAIL, error });
    }
};
