import { useState, useEffect } from "react"
import axios from "axios";

export const Home = () => {

  const [orders, setOrders] = useState([]);
  const [orderscomplete, setComplete] = useState([]);

    //PEDIDOS EN PROCESO
    useEffect(() =>{
        const getOrders = async () => {
            
            const apiOrders = await axios.get("http://127.0.0.1:8000/api/orders");
            setOrders(apiOrders.data.orders);
            
        };
        getOrders();
    }, [])

    //PEDIDOS COMPLETADOS
    useEffect(() =>{
      const getOrdersComplete = async () => {
          
          const apiOrdersComplete = await axios.get("http://127.0.0.1:8000/api/get-orders-complete");
          setComplete(apiOrdersComplete.data.orderscomplete);
      };
      getOrdersComplete();
  }, [])

    //FETCH PARA PEDIDO EN PROCESO
    useEffect(() => {
      const intervalId = setInterval(() => {
        fetchData();
      }, 5000);
      return () => clearInterval(intervalId);
    }, []);

  const fetchData = () => {
      fetch('http://127.0.0.1:8000/api/orders')
        .then(response => response.json())
        .then(data => setOrders(data.orders))
      //   .catch(error => console.error(error));
  }

  //FETCH PARA PEDIDOS COMPLETADOS


  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchDataComplete();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

const fetchDataComplete = () => {
    fetch('http://127.0.0.1:8000/api/get-orders-complete')
      .then(response => response.json())
      .then(data => setComplete(data.orderscomplete))
    //   .catch(error => console.error(error));
}
  
  // const reloadPage = () => {
  //     window.location.reload();
  // };

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       reloadPage();
  //     }, 300000);
    
  //     return () => clearInterval(intervalId);
  // }, []);


  return (
    <div className='mt-6'>
        

        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            N° PEDIDO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            VENTA EN:
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CLIENTE
                        </th>
                        <th scope="col" className="px-6 py-3">
                            FECHA PEDIDO
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            DÍAS EN DEMORA
                        </th>
                        {/* <th scope="col" className="px-6 py-3 text-center">
                            TOTAL
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-center">
                            ESTATUS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orderscomplete.map((orderc) =>{
                        return (
                            <tr key={orderc.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            
                                <td className="px-6 py-4 text-center">
                                    {orderc.num_order}
                                </td>
                                <td className="px-6 py-4">
                                  
                                    {/* <img className="text-center align-center" style={{ width: '20px', height: '20px' }} src="/logo192.png" /> */}
                                    
                                    {orderc.sale_in}
                                    
                                </td>
                                <td className="px-6 py-4">
                                    {orderc.fullname}
                                </td>
                                <td className="px-6 py-4">
                                    {orderc.created_at}
                                </td>
                                <td className="px-6 py-4 text-center">
                                {orderc.differencex.days} días {orderc.differencex.h}:{orderc.differencex.i}:{orderc.differencex.s}
                                </td>
                                {/* <td className="px-6 py-4 text-center">
                                    ${new Intl.NumberFormat('es-mx').format(orderc.total)}                                  
                                </td> */}
                                <td className="px-6 py-4 text-center">
                                <span className="bg-green-200 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{orderc.status}</span>
                                    {/* {order.status} */}
                                </td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>

            <br />
            
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            N° PEDIDO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            VENTA EN:
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CLIENTE
                        </th>
                        <th scope="col" className="px-6 py-3">
                            FECHA PEDIDO
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            DÍAS EN DEMORA
                        </th>
                        {/* <th scope="col" className="px-6 py-3 text-center">
                            TOTAL
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-center">
                            ESTATUS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) =>{
                        return (
                            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                
                                <td className="px-6 py-4 text-center">
                                    {order.num_order}
                                </td>
                                <td className="px-6 py-4">
                                  
                                    {/* <img className="text-center align-center" style={{ width: '20px', height: '20px' }} src="/logo192.png" /> */}
                                    {order.sale_in}
                                    
                                </td>
                                <td className="px-6 py-4">
                                    {order.fullname}
                                </td>
                                <td className="px-6 py-4">
                                    {order.created_at}
                                </td>
                                <td className="px-6 py-4 text-center">
                                {order.sinfinxz} día(s)
                                {/* {order.differencex.days} días {order.differencex.h}:{order.differencex.i}:{order.differencex.s} */}
                                </td>
                                {/* <td className="px-6 py-4 text-center">
                                    ${new Intl.NumberFormat('es-mx').format(order.total)}                                  
                                </td> */}
                                <td className="px-6 py-4 text-center">
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{order.status}</span>
                                    {/* {order.status} */}
                                </td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>

    </div>
    
  )
}
