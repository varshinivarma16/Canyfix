"use client";
import React, { useState } from "react";
import BrandList from "@/components/BrandList";
import ModelList from "@/components/ModelList";
import Repair from "@/components/Repair";
import ProgressBar from "@/components/ProgressBar";
import BookAppointment from "@/components/BookAppointment";
import { Service, Variant } from "@/constant/type";

type Step = 1 | 2 | 3 | 4;
interface SelectedService {
  service: Service;
  variant: Variant;
}

const Home: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedBrand, setSelectedBrand] = useState<SelectedItem | null>(null);
  const [selectedModel, setSelectedModel] = useState<SelectedItem | null>(null);
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleSelectBrand = (brand: SelectedItem) => {
    setSelectedBrand(brand);
    setStep(2);
  };

  const handleSelectModel = (model: SelectedItem) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleProceedToRepairServices = (
    services: SelectedService[],
    amount: number
  ) => {
    setSelectedServices(services);
    setTotalAmount(amount);
    setStep(4);
  };

  const handleBackToBrands = () => {
    setSelectedBrand(null);
    setStep(1);
  };

  const handleBackToModels = () => {
    setSelectedModel(null);
    setStep(2);
  };

  const handleBackToRepair = () => {
    setSelectedServices([]);
    setTotalAmount(0);
    setStep(3);
  };

  return (
    <div className="flex flex-col p-8 m-4 justify-center">
      <ProgressBar step={step} />
      {step === 1 && <BrandList onSelectBrand={handleSelectBrand} />}
      {step === 2 && (
        <ModelList
          brand={selectedBrand!.uid}
          onModelSelect={handleSelectModel}
          onBack={handleBackToBrands}
        />
      )}
      {step === 3 && (
        <Repair
          modelUid={selectedModel!.uid}
          modelName={selectedModel!.name} // Passing the model name to Repair
          brandName={selectedBrand!.name} // Passing the brand name to Repair
          onBack={handleBackToModels}
          onProceed={handleProceedToRepairServices} // Modified to handle multiple services
        />
      )}
      {step === 4 && (
        <BookAppointment
          selectedBrand={selectedBrand!}
          selectedModel={selectedModel!}
          selectedServices={selectedServices} // Passing the array of selected services
          totalAmount={totalAmount}
          onBack={handleBackToRepair}
        />
      )}
    </div>
  );
};

export default Home;
