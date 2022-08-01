import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import { supabase } from '../../../DB/supabaseClient';
// import useAuth from '../../../hook/useAuth';

const ManageProducts = () => {
    // const { user } = useAuth();

    const [manageProducts, setManageProducts] = useState([]);

    let index = 1;

    // fetch data in Supabase
    const fetchManageProducts = async () => {
        let { data: manageProducts, error } = await supabase
            .from("products")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", manageProducts);
            setManageProducts(manageProducts);
        }
    };

    useEffect(() => {
        fetchManageProducts();
    }, [])

    //for cancel products using fetch api
    const handleProductCancel = id => {
        fetch(`https://enigmatic-citadel-92082.herokuapp.com/cancelProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newOrders = manageProducts.filter(order => order.id !== id);
                    setManageProducts(newOrders)
                }
            })
        alert("Are You Sure delete this Product?")
    }

    return (
        <div>
            <h1> Manage Products </h1>
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
                                manageProducts?.map(product =>
                                    <tr>
                                        <td>{index++}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.modelYear}</td>
                                        <td>{product.status}</td>
                                        <td><Button onClick={() => handleProductCancel(product.id)} variant='danger'>Delete Product</Button></td>

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

export default ManageProducts;