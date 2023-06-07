// import React, { useState, useRef, useEffect } from "react";
// import "./chat.css";
// import ChatSidebar from "./ChatSidebar.js";
// import Search from "./Search.js";
// import ChatHeader from "./Header";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addMessage,
//   deleteMessage,
//   editMessage,
// } from "../features/chat/chatSlice";

// export function ChatUI() {
//   const [newMessage, setNewMessage] = useState("");
//   const [isFirstUser, setIsFirstUser] = useState(true);
//   const messagesEndRef = useRef(null);
//   const [editingMessageId, setEditingMessageId] = useState(null);
//   const [editingMessageContent, setEditingMessageContent] = useState("");

//   const chat = useSelector((state) => state.chats);
//   //  console.log("chat", chat)
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     console.log("new",newMessage)
//     event.preventDefault();
//     if (newMessage.trim()) {
//       dispatch(addMessage(newMessage.trim()));
//     }

//     setNewMessage("");
//   };

//   const handleEdit = (id, content) => {
//     setEditingMessageId(id);
//     setEditingMessageContent(content);
//   };

//   const handleSaveEdit = (id, content) => {
//     dispatch(editMessage({ id, content }));
//     setEditingMessageId(null);
//     setEditingMessageContent("");
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteMessage(id));
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chat.messages]);

//   const logout = () => {
//     localStorage.removeItem("user");
//   };

//   const loggedInUser = localStorage.getItem('user');
//   console.log(loggedInUser);
//   console.log("message",chat.messages)

//   return (
//     <div className="grid-container">
//       <ChatHeader />

//       <div className="chatGrid-UI">
//         <div className="UI">
//           <div className="chat-container">
//             <ul className="text">
//               {chat.messages.map((message) => (
//                 <div key={message.id} className="message-container">
//                   {message.sender !== loggedInUser ? ( // Change this implementation, make use of a flag which tells whether the message is sender/reciever.
//                     <div>
//                       <span>
//                         <div className="message-right">
//                           {/* <p>user1</p> */}
//                           <div className="box">
//                             {editingMessageId === message.id ? (
//                               <>
//                                 <input
//                                   type="text"
//                                   value={editingMessageContent}
//                                   onChange={(e) =>
//                                     setEditingMessageContent(e.target.value)
//                                   }
//                                 />

//                                 <button
//                                   onClick={() =>
//                                     handleSaveEdit(
//                                       editingMessageId,
//                                       editingMessageContent
//                                     )
//                                   }
//                                 >
//                                   Save
//                                 </button>
//                               </>
//                             ) : (
//                               message.content
//                             )}
//                           </div>
//                           <div className="buttons">
//                             {editingMessageId !== message.id && (
//                               <li>
//                                 <button
//                                   onClick={() =>
//                                     handleEdit(message.id, message.content)
//                                   }
//                                 >
//                                   Edit
//                                 </button>
//                               </li>
//                             )}
//                             <li>
//                               <button onClick={() => handleDelete(message.id)}>
//                                 Delete
//                               </button>
//                             </li>
//                           </div>
//                         </div>
//                       </span>
//                       {/* <span>
//                     <Space className="dropdown-demo"/>
//                       <Dropdown droplist={dropList} position="bl">
//                         <Button type="text">
//                          :
//                         </Button>
//                       </Dropdown>
//                     </span> */}
//                     </div>
//                   ) : (
//                     <div className="message-left">
//                       <div className="box">
//                         {editingMessageId === message.id ? (
//                           <>
//                             <input
//                               type="text"
//                               value={editingMessageContent}
//                               onChange={(e) =>
//                                 setEditingMessageContent(e.target.value)
//                               }
//                             />
//                             <button
//                               onClick={() =>
//                                 handleSaveEdit(
//                                   editingMessageId,
//                                   editingMessageContent
//                                 )
//                               }
//                             >
//                               Save
//                             </button>
//                             {/* <button onClick={handleCancelEdit}>Cancel</button> */}
//                           </>
//                         ) : (
//                           message.content
//                         )}
//                       </div>
//                       <div className="buttons">
//                         {editingMessageId !== message.id && (
//                           <button
//                             onClick={() =>
//                               handleEdit(message.id, message.content)
//                             }
//                           >
//                             Edit
//                           </button>
//                         )}
//                         <button onClick={() => handleDelete(message.id)}>
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </ul>
//           </div>

//           <div className="container-form">
//             <div className="form">
//               <form onSubmit={handleSubmit} className="form-container">
//                 <div className="form-childOne">
//                   <input
//                     type="text"
//                     className="input-section"
//                     value={newMessage}
//                     onChange={(event) => setNewMessage(event.target.value)}
//                   />
//                 </div>

//                 <div className="form-childtwo">
//                   <div className="switch">
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={isFirstUser}
//                         onChange={() => setIsFirstUser(!isFirstUser)}
//                       />
//                       <span className="slider round"></span>
//                       <br></br>
//                       <br></br>
//                       {/* {isFirstUser ? "user1" : "user2"}  */}
//                     </label>
//                   </div>
//                 </div>

//                 <div className="form-childthree">
//                   <button type="submit">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-send-fill"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
//                     </svg>
//                   </button>
//                   <button onClick={logout}>Logout</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Search />
//       <ChatSidebar />
//     </div>
//   );
// }

// export default ChatUI;

import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import ChatSidebar from "./ChatSidebar.js";
import Search from "./Search.js";
import ChatHeader from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  deleteMessage,
  editMessage,
} from "../features/chat/chatSlice";
import { authenticate } from "../features/chat/userSlice";

export function ChatUI() {
  console.log("inside home");
  const [newMessage, setNewMessage] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingMessageContent, setEditingMessageContent] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const messagesEndRef = useRef(null);

  const loggedInUser = localStorage.getItem("user");
  const users = ["user1", "user2", "user3", "user4"];

  const chat = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim()) {
      dispatch(addMessage(newMessage.trim(), selectedUser));
    }
    setNewMessage("");
  };

  const handleEdit = (id, content) => {
    setEditingMessageId(id);
    setEditingMessageContent(content);
  };

  const handleSaveEdit = (id, content) => {
    dispatch(editMessage({ id, content }));
    setEditingMessageId(null);
    setEditingMessageContent("");
  };

  const handleDelete = (id) => {
    dispatch(deleteMessage(id));
  };
  const navigate = useNavigate();
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  const handleLogout = () => {
    dispatch(authenticate());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleUserChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(selectedUser);
  };

  return (
    <div className="grid-container">
      <ChatHeader />

      <div className="chatGrid-UI">
        <div className="UI">
          <div className="chat-container">
            <ul className="text">
              {chat.messages.map((message) => {
                const isUserSender = message.sender === loggedInUser;
                const messageClass = isUserSender
                  ? "message-right"
                  : "message-left";

                return (
                  <div key={message.id} className="message-container">
                    <div className={messageClass}>
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
                          </>
                        ) : (
                          <>
                            <div className="message-name">{message.sender}</div>
                            <div className="message-content">
                              {message.content}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="buttons">
                        {editingMessageId !== message.id && (
                          <li>
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
                          <button onClick={() => handleDelete(message.id)}>
                            Delete
                          </button>
                        </li>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                      <select
                        value={selectedUser}
                        onChange={handleUserChange}
                        className="user-select"
                      >
                        {users.map((user) => (
                          <option key={user} value={user}>
                            {user}
                          </option>
                        ))}
                      </select>
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
                  <button onClick={handleLogout}>Logout</button>
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
