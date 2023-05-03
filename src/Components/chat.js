import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import ChatSidebar from "./ChatSidebar.js";
import Search from "./Search.js";
import ChatHeader from "./Header";
import Dropdown from 'react-bootstrap/Dropdown';

function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isFirstUser, setIsFirstUser] = useState(true);
  const messagesEndRef = useRef(null);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingMessageContent, setEditingMessageContent] = useState("");

  // generate a unique ID for each message
  const generateId = () => {
    return Math.floor(Math.random() * 100000);
  };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: generateId(),
        content: newMessage.trim(),
        sender: isFirstUser ? "user1" : "user2",
      };
      setMessages([...messages, message]);
    }
    setNewMessage("");
  };

  const handleEdit = (id, content) => {
    setEditingMessageId(id);
    setEditingMessageContent(content);
  };

  const handleSaveEdit = (id, content) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === id) {
        return { ...message, content: content };
      }
      return message;
    });
    setMessages(updatedMessages);
    setEditingMessageId(null);
    setEditingMessageContent("");
  };

  // const handleCancelEdit = () => {
  //   setEditingMessageId(null);
  //   setEditingMessageContent("");
  // };

  const handleDelete = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="grid-container ">
      <ChatHeader />

      <div className="chatGrid-UI">

        <div className="UI">
       

          <div className="chat-container">
            <ul className="text">
              {messages.map((message) => (
                <div key={message.id} className="message-container">
                  {message.sender === "user1" ? (
                    <div className="message-left">
                     
                     
                      <div className="box">
                        {editingMessageId === message.id ? (
                          <>
                            <input
                              type="text"
                              value={editingMessageContent}
                              onChange={(e) =>
                                setEditingMessageContent(e.target.value)
                              }
                            />
                            
                            <button
                              onClick={() =>
                                handleSaveEdit(
                                  editingMessageId,
                                  editingMessageContent
                                )
                              }
                            >
                              Save
                            </button>
                            {/* <button onClick={handleCancelEdit}>Cancel</button> */}
                          </>
                        ) : (
                          message.content
                        )}
                      </div>
                      <div className="buttons">
                        {editingMessageId !== message.id && (
                          <li>
                            {" "}
                            <button
                              onClick={() =>
                                handleEdit(message.id, message.content)
                              }
                            >
                              Edit
                            </button>
                          </li>
                        )}
                        <li>
                          {" "}
                          <button onClick={() => handleDelete(message.id)}>
                            Delete
                          </button>
                        </li>
                      </div>
                    </div>
                  ) : (
                    <div className="message-right">
                      <div className="box">
                        {editingMessageId === message.id ? (
                          <>
                            <input
                              type="text"
                              value={editingMessageContent}
                              onChange={(e) =>
                                setEditingMessageContent(e.target.value)
                              }
                            />
                            <button
                              onClick={() =>
                                handleSaveEdit(
                                  editingMessageId,
                                  editingMessageContent
                                )
                              }
                            >
                              Save
                            </button>
                            {/* <button onClick={handleCancelEdit}>Cancel</button> */}
                          </>
                        ) : (
                          message.content
                        )}
                      </div>
                      <div className="buttons">
                        {editingMessageId !== message.id && (
                          <button
                            onClick={() =>
                              handleEdit(message.id, message.content)
                            }
                          >
                            Edit
                          </button>
                        )}
                        <button onClick={() => handleDelete(message.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <div className="container-form">
            <div className="form">
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-childOne">
                  <input
                    type="text"
                    className="input-section"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                  />
                </div>

                <div className="form-childtwo">
                  <div className="switch">
                    <label>
                      <input
                        type="checkbox"
                        checked={isFirstUser}
                        onChange={() => setIsFirstUser(!isFirstUser)}
                      />
                      <span class="slider round"></span>
                      <br></br>
                      <br></br>
                      {/* {/ {isFirstUser ? "user1" : "user2"} /} */}
                    </label>
                  </div>
                </div>

                <div className="form-childthree">
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-send-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Search />
      <ChatSidebar />
    </div>
  );
}

export default ChatUI;
