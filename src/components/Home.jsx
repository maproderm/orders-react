import { useState, useEffect } from "react"
import axios from "axios";

export const Home = () => {

    const [orders, setOrders] = useState([]);
    const [orderscomplete, setComplete] = useState([]);

    //PEDIDOS EN PROCESO
    useEffect(() =>{
        const getOrders = async () => {
            
            //const apiOrders = await axios.get("http://127.0.0.1:8000/api/orders"); //API LOCAL         
            const apiOrders = await axios.get("https://admin.industrialmaquiladora.com/api/orders"); //API WEB      
            setOrders(apiOrders.data.orders);
            
        };
        getOrders();
    }, [])

    //PEDIDOS COMPLETADOS
    useEffect(() =>{
      const getOrdersComplete = async () => {
          
          //const apiOrdersComplete = await axios.get("http://127.0.0.1:8000/api/get-orders-complete"); //API LOCAL
          const apiOrdersComplete = await axios.get("https://admin.industrialmaquiladora.com/api/get-orders-complete"); //API WEB
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
      //fetch('http://127.0.0.1:8000/api/orders') // API LOCAL
      fetch('https://admin.industrialmaquiladora.com/api/orders') //API WEB
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
    //fetch('http://127.0.0.1:8000/api/get-orders-complete') //API LOCAL
    fetch('https://admin.industrialmaquiladora.com/api/get-orders-complete') //API WEB
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
    <div className='mt-2'>
        
        <div className="px-6 mx-auto max-w-screen-5xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    
                                    <th scope="col" className="px-4 py-3 text-center">N° DE PEDIDO</th>
                                    <th scope="col" className="px-4 py-3">VENTA EN:</th>
                                    <th scope="col" className="px-4 py-3">CLIENTE</th>
                                    <th scope="col" className="px-4 py-3">FECHA PEDIDO</th>
                                    <th scope="col" className="px-4 py-3">DÍAS EN DEMORA</th>
                                    <th scope="col" className="px-4 py-3">ESTATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderscomplete.map((orderc) =>{
                                    return (
                                        <tr key={orderc.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{orderc.id}</td>
                                            {/* <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                                                {orderc.sale_in}
                                            </th> */}
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-400" aria-hidden="true">
                                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                                    </svg>
                                                    {orderc.sale_in}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    {/* <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div> */}
                                                    {orderc.fullname}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                
                                                {orderc.created_at}
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                
                                            {orderc.sinfinxz} día(s)
                                            </td>
                                            
                                            <td className="px-4 py-4 text-lg font-medium">
                                                <span className="bg-green-200 text-green-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{orderc.status}</span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>                        
                    </div>                    
                </div>  <br />
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    
                                    <th scope="col" className="px-4 py-3 text-center">N° DE PEDIDO</th>
                                    <th scope="col" className="px-4 py-3">VENTA EN:</th>
                                    <th scope="col" className="px-4 py-3">CLIENTE</th>
                                    <th scope="col" className="px-4 py-3">FECHA PEDIDO</th>
                                    <th scope="col" className="px-4 py-3">DÍAS EN DEMORA</th>
                                    <th scope="col" className="px-4 py-3">ESTATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) =>{
                                    return (
                                        <tr key={order.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{order.id}</td>                                            
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-blue-400" aria-hidden="true">
                                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                                    </svg>
                                                    {order.sale_in}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    {/* <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div> */}
                                                    {order.fullname}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                
                                                {order.created_at}
                                            </td>
                                            <td className="px-4 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">                                                
                                                {order.sinfinxz} día(s)
                                            </td>
                                            <td className="px-4 py-4 text-lg"><span className="bg-yellow-100 text-yellow-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{order.status}</span></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>                        
                    </div>                    
                </div>
        </div>

    </div>
    
  )
}
