"use client";
import { useEffect } from "react";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { postProducte , getSubCategory  } from "@/lib/serverActions";

import "./globals.css";

const AddProducte = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productCategoryId, setProductCategoryId] = useState();
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [hasStock, setHasStock] = useState(false);
  const [image, setImage] = useState([]);
  const [onDemand, setOnDemand] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
   
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImage = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    if (image.length + newImage.length > 5) {
      alert("يمكنك إضافة 5 صور فقط.");
      return;
    }

    setImage([...newImage, ...image]);
  };

  const [errors, setErrors] = useState({
    name: false,
    price: false,
    productCategoryId: false,
    description: false,
    stock: false,
    image: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    price: "",
    productCategoryId: "",
    description: "",
    stock: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      name: false,
      price: false,
      productCategoryId: false,
      description: false,
      stock: false,
      image: false,
    });
    setErrorMessages({
      name: "",
      price: "",
      productCategoryId: "",
      description: "",
      stock: "",
      image: "",
    });

    let hasError = false;
    const arabicRegex =
      /^[\u0600-\u06FF0-9\s.,;?!@#$%^&*()_+=\[\]{}|\\\/<>~-]*$/;
    const numericRegex = /^[0-9]*$/;

    if (!image.length) {
      setErrors((prev) => ({
        ...prev,
        image: true,
      }));
      setErrorMessages((prev) => ({
        ...prev,
        image: "يرجى إضافة صورة للمنتج",
      }));
      hasError = true;
    }

    if (!name) {
      setErrors((prev) => ({ ...prev, name: true }));
      setErrorMessages((prev) => ({ ...prev, name: "يرجى إدخال إسم المنتج" }));
      hasError = true;
    } else if (!arabicRegex.test(name)) {
      setErrors((prev) => ({ ...prev, name: true }));
      setErrorMessages((prev) => ({
        ...prev,
        name: "يرجى إدخال إسم المنتج باللغة العربية",
      }));
      hasError = true;
    }

    if (!price) {
      setErrors((prev) => ({ ...prev, price: true }));
      setErrorMessages((prev) => ({ ...prev, price: "يرجى إدخال سعر المنتج" }));
      hasError = true;
    } else if (!numericRegex.test(price)) {
      setErrors((prev) => ({ ...prev, price: true }));
      setErrorMessages((prev) => ({
        ...prev,
        price: "يرجى إدخال سعر المنتج بالأرقام فقط",
      }));
      hasError = true;
    }

    if (!productCategoryId) {
      setErrors((prev) => ({ ...prev, productCategoryId: true }));
      setErrorMessages((prev) => ({
        ...prev,
        productCategoryId: "يرجى اختيار مجال المنتج",
      }));
      hasError = true;
    }

    if (!description) {
      setErrors((prev) => ({ ...prev, description: true }));
      setErrorMessages((prev) => ({
        ...prev,
        description: "يرجى إدخال وصف المنتج",
      }));
      hasError = true;
    } else if (!arabicRegex.test(description)) {
      setErrors((prev) => ({ ...prev, description: true }));
      setErrorMessages((prev) => ({
        ...prev,
        description: "يرجى إدخال وصف المنتج باللغة العربية",
      }));
      hasError = true;
    }

    if (hasStock && !stock) {
      setErrors((prev) => ({ ...prev, stock: true }));
      setErrorMessages((prev) => ({
        ...prev,
        stock: "يرجى إدخال كمية المخزون",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("productCategoryId", productCategoryId);
    formData.append("description", description);
    formData.append("onDemond", `${!hasStock}`);
    if (hasStock) {
      formData.append("stock", stock);
    }

    image.forEach((img, index) => {
      formData.append(`img${index + 1}`, img.file);
    });

    try {
      await postProducte(formData);
      setOpenSnackbar(true);
      setName("");
      setPrice("");
      setProductCategoryId();
      setDescription("");
      setStock("");
      setImage([]);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const data = await getSubCategory();
        console.log("Data fetched:", data);
        if (data && Array.isArray(data.subCategory)) {
          setSubCategories(data.subCategory);
        } else {
          console.error("Unexpected data format.");
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  return (
    <div className="pl-12 pr-72 py-8 h-auto w-auto my-12">
      <div className="relative px-4 py-10 mx-8 md:mx-0  sm:p-10 container mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="flex items-center gap-2 border-b border-fuchsia-800 mx-3 ">
          <h1 className="pb-3 text-2xl font-bold text-fuchsia-800 text-center mx-64 pr-8">
            بيانات المنتج الأساسية
          </h1>
        </div>
        <div className="max-w-md mx-auto">
          <div className="mt-16">
            <div className="flex gap-16 w-auto">
              <div className="flex flex-col">
                <label
                  htmlFor="file"
                  className="custum-file-upload bg-slate-50"
                >
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill=""
                      width="45"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                          fill=""
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="text text-slate-400">
                    <span>حمل صور منتجك</span>
                  </div>
                  <input
                    id="file"
                    type="file"
                    multiple
                    onChange={handleImageChange}
                  />
                </label>

                <div className="flex flex-col mt-3 mr-2 text-sm text-slate-500">
                  <span>الصيغ المدعومة: png, jpg, jpeg, gif</span>
                  <span>أبعاد الصور: 1000x1000</span>
                  <span>حجم الصورة لا يتجاوز: 2MB</span>

                  {errors.image && (
                    <p className="error-text">{errorMessages.image}</p>
                  )}
                </div>
              </div>
              {image.length > 0 && (
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper pt-0"
                >
                  {image.map((imag, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={imag.preview}
                        alt={`معاينة صورة المنتج ${index + 1}`}
                        width={100}
                        height={200}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  إسم المنتج
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                />{" "}
                {errors.name && (
                  <p className="absolute -mt-7 text-red-500">
                    {errorMessages.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  سعر المنتج
                </label>
                <input
                  placeholder="0 دج"
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={`border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm ${
                    errors.price ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.price && (
                  <p className="absolute -mt-7 text-red-500">
                    {errorMessages.price}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="Domain"
                  className="font-semibold text-sm text-gray-700 pb-1"
                >
                  مجال المنتج
                </label>
                <select
                  id="Domain"
                  className={`border w-64 h-10 bg-white shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm ${
                    errors.productCategoryId || !image.length
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
                  value={productCategoryId}
                  onChange={(e) => setProductCategoryId(e.target.value)}
                >
                  <option value="" selected></option>
                  {subCategories.map((subCategory) => (
                    <option key={subCategory.id} value={subCategory.id}>
                      {subCategory.name}
                    </option>
                  ))}
                </select>
                {errors.productCategoryId && (
                  <p className="absolute -mt-7 text-red-500">
                    {errorMessages.productCategoryId}
                  </p>
                )}
              </div>
              {!hasStock && <input id="stock" />}
              {hasStock && (
                <div>
                  <label
                    htmlFor="stock"
                    className="font-semibold text-sm text-gray-700 pb-1"
                  >
                    كمية المخزون
                  </label>
                  <input
                    type="number"
                    id="stock"
                    className={`border w-64 shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm ${
                      errors.stock ? "border-red-500" : "border-gray-600"
                    }`}
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  {errors.stock && (
                    <p className="absolute -mt-7 text-red-500">
                      {errorMessages.stock}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="">
              <label
                htmlFor="remember"
                className="font-semibold text-sm text-gray-700 pb-1"
              >
                هل لديك مخزون؟
              </label>
              <input
                onChange={(e) => setHasStock(e.target.checked)}
                id="remember"
                type="checkbox"
                className="ui-checkbox"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="description"
                className="font-semibold text-sm text-gray-700 pb-1"
              >
                وصف المنتج
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`border w-full shadow-purple-500 shadow-md rounded-lg px-3 py-2 mt-1 mb-5 text-sm ${
                  errors.description ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.description && (
                <p className="absolute -mt-7 text-red-500">
                  {errorMessages.description}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="relative bg-white md:mx-0 h-32 py-4 sm:p-10 mt-20 container  mb-5 border border-fuchsia-800 shadow-md shadow-fuchsia-900 rounded-xl">
        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit }
            className=" mt-3 w-48 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110  "
          >
            رفع المنتج
          </button>

      <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            message="تمت إضافة المنتج"
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

      <div className="text-center mt-20 text-slate-700">
        <p>&copy; جميع الحقوق محفوظة لشركة بارع 2024</p>
      </div>
    </div>
  );
};

export default AddProducte;
