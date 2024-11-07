import React, { useState } from "react";
import axios from "axios";
import { SelectedService } from "@/constant/type";
import ModalSuccess from "./Modalsucces";
import Button1 from "./Button1";
import { BASE_URL } from "@/constant";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  brandName: SelectedItem;
  modelName: SelectedItem;
  selectedServices: SelectedService[];
  totalAmount: number;
  note?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  phoneNumber,
  brandName,
  modelName,
  selectedServices,
  totalAmount,
  note,
}) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(
    "Your appointment has been successfully booked"
  );
  const [modalType, setModalType] = useState<"success" | "error">("success");

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsSuccessModalOpen(true);

    const issues = selectedServices.map((service) => ({
      issue_uid: service.service.issue_uid,
      issue_variant_uid: service.variant.issuevariant_uid,
    }));

    const requestData = {
      number: phoneNumber,
      brand_uid: brandName.uid,
      model_uid: modelName.uid,
      comment: note,
      issues: issues,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/ocreate`,
        requestData
      );
      if (response.status === 200) {
        setModalType("success");
        setModalMessage("Your appointment has been successfully booked");
      } else {
        setModalType("error");
        setModalMessage("Failed to book your appointment. Please try again.");
      }
    } catch (error) {
      console.error("Failed to create appointment:", error);
      setModalType("error");
      setModalMessage("Failed to book your appointment. Please try again.");
    }
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    onClose(); // Close the confirmation modal after success/error modal is closed
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full h-auto">
          <h2 className="text-xl font-semibold mb-4">
            Appointment Confirmation
          </h2>

          <div className="mb-4">
            <p className="font-medium">Phone Number: {phoneNumber}</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Phone Brand: {brandName.name}</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Phone Model: {modelName.name}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-medium">Selected Services:</h3>
            <ol>
              {selectedServices.length > 0 ? (
                selectedServices.map((service, index) => (
                  <li key={index} className="mb-2">
                    {service.service.preety_name} -{" "}
                    {service.variant.issuevariant_name}
                    {/* (₹ {service.variant.actual_price}) */}
                  </li>
                ))
              ) : (
                <p>No services selected</p>
              )}
            </ol>
          </div>

          {/* <div className="mb-6">
            <p className="text-lg font-bold">Total Amount: ₹{totalAmount}</p>
          </div> */}

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="text-red-500 font-medium hover:underline"
            >
              Cancel
            </button>
            <Button1 onClick={handleConfirm}>Confirm</Button1>
          </div>
        </div>
      </div>

      {/* Success/Error Modal - z-50 to ensure it shows above the confirmation modal */}
      {isSuccessModalOpen && (
        <ModalSuccess
          show={isSuccessModalOpen}
          onClose={handleSuccessModalClose}
          message={modalMessage}
          type={modalType}
        />
      )}
    </>
  );
};

export default ConfirmationModal;
