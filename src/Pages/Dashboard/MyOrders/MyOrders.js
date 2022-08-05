import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';
import useAuth from '../../../hook/useAuth';


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    let index = 1;

    const fetchOrders = async () => {
        let { data: orders, error } = await supabase
            .from("orders")
            .select("*")
            .eq('email',user.email)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", orders);
            setOrders(orders);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [user.email])

    //for cancel products using fetch api
    const handleOrderCancel = id => {
        try {
            await supabase
                .from("products")
                .delete()
                .eq("id", id);

                setManageProducts(setOrders.filter((x) => x.id !== id));
        } catch (error) {
            console.log("error", error);
        }
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
                                        <td><Button onClick={() => handleOrderCancel(order.id)} variant='danger'>Cancel Order</Button></td>

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