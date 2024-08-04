"use client";
import "./globals.css";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { useEffect } from "react";
import { getTypeComplaint, postComplaint } from "@/lib/serverActions";

export default function ReportProblem() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [complaintTypes, setComplaintTypes] = useState([]);
  const [complaint, setComplaint] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({ complaint: false, type: false });

  const handleClick = async (event) => {
    event.preventDefault();
    setErrors({ complaint: false, type: false });
    let hasError = false;
    const arabicRegex = /[\u0600-\u06FF]/;
    if (!complaint) {
      setErrors((prev) => ({ ...prev, complaint: true }));
      hasError = true;
    } else if (!arabicRegex.test(complaint)) {
      setErrors((prev) => ({ ...prev, complaintLang: true }));
      hasError = true;
    }
    if (!type) {
      setErrors((prev) => ({ ...prev, type: true }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      await postComplaint(complaint, type);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error posting complaint:", error);
    }
  };

  useEffect(() => {
    const fetchComplaintTypes = async () => {
      try {
        const data = await getTypeComplaint();
        console.log("Fetched complaint types:", data);
        if (data && data.succes && Array.isArray(data.types)) {
          setComplaintTypes(data.types);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching complaint types:", error);
      }
    };

    fetchComplaintTypes();
  }, []);

  return (
    <div className="form-container mx-auto my-32">
      <div className="container">
        <h1 className="text-2xl text-center my-4">أهلا بك عميلنا العزيز</h1>
        <p className="text-sm text-center text-slate-600">
          هدفنا تمكين عملائنا من التجارة و التسوق الإلكتروني المتكامل في حال
          واجهتك أي مشكلة أو استفسار أرسل لنا مشكلتك وسنقوم بمعالجتها، فملاحظاتك
          محل تقديرنا واهتمامنا!
        </p>
      </div>
      <form className="form container">
        <div className="form-group">
          <label htmlFor="problem" className="text-black text-4xl">
            نوع الشكوى
          </label>
          <select
            id="problem"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={errors.type ? "error-border" : ""}
          >
            <option value="" disabled className=" text-slate-500">
              يرجى التحديد
            </option>
            {complaintTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.type && <p className="error-text">يرجى اختيار نوع الشكوى</p>}
        </div>
        <div className="form-group">
          <label htmlFor="textarea" className="text-black text-4xl pb-1">
            ماهو سبب الشكوى؟
          </label>
          <textarea
            placeholder="هل يمكن ان تساعدني في ..."
            cols="50"
            rows="10"
            id="textarea"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            className={
              errors.complaint || errors.complaintLang ? "error-border" : ""
            }
          />
          {errors.complaint && (
            <p className="error-text">يرجى كتابة سبب الشكوى</p>
          )}
          {errors.complaintLang && (
            <p className="error-text">يرجى كتابة سبب الشكوى باللغة العربية</p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleClick}
            className="mt-3 w-40 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 hover:scale-110"
          >
            إرسال
          </button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            message="تم إرسال الشكوى"
            ContentProps={{
              style: {
                backgroundColor: "white",
                color: "black",
                fontSize: "17px",
              },
            }}
          />
        </div>
      </form>
    </div>
  );
}
