'use client'
import "./globals.css";
import Image from "next/image";
import p1 from "../../../public/images/avatar/img1.png";

export default function Feedback({ feedback }) {
  console.log(feedback);

  // Check if feedback is empty
  const isEmpty = Object.keys(feedback).length === 0;

  return (
    <>
      {isEmpty ? (
        // Render image if feedback is empty
        <div className="text-center">
          <Image
            src={p1}
            width={50}
            height={50}
            alt="image"
            className="border-2 rounded-full"
          />
          <p>No feedback available</p>
        </div>
      ) : (
        // Render feedback if not empty
        <div
          className="w-full h-auto rounded-xl text-center border p-2 blur-5"
          dir="rtl"
        >
          <div className="flex p-2 bg-slate-50 rounded-xl">
            <Image
              src={p1}
              width={50}
              height={50}
              alt="image"
              className="border-2 rounded-full"
            />
            <h6 className="font-extrabold p-1 my-auto mr-2 text-slate-500">
              {feedback.firstName + " " + feedback.lastName}
            </h6>

            <div className="my-auto mr-auto">{feedback.createdAt}</div>
          </div>
          <div className="flex p-2">
            <p className="text p-1 mr-5 mb-0 font-thin text-md ">
              {feedback.comment}
            </p>
            <div className="my-auto bg-yellow-500 p-1 rounded-full text-white mr-auto">
              {feedback.rating}/5
            </div>
          </div>
        </div>
      )}
    </>
  );
}
