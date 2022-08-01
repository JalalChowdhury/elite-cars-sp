import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';

const ManageContact = () => {

    const [manageContact, setManageContact] = useState([]);

    let index = 1;

    const fetchContacts = async () => {
        let { data: manageContact, error } = await supabase
            .from("contact")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", manageContact);
            setManageContact(manageContact);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, [])

    return (
        <div>
            <h1> Manage Contact </h1>
            <div className="table-div">
            <Fade bottom duration={2500}>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message Date</th>
                            <th>Query</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageContact?.map(contact =>
                                <tr>
                                    <td>{index++}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.messageDate}</td>
                                    <td>{contact.description}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                </Fade>
            </div>
        </div>
    );
};

export default ManageContact;