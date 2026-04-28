import { useEffect } from "react";
import "./index.css";

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box__toolbar">
          <button
            title="Close"
            className="btn btn--text btn--close"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <div className="modal__box__content">{children}</div>
      </div>
    </div>
  );
}
