import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

// Locks body scroll, traps focus inside `containerRef`, and restores focus to the
// previously focused element when the modal closes.
export function useModal(isOpen, containerRef) {
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    const focusables = container?.querySelectorAll(FOCUSABLE_SELECTOR);
    focusables?.[0]?.focus();

    function handleTabKey(event) {
      if (event.key !== "Tab" || !container) return;
      const nodes = container.querySelectorAll(FOCUSABLE_SELECTOR);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleTabKey);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, containerRef]);
}
