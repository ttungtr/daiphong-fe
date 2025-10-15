import { useState, useCallback } from "react";

export function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const open = useCallback(() => {
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsClosing(true);
    // Đợi animation slide xuống hoàn thành trước khi ẩn popup
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Thời gian animation
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return {
    isOpen,
    isClosing,
    open,
    close,
    toggle,
  };
}
