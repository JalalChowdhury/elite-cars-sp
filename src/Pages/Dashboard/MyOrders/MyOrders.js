import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import useAuth from '../../../hook/useAuth';


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    let index = 1;

    useEffect(() => {
        fetch('https://enigmatic-citadel-92082.herokuapp.com/userOrders?email=' + user.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    //for cancel products using fetch api
    const handleOrderCancel = id => {
        fetch(`https://enigmatic-citadel-92082.herokuapp.com/cancelOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newOrders = orders.filter(order => order._id !== id);
                    setOrders(newOrders)
                }
            })
        alert("Are You Sure delete this Order?")
    }


    return (
        <div>
            <h1 style={{ color: "#00c9a7" }}>My Orders</h1>
            <div className="table-div">
                <Fade bottom duration={2500}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order =>
                                    <tr>
                                        <td>{index++}</td>
                                        <td>{order.carModel}</td>
                                        <td>{order.price}</td>
                                        <td>{order.bookingDate}</td>
                                        <td>{order.status}</td>
                                        <td><Button onClick={() => handleOrderCancel(order._id)} variant='danger'>Cancel Order</Button></td>

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

export default MyOrders;