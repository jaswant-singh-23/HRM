
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from "../shared/io";

function ChatBox() {

  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    username: '',
    room: ''
  });

  const handleInput = (e) => {
    setInputField({ ...inputField , [e.target.name]: e.target.value })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", JSON.stringify(inputField))
    socket.emit("newUser", { inputField, socketID: socket.id });
    console.log(socket)
    navigate("/chat")
  }
  
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className='col-md-3' />
        <div className='col-md-6 -box-shadow p-3 rounded'  >
          <form className='home__container' onSubmit={handleSubmit}>
            <h2 className='home__header text-center'>Sign in to Open Chat</h2>
            <div className='form-group mt-3'>
              <label htmlFor="username">Username</label>
              <input type="text"
                minLength={6}
                name="username"
                id='username'
                className='form-control'
                onChange={handleInput}
              />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor="room">Room</label>
              <input type="text"
                minLength={4}
                name="room"
                id='room'
                className='form-control'
                onChange={handleInput}
              />
            </div>
            <button className='mt-4 btn bg-dark-color'>Sign in</button>
          </form>
        </div>
        <div className='col-md-3' />
      </div>
    </div>
  )
}

export default ChatBox