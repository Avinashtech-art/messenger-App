import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../features/chat/userSlice";

export const useAuth = () => {
  const dipatch = useDispatch();
  const userList = useSelector((state) => state.users.userList); // check in redux userlist
  const isUserAuthorized = userList.find(
    (item) => item === localStorage.getItem("user") //check user match with userlist
  );
  useEffect(() => {
    dipatch(authenticate(isUserAuthorized));
  });
  return { isUserAuthorized };
};
