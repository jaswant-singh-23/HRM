import React, { useState, useEffect } from 'react'
import { useNavigate , useParams ,useLocation } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';
import EditIcon from "../../assets/images/edit-icon.png"
import TrashIcon from "../../assets/images/trash.png"
import { Link } from "react-router-dom"
import userService from '../../services/user.service';

const InventoryControl = () => {
  const { data } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState([]);
  useEffect(() => {
    userService
      .GetInventory()
      .then((response) => {
        console.log(response)
        setContent(response.data.data)
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      });
  }, []);

  // On Delete////
  
  const handleDelete = (data) => {
    const itemId = { id: data };
    // alert(data)
    console.log(itemId)
    userService.DeleteInventory(itemId).then((response) => {
      // setContent(response.data.data) 
      console.log(response)
      window.location.reload();
      // }
    }, (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
      setContent(_content);
    })
  }
  return (
    <div className='custom-grid h-100vh'>
      <Sidebar />
      <div className="bg-grey-color container-fluid ">
        <div className="text-center py-4">
          <h2>Inventory Control</h2>
        </div>
        <button className="btn bg-dark-primary mb-2" type="Button" variant="contained" onClick={() => navigate("/add-inventory")}>Add New Inventory</button>
        <table className="table table-hover bg-white table table-striped">
          <thead className="bg-dark-primary">
            <tr>
              <th scope="col" className="border-end-1 border-1 border-start-0 border-top-0 text-center px-3">Sr.No</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Items Name</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">No of Items</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Email</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Assigned To</th>
              <th className="border-end-1 border-1 border-start-0 border-top-0 text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              content != null &&
              content.map((data, i) => (
                <tr key={i}>
                  <th scope="row" className="border-end-1 border-start-0 border-1 text-center px-3">{i + 1}</th>
                  <td className="border-end-1 border-1 text-center">{data.itemName + " , "}</td>
                  <td className="border-end-1 border-1 text-center">{data.totalItems}</td>
                  <td className="border-end-1 border-1 text-center">{data.email}</td>
                  <td className="border-end-1 border-1 text-center">{data.username}</td>
                  <td className="border-end-1 border-1 text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <Link to={"/edit-inventory/"+ data.username} className="text-light text-decoration-none" >
                        <span className="me-1">
                          <img src={EditIcon} width="17px" alt="edit-image" />
                        </span>
                      </Link>
                      <span className="ms-2 cursor-pointer mb-4" >
                        <img src={TrashIcon} onClick={()=>{handleDelete(data.username)}} alt="" width="16px" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InventoryControl
