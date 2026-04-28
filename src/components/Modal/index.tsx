import "./index.css";

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
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
