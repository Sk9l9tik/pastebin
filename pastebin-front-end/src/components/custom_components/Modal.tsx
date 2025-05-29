import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the modal content
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add event listener to the document body
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Remove event listener if the modal is closed
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]); // Re-run effect if isOpen or onClose changes

  if (!isOpen) {
    return null; // Don't render anything if not open
  }

  return (
    // Backdrop for the modal
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }} // Set semi-transparent black background using rgba
      // Optional: You can add onClick here too if you want clicking the backdrop specifically to close it
      // onClick={onClose}
    >
      {/* Modal content container */}
      <div
        ref={modalRef}
        className="bg-[#1F1F1F] rounded-md p-6 max-w-sm mx-auto shadow-lg z-51"
        onClick={e => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        {children}
      </div>
    </div>
  );
} 