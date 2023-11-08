import { useDashboardContext } from "../../hooks/useDashboardContext";

export function useDashboardController() {
  const { onInputHeroChange } = useDashboardContext();

  return {
    onInputHeroChange,
  }
}
