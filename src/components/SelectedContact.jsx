import React from 'react';
import { useState, useEffect } from 'react';

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`${API_URL}/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
                console.log(setContact(result));
            } catch (err) {
                console.error(err);
            }
        }
        fetchContact();
    }, [])

    return (
      <table>
        <thead>
          <tr>
            <th colSpan="7">Contact Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Company</td>
          </tr>

          <tr>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
            <td>{contact.phone}</td>
            <td>{contact.website}</td>
            <td>{contact.company}</td>
          </tr>
        </tbody>
      </table>
    );
}