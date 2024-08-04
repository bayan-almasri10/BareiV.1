'use client';
import { useState } from "react";
import ClientSignup from "./clientSignup";
import Signupseller from "./Signupseller";

const SelectForm = ({signUp}) => {
  const [selected, setSelected] = useState("seller");
  const handleClick = (value) => {
    setSelected(value);
  };
  return (
    <>
    {
      selected === "client" ? <ClientSignup signUp={signUp} selectForm={handleClick}/> : <Signupseller  signUp={signUp} selectForm={handleClick}/>
    }
     </>
  );
};
export default SelectForm;
