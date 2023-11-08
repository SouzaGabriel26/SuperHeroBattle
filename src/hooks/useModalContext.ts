import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useModalContext() {
  return useContext(ModalContext);
}
