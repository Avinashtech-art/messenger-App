import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, resetName, listName } from "../features/chat/userSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export const Popup = () => {
  
  const name = useSelector((state) => state.users.name);
  const userList = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  const [isValidUser, setIsValidUser] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const onChangeName = (e) => {
    dispatch(setName(e.target.value));
  };

  const login = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
    };
    localStorage.setItem("user", userData.name);
    dispatch(resetName());
    const isValidUser = userList.includes(name);

    if (isValidUser) {
      dispatch(listName());
      setShowModal(false);
      setIsLoggedIn(true);

      navigate("/home");
    } else {
      setIsValidUser(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <Modal
          show={showModal}
          onHide={() => {}}
          onClick={(e) => e.stopPropagation()}
        >
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={login}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={onChangeName}
                />
                {!isValidUser && <p className="text-danger">Invalid name!</p>}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={login}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return <></>;
};

export default React.memo(Popup);
