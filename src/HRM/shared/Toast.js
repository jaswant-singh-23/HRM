import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const success = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000
    });
    return (
        <>
          <ToastContainer autoClose={4000}/>
        </>
      );
}
const error = (data) => {
    toast.error(data, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000
    });
   return (
      <>
        <ToastContainer autoClose={4000} />
      </>
    );
}

const Toast = {success, error };
export default Toast;