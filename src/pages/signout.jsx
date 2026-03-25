import { signOut } from "firebase/auth";
import { auth } from "./login.jsx";

export const logout = () => {
  signOut(auth);
};