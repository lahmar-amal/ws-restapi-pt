import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../Redux/actions/actions";
import ContactCard from "./contactCard";

const ContactList = () => {
    // hook dispatch actions
    const dispatch = useDispatch();
    // hook to access to state
    const contacts = useSelector((state) => state.contactReducer.contacts);
    const isLoad = useSelector((state) => state.contactReducer.isLoad);

    // effect : component did mount
    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);
    return (
        <div>
            <h1>contacts</h1>
            {isLoad ? (
                <h1>Loading...</h1>
            ) : (
                contacts.map((el, index) => (
                    <ContactCard contact={el} key={index} />
                ))
            )}
        </div>
    );
};

export default ContactList;
