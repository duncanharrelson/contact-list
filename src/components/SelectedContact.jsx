import React from 'react';
import { useState, useEffect } from 'react';

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    console.log(contact);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`${API_URL}/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
                console.log(result);
            } catch (err) {
                console.error(err);
            }
        }
        fetchContact();
    }, [])

    return (
      <>
        {contact && (
          <div>
            <p>
              <b>Name:</b> {contact.name}
            </p>
            <p>
              <b>Email:</b> {contact.email}
            </p>
            <p>
              <b>Phone:</b> {contact.phone}
            </p>
            <div>
              <b>Address:</b>
              <p>
                <b>Street:</b>
                {contact.address.street}
                <br />
                <b>City/Zip:</b>
                {contact.address.city}
                {contact.address.zipcode}
              </p>
            </div>
            <p>
              <b>Company:</b> {contact.company.name}
            </p>
          </div>
        )}
        <button
          onClick={() => {
            setSelectedContactId(null);
          }}
        >
          Back
        </button>
      </>
    );
}