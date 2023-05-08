import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';

const ShowOrders = () => {
    const url = 'http://127.0.0.1:8000/api/orders';
    const [orders, setOrders] = useState([]);
    const [id,setId] = useState('');
    const [items,setItems] = useState('');
    const [fullname,setFullname] = useState('');
    const [operation,setOperation] = useState(1);
    const [title,setTitle] = useState('');

    //Una vez que se rendenderiza la página cargue todos los pedidos

    useEffect( ()=>{
        getOrders();
    },[]);

    const getOrders = async () => {
        const respuesta = await axios.get(url);
        setOrders(respuesta.data);
    }



  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                        <button className='btn btn-primary'>Hola</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NOMBRE</th>
                                {/* <th>N° ORDEN</th> */}
                                {/* <th>FECHA</th> */}
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {orders.map( (order) =>(
                                <tr key={order.id}>
                                    <td>{order.items}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='modal fade'>
            
        </div>
    </div>
  )
}

export default ShowOrders