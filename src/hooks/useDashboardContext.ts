import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

export function useDashboardContext() {
  return useContext(DashboardContext);
}
