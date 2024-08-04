
"use client";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import { changePassword } from "@/lib/serverActions";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError("كلمة السر وتأكيدها غير متطابقين");
      return;
    }
    setPasswordError("");
    await changePassword(oldPassword, newPassword, confirmPassword);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
      <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="flex items-center gap-2 border-b border-fuchsia-800 mx-3 ">
          <h1 className="pb-3 text-fuchsia-800 text-center text-2xl font-bold">
            تغيير كلمة السر
          </h1>
        </div>

        <div className="max-w-md mx-auto">
          <form className="my-5 text-center" onSubmit={handleSubmit}>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="oldPassword"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                كلمة السر القديمة
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="oldPassword"
                className="border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <svg
                  className="eye fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="newPassword"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                كلمة السر الجديدة
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                className="border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <svg
                  className="eye fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-sm text-gray-700 pb-1 mx-4"
              >
                تأكيد كلمة السر
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="border mr-3 w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                aria-label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 px-4 py-2 mb-11 -mr-14"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <svg
                  className="eye fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </button>
            </div>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </form>
        </div>
      </div>

      <div className="relative bg-white md:mx-0 h-32 py-4 sm:p-10 mt-20 container border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="text-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-3 w-48 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110"
          >
            حفظ
          </button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            message="تم تغيير كلمة السر بنجاح"
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

      <div>
        <p className="text-center -mb-12 mt-20 text-slate-700">
          &copy; جميع الحقوق محفوظة لشركة بارع 2024
        </p>
      </div>
    </div>
  );
}
