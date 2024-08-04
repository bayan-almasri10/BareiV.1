"use client";
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { putAccountSettings, getAccountSettings } from "@/lib/serverActions";
import data from "../../data/data.json";

export default function AccountSettings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const data = await getAccountSettings();
        console.log("Data received:", data);

        if (data && data.user) {
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          setEmail(data.user.email);
          setPhone(data.user.phone);
          setDateBirth(data.user.dateBirth.split("T")[0]);
          setGender(data.user.gender);
          setState(data.user.state);
          setCity(data.user.city);
        } else {
          console.error("No valid data found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccountSettings();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await putAccountSettings(
      firstName,
      lastName,
      email,
      phone,
      dateBirth,
      gender,
      state,
      city
    );
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
      <div className="container py-8 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="flex items-center gap-2 border-b border-fuchsia-800 mx-3">
          <h1 className="pb-3 text-fuchsia-800 text-center items-center mx-72 text-2xl font-bold">
            معلومات الحساب
          </h1>
        </div>
        <div>
          <div className="max-w-md mx-auto">
            <form className="mt-5 -mr-12" onSubmit={handleSubmit}>
              <div className="flex gap-10">
                <div>
                  <label
                    htmlFor="First-Name"
                    className="font-semibold text-sm text-gray-700 pb-1 "
                  >
                    الإسم
                  </label>
                  <input
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    id="First-Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="full-name"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    اللقب
                  </label>
                  <input
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    id="full-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <label
                    htmlFor="email"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    placeholder="+213"
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="(\+213|0)([5-7])([0-9]){8}"
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <label
                    htmlFor="dob"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    العمر
                  </label>
                  <input
                    type="date"
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={dateBirth}
                    onChange={(e) => setDateBirth(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gender"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    الجنس
                  </label>
                  <select
                    className="border bg-white text-slate-500 w-64 h-10 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="gender" selected></option>
                    <option value="1">ذكر</option>
                    <option value="0">أنثى</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <label
                    htmlFor="state"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    الولاية
                  </label>
                  <select
                    className="border bg-white text-slate-500 w-64 h-10 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value=""></option>
                    {data.map((city, index) => (
                      <option key={index} value={city.city}>
                        {city.city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    البلدية
                  </label>
                  <input
                    className="border text-slate-500 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative bg-white md:mx-0 h-32 py-4 sm:p-10 mt-20 container  border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="text-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" mt-3 w-48 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110  "
          >
            حفظ
          </button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            message="تم حفظ البيانات"
            ContentProps={{
              style: {
                backgroundColor: "white",
                color: "black",
                fontSize: "17px",
              },
            }}
            onClose={handleSnackbarClose}
          />
        </div>
      </div>
      <div className="text-center -mb-12 mt-20 text-slate-700">
        &copy; جميع الحقوق محفوظة لشركة بارع 2024
      </div>
    </div>
  );
}
