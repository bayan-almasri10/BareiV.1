"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  putStoreSettings,
  getCategory,
  getStoreSettings,
} from "@/lib/serverActions";
import Image from "next/image";

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

export default function StoreSettings() {
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [logo, setLogo] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({
    storeName: false,
    categoryId: false,
    description: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    storeName: "",
    categoryId: "",
    description: "",
  });

  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const data = await getStoreSettings();
        console.log("Data received:", data);

        if (data && data.store) {
          setStoreName(data.store.storeName);
          setDescription(data.store.storeDescription);
          setCategoryId(data.store.categoryId);
        } else {
          console.error("No valid data found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccountSettings();
  }, []);

  const handleLogoChange = (e) => {
    const files = Array.from(e.target.files);
    const newLogo = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setLogo(newLogo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      storeName: false,
      categoryId: false,
      description: false,
    });
    setErrorMessages({
      storeName: "",
      categoryId: "",
      description: "",
    });

    let hasError = false;
    const arabicRegex = /^[\u0600-\u06FF\s]+$/;

    if (!storeName) {
      setErrors((prev) => ({ ...prev, storeName: true }));
      setErrorMessages((prev) => ({
        ...prev,
        storeName: "يرجى إدخال إسم المتجر",
      }));
      hasError = true;
    } else if (!arabicRegex.test(storeName)) {
      setErrors((prev) => ({ ...prev, storeName: true }));
      setErrorMessages((prev) => ({
        ...prev,
        storeName: "يرجى إدخال إسم المتجر باللغة العربية",
      }));
      hasError = true;
    }

    if (!categoryId) {
      setErrors((prev) => ({ ...prev, categoryId: true }));
      setErrorMessages((prev) => ({
        ...prev,
        categoryId: "يرجى اختيار مجال النشاط التجاري",
      }));
      hasError = true;
    }

    if (!description) {
      setErrors((prev) => ({ ...prev, description: true }));
      setErrorMessages((prev) => ({
        ...prev,
        description: "يرجى إدخال وصف للمتجر",
      }));
      hasError = true;
    } else if (!arabicRegex.test(description)) {
      setErrors((prev) => ({ ...prev, description: true }));
      setErrorMessages((prev) => ({
        ...prev,
        description: "يرجى إدخال وصف المتجر باللغة العربية",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const formData = new FormData();
    formData.append("storeName", storeName);
    formData.append("categoryId", categoryId);
    formData.append("description", description);
    if (logo.length > 0) {
      formData.append("logo", logo[0].file);
    }

    try {
      await putStoreSettings(formData);
      setOpenSnackbar(true);
      setStoreName("");
      setCategoryId("");
      setDescription("");
      setLogo([]);
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const data = await getCategory();
      if (data && Array.isArray(data.category)) {
        setCategories(data.category);
      } else {
        console.error("Invalid data format");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [infoCompleted, setInfoCompleted] = useState(false);

  return (
    <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
      <div className="container py-3 mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="flex items-center gap-2 border-b border-fuchsia-800 mx-3 ">
          <h1 className=" text-fuchsia-800 text-center py-3 text-2xl font-bold">
            {" "}
            معلومات المتجر
          </h1>
        </div>
        <div>
          <div className="max-w-md mx-auto">
            <form className="p-5 mt-10" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block font-semibold text-base text-gray-700 pb-1"
                  htmlFor="store-name"
                >
                  إسم المتجر
                </label>
                <input
                  id="store-name"
                  className={`mt-1 text-slate-500 p-2 w-full bg-slate-50 border ${
                    errors.storeName ? "border-red-500" : "border-gray-600"
                  } shadow-purple-400 text-sm shadow-md rounded-lg`}
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
                {errors.storeName && (
                  <p className="error-text">{errorMessages.storeName}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block font-semibold text-base text-gray-700 pb-1"
                  htmlFor="category-id"
                >
                  مجال النشاط التجاري
                </label>
                <select
                  id="category-id"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className={`mt-1 text-slate-500 p-2 w-full bg-slate-50 border ${
                    errors.categoryId ? "border-red-500" : "border-gray-600"
                  } shadow-purple-400 text-sm shadow-md rounded-lg`}
                >
                  <option value="">يرجى التحديد</option>
                  {Array.isArray(categories) ? (
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option>لا توجد فئات</option>
                  )}
                </select>
                {errors.categoryId && (
                  <p className="error-text">{errorMessages.categoryId}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block font-semibold text-base text-gray-700 pb-1"
                  htmlFor="bio"
                >
                  وصف المتجر
                </label>
                <textarea
                  className={`mt-1 text-slate-500 p-2 w-full bg-slate-50 border ${
                    errors.description ? "border-red-500" : "border-gray-600"
                  } shadow-purple-400 text-sm shadow-md rounded-lg`}
                  rows="3"
                  name="bio"
                  id="bio"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && (
                  <p className="error-text">{errorMessages.description}</p>
                )}
              </div>

              <div className="pb-2">
                <Button
                  className="bg-gradient-to-r text-sm px-3 py-2 mt-3 from-purple-600 via-purple-400 to-blue-500 text-white rounded-md hover:opacity-80"
                  component="label"
                  startIcon={<CloudUploadIcon className="ml-5" />}
                >
                  رفع شعار متجرك
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleLogoChange}
                  />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative bg-white md:mx-0 h-32 py-4 sm:p-10 mt-20 container mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="text-center">
        {infoCompleted ? (
  <p className="text-green-500">تم اكتمال معلومات المتجر بنجاح</p>
) : (
  null
)}

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-3 w-48 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110"
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
