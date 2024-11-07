import React, { useState, useEffect } from "react";

interface Variant {
  issuevariant_uid: string;
  issuevariant_name: string;
  actual_price: number;
}

interface ModalProps {
  service: {
    preety_name: string;
    issue_variant: Variant[];
  };
  onClose: () => void;
  onAddService: (selectedVariant: Variant) => void;
  onRemoveService: (selectedVariant: Variant) => void;
  selectedVariantId?: string | null;
}

const Modal: React.FC<ModalProps> = ({
  service,
  onClose,
  onAddService,
  onRemoveService,
  selectedVariantId,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  useEffect(() => {
    if (selectedVariantId) {
      const selected = service.issue_variant.find(
        (variant) => variant.issuevariant_uid === selectedVariantId
      );
      setSelectedVariant(selected || null);
    }
  }, [selectedVariantId, service.issue_variant]);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  const handleAddClick = () => {
    if (selectedVariant) {
      onAddService(selectedVariant);
    }
    onClose();
  };

  const handleRemoveClick = () => {
    if (selectedVariant) {
      onRemoveService(selectedVariant);
      setSelectedVariant(null);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[65%] max-w-md mx-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">{service.preety_name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <p className="mb-4">Select issue variant</p>
        <div className="grid grid-cols-1 gap-4">
          {service.issue_variant.map((variant) => (
            <label
              key={variant.issuevariant_uid}
              className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer ${
                selectedVariant?.issuevariant_uid === variant.issuevariant_uid
                  ? "border-blue-500"
                  : ""
              }`}
            >
              <div>
                <h3 className="font-semibold">{variant.issuevariant_name}</h3>
                
              </div>
              <input
                type="radio"
                name="variant"
                value={variant.issuevariant_uid}
                checked={
                  selectedVariant?.issuevariant_uid === variant.issuevariant_uid
                }
                onChange={() => handleVariantChange(variant)}
              />
            </label>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {selectedVariant && (
            <button
              onClick={handleRemoveClick}
              className="mr-2 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Remove
            </button>
          )}
          <button
            onClick={handleAddClick}
            disabled={!selectedVariant}
            className={`px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 ${
              !selectedVariant ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
