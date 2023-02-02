import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import socket from "../shared/io";
import SendImg from "../assets/images/send icon-1.png";

function Chats() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const lastMessageRef = useRef(null);
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    const user = localStorage.getItem("userName");
    setUserName(JSON.parse(user).username);
    setRoom(JSON.parse(user).room);

  }, [userName]);

  const handleTyping = () => {
    socket.emit('typing', `${userName} is typing`);
  }
  
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message",
        {
          text: message,
          name: userName,
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id
        }
      )
    }
    setMessage("");
  }

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  }

  return (
    <div className='container'>
      <div className="row pt-5">
        <div className='col-md-3' />
        <div className='col-md-6 -box-shadow p-0 rounded'>
          <header className="chat__mainHeader">
            <div className='bg-dark-color px-2 rounded text-white'>
              <div className='d-flex justify-content-between '>
                <p>Hangout with Colleagues</p>
                <p className='home__header pt-1'>Chat</p>
              </div>
              <h2 className=''>{message.name}{room}</h2>
            </div>
            <button className="leaveChat__btn" onClick={handleLeaveChat}>
              LEAVE CHAT
            </button>
          </header>
          <div className="message__container px-2">
            {messages.map((message) =>
              message.name === userName ? (
                <div className="message__chats text-end" key={message.id}>
                  {/* <p className="sender__name">You</p> */}
                  <div className="message__sender mt-3">
                    <span className='p-2 rounded text-white bg-dark-color'>{message.text}</span>
                  </div>
                </div>
              ) : (
                <div className="message__chats text-start" key={message.id}>
                  {/* <p>{message.name}{room}</p> */}
                  <div className="message__recipient mt-3">
                    <span className='p-2 rounded text-white bg-dark-color'>{message.text}</span>
                  </div>
                </div>
              )
            )}
            <div className="message__status">
              <p>Someone is typing...</p>
            </div>
          </div>
          <form className='home__container px-2 pb-2' onSubmit={handleSendMessage}>

            <div className='form-group mt-3 position-relative'>
              <label htmlFor="message">Message</label>
              <input type="text"
                name="message"
                id='message'
                className='form-control'
                onChange={(e) => { setMessage(e.target.value) }}
                onKeyDown={handleTyping}
              />
              <button className='position-absolute send_btn'>
                <img src={SendImg} width="30" />
              </button>
            </div>
          </form>
        </div>
        <div className='col-md-3' />
      </div>
    </div>
  )
}

export default Chats;