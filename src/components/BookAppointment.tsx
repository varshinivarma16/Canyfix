"use client";
import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button1 from "./Button1";
import ConfirmationModal from "./ConfirmationModal";
import { SelectedService } from "@/constant/type";
import axios from "axios";
import { BASE_URL } from "@/constant";

interface BookAppointmentProps {
  selectedBrand: SelectedItem;
  selectedModel: SelectedItem;
  selectedServices: SelectedService[];
  totalAmount: number;
  onBack: () => void;
}

const BookAppointment: React.FC<BookAppointmentProps> = ({
  selectedBrand,
  selectedModel,
  selectedServices,
  totalAmount,
  onBack,
}) => {
  console.log(selectedBrand, selectedModel, selectedServices);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(!!phoneNumber && !!date);
  }, [phoneNumber, date]);

  const handleSubmit = async () => {
    try {
      const queryParams = new URLSearchParams({
        payload: JSON.stringify({
          phone_number: phoneNumber,
          brand_uid: selectedBrand.uid,
          model_uid: selectedModel.uid,
          date: date?.toISOString(),
          comment: note,
        }),
      }).toString();

      const roughApiResponse = await axios.post(
        `${BASE_URL}/appointment/rough_create?${queryParams}`,
        {}
      );

      if (
        roughApiResponse.status === 201 &&
        roughApiResponse.data.msg === "Successfully added"
      ) {
        setIsModalOpen(true);
      } else {
        alert("Failed to add appointment. Validation error occurred.");
      }
    } catch (error: any) {
      console.error(
        "Error calling rough API:",
        error.response?.data || error.message
      );
      alert("Failed to add appointment. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    console.log("Appointment confirmed");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 lg:p-8 border rounded-xl shadow-lg bg-white mt-10">
      <button onClick={onBack} className="text-blue-500 mb-6">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mt-4 text-center">
        Book an Appointment
      </h1>

      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium">
            Choose Date (Optional)
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose Date"
              value={date}
              minDate={dayjs()} 
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="+91-45-56-6567-57"
          />
        </div>
      </div>

      <div className="mt-20">
        <label className="block mb-2 text-sm font-medium">Add a Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Additional details..."
          rows={6}
        />
      </div>

      <Button1
        onClick={handleSubmit}
        className={`w-full py-3 mt-24 text-white rounded-lg transition-all duration-500 ease-in-out ${
          isFormValid
            ? "bg-[#41668F] hover:bg-[#0B2B4F]"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Book Appointment
      </Button1>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        phoneNumber={phoneNumber}
        brandName={selectedBrand}
        modelName={selectedModel}
        selectedServices={selectedServices}
        totalAmount={totalAmount}
        note={note}
      />
    </div>
  );
};

export default BookAppointment;
