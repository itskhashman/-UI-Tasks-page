import { TaskForm } from "./taskForm";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <TaskForm isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
