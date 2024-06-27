import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Cart(){
    interface UpdateItems{
        itemName: string;
        quantity: string;
        price: string;
        url:string;
    }
    const [items ,setItems]=useState<UpdateItems[]>([]);
    useEffect(() =>{
        axios
        .get<UpdateItems[]>("http://localhost:8080/cart/path")
        .then((res) => {
            console.log(res.data)
            setItems(res.data)
        })
        .catch((error) => console.log(error))
    },[]); 
    return (
        <div>
            <div><Nav></Nav></div>
            <div className="d-flex flex-column justify-content-center align-items-center ">
            <div>
                <h1>Cart</h1>
                <button  className="btn btn-success"><Link to='/home'>Add</Link></button>
            </div>
            <div className=" w-75 rounded  shadow p-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((r) => (
                        <tr>
                            <th scope="row">{r.itemName}</th>
                            <td>{r.price}</td>
                            <td>{r.quantity}</td>
                           
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
        
    )
}
export default Cart;
