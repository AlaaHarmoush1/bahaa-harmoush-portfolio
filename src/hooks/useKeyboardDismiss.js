import { useEffect } from "react";

// Calls onDismiss when Escape is pressed while `active` is true.
export function useKeyboardDismiss(active, onDismiss) {
  useEffect(() => {
    if (!active) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onDismiss();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, onDismiss]);
}
