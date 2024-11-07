"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";


const DeleteAccount = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(true);
    

    let textInput = React.createRef();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get(`https://apidev.canyfix.com/v0/user/o/${e.target.number.value}`)
            .then((res) => {
                console.log(res);
                setShowForm(false);
            })
            .catch(((error) => {console.error(error)}))
        
    }
    return (
      <>
        
        <form className="pt-32 pb-32 max-w-sm mx-auto" onSubmit={handleSubmit} >
            {showForm ? (
                <>
                    <center className="pb-16 ">Delete Your Account</center>
                    <div className="mb-5">
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Number</label>
                        <input  type="number"  id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="9999999999" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" id="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm delete</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </>
            ) :
            (
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative pt-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 pt-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Success</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">We will removed account in next 24 hours.</p>
                    <button data-modal-toggle="successModal" type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                        Continue
                    </button>
                </div>
            </div>)
            }
        </form>
        
      </>
    );
  };
  
  export default DeleteAccount;
