import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
const ManageAllOrders = () => {

    const [ordersData, setOrdersData] = useState([]);


    useEffect(() => {

        fetch('https://enigmatic-citadel-92082.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrdersData(data);

            })

    }, [])

    // handle 

    const handleStatusUpdate = (id, status) => {
        fetch(`https://enigmatic-citadel-92082.herokuapp.com/updateOrderStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderId: id,
                status: status
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const newOrders = [...ordersData];

                    newOrders.forEach(order => {
                        if (order._id === id) {
                            order.status = status;
                        }
                    })

                    setOrdersData(newOrders);

                }

            })
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
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "PENDING")} >Pending</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "REJECTED")} >Rejected</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "SHIPPED")} >Shipped</Dropdown.Item>
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