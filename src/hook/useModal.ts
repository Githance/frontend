import { useState, useEffect } from 'react';

type UseModal = [boolean, () => void, () => void];

function useModal(initialState = false): UseModal {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return [isOpen, openModal, closeModal];
}

export default useModal;
