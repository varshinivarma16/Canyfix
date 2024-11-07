"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Modal from "./Modalvariant";
import Button1 from "./Button1";
import { Service, Variant } from "@/constant/type";
import { BASE_URL } from "@/constant";
import WaterDamageImage from "../components/Water_damage.svg";

interface SelectedService {
  service: Service;
  variant: Variant;
}

interface RepairProps {
  modelUid: string;
  modelName: string;
  brandName: string;
  onBack: () => void;
  onProceed: (
    selectedServices: SelectedService[],
    totalAmount: number,
    brandName: string,
    modelName: string
  ) => void;
}

const Repair: React.FC<RepairProps> = ({
  modelUid,
  modelName,
  brandName,
  onBack,
  onProceed,
}) => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/mobile/issue_variant/${modelUid}`);
        setServices(response.data.data);
      } catch (error) {
        console.error("Failed to fetch repair services:", error);
      } finally {
        setLoading(false);
      }
    };

    if (modelUid) fetchServices();
  }, [modelUid]);

  const handleAddService = (variant: Variant) => {
    if (currentService) {
      const newService = { service: currentService, variant };
      setSelectedServices((prev) => [...prev, newService]);
      setTotalAmount((prev) => prev + variant.actual_price);
      setToastMessage("Service added to selection!");
      setShowToast(true);
    }
    setIsModalOpen(false);
  };

  const handleRemoveService = (variant: Variant) => {
    const serviceIndex = selectedServices.findIndex(
      (item) => item.variant.issuevariant_name === variant.issuevariant_name
    );

    if (serviceIndex !== -1) {
      const serviceToRemove = selectedServices[serviceIndex];
      setSelectedServices((prev) => prev.filter((_, i) => i !== serviceIndex));
      setTotalAmount((prev) => prev - serviceToRemove.variant.actual_price);
    }
  };

  const openModal = (service: Service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  const handleProceedClick = () => {
    if (selectedServices.length > 0) {
      setToastMessage("Proceeding to the next step...");
      setShowToast(true);
      onProceed(selectedServices, totalAmount, brandName, modelName);
    } else {
      setToastMessage("No services selected! Please select at least one service.");
      setShowToast(true);
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex flex-col justify-center p-0 sm:p-6 lg:p-0 mt-6 border-2 border-[#92BEF0] rounded-xl shadow-lg w-full max-w-[1200px] mx-auto relative">
      <button onClick={onBack} className="text-blue-500 mb-6">
        &larr; Back to Model
      </button>
      <h1 className="text-xl font-semibold mb-8 text-center">
        Select Your Repair Service
      </h1>
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded shadow-md">
          {toastMessage}
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-8">
          <div className="flex flex-col bg-white mb-4 p-4 w-full lg:max-w-[700px] xl:max-w-[800px] mx-auto font-satoshi gap-4">
            {services.map((service) => (
              <div
                key={service.issue_uid}
                className="p-4 border rounded-xl shadow-md flex flex-col lg:flex-row lg:items-center gap-4 h-auto lg:h-[120px] mb-3"
              >
               <div className="flex justify-center lg:justify-start">
  <img
    src={service.url || WaterDamageImage}  
    alt={service.preety_name || 'Service Image'} 
    className="w-16 h-16 object-cover rounded mb-2 lg:mb-0 lg:mr-4"
  />
</div>

                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-lg font-semibold">{service.preety_name}</h1>
                  <p className="text-md font-medium">Starting from ₹{service.starting_price} only</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button1
                    onClick={() => openModal(service)}
                    disabled={selectedServices.some((item) => item.service.issue_uid === service.issue_uid)}
                    className="mt-4 lg:mt-0 lg:ml-4"
                  >
                    {selectedServices.some((item) => item.service.issue_uid === service.issue_uid)
                      ? "Added"
                      : "Add+"}
                  </Button1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-4 w-full lg:w-[300px] xl:w-[320px] border-2 border-gray-200 rounded-xl shadow-lg text-center relative">
            <h2 className="text-xl font-semibold mb-4">Selected Services:</h2>
            <div className="flex-grow overflow-y-auto max-h-[300px] mb-4">
              {selectedServices.length > 0 ? (
                <ul className="list-none text-left">
                  {selectedServices.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                      <span>
                        {item.service.preety_name} - {item.variant.issuevariant_name}
                      </span>
                      <span
                        onClick={() => handleRemoveService(item.variant)}
                        className="text-red-600 cursor-pointer"
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No services selected</p>
              )}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && currentService && (
        <Modal
          service={currentService}
          onClose={() => setIsModalOpen(false)}
          onAddService={handleAddService}
          onRemoveService={handleRemoveService}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-10">
        <Button1
          className="w-full"
          disabled={selectedServices.length === 0}
          onClick={handleProceedClick}
        >
          Proceed
        </Button1>
        <div className="text-center mt-2">
          {selectedServices.length > 0 && (
            <span>
              {selectedServices.length === 1
                ? `(${selectedServices[0].service.preety_name})`
                : selectedServices.length === 2
                ? `(${selectedServices[0].service.preety_name} , ${selectedServices[1].service.preety_name})`
                : `(${selectedServices[0].service.preety_name}, ${selectedServices[1].service.preety_name} + ${selectedServices.length - 2} more)`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repair;
