import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  message: string;
  type: 'success' | 'error';
}

const ModalSuccess: React.FC<ModalProps> = ({ show, onClose, message, type }) => {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl  shadow-lg w-100 h-[300px] text-center"
      >
        <motion.div
          className="w-20 h-20 mx-auto mt-4 rounded-full flex items-center justify-center bg-[#0B2B4F]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {type === 'success' ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-10 h-10"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-10 h-10"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          )}
        </motion.div>

        <h2 className="text-lg font-semibold mt-8">{type === 'success' ? 'Successful!' : 'Unsuccessful!'}</h2>
        <p className="text-sm text-gray-600 mt-4">{message}</p>

        <Link href="/" passHref legacyBehavior>
          <motion.a
            className="mt-6 inline-block bg-[#0B2B4F] text-white py-2 px-6 rounded hover:bg-[#09203A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to home
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
};

export default ModalSuccess;

