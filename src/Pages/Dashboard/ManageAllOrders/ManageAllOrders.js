import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';
const ManageAllOrders = () => {

    const [ordersData, setOrdersData] = useState([]);

    // supabase Query
    const fetchAllOrders = async () => {
        let { data: ordersData, error } = await supabase
            .from("orders")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", ordersData);
            setOrdersData(ordersData);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, [])

    // handle 

    const handleStatusUpdate = async (id, status) => {
        const { data, error } = await supabase
            .from('orders')
            .update({ status: status })
            .eq("id", id)

        if (error) {
            console.log("error", error);
        }
        else {
            const newOrders = [...ordersData];

            newOrders.forEach(order => {
                if (order.id === id) {
                    order.status = status;
                }
            })

            setOrdersData(newOrders);


        }
        
    }






    return (
        <div className="manageOrders">
            <h1 className="blue-color mt-5">Manage Orders</h1>

            <div className="table-div tableDesign">
                <Fade bottom duration={2500}>
                    <Table striped bordered hover size="md" >
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Service Title</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Status</th>

                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordersData?.map(order =>
                                    <tr>

                                        <td>{order.buyerName}</td>
                                        <td>{order.email}</td>

                                        <td>{order.carModel}</td>
                                        <td>${order.price}</td>
                                        <td>{order.bookingDate}</td>


                                        <td>{order.status}</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" alignRight variant='info' title="Update Status" >
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order.id, "PENDING")} >Pending</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order.id, "REJECTED")} >Rejected</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order.id, "SHIPPED")} >Shipped</Dropdown.Item>
                                            </DropdownButton>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Fade>
            </div>


        </div >
    );
};

export default ManageAllOrders;