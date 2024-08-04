import React from "react";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const PhoneConfirmation = () => {
    return (
        <>
            <div className="rounded-3xl shadow-md shadow-fuchsia-300 w-[55rem]">
            <div className="flex  justify-between border-b border-fuchsia-700 ">
                <div className="Label flex m-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-telephone-fill my-auto text-fuchsia-700" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    <h2 className=" text-2xl font-light p-3 my-auto text-fuchsia-700"> رقم الهاتف الحالي</h2>
                </div>

            </div>
                <div className=" w-full h-full p-5 mx-auto flex flex-col justify-center gap-4 ">
                    <p className="text-center font-light text-lg py-3">هذا هو رقم الهاتف المرتبط حاليًا بملفك الشخصي.
                        يمكنك تغييره بالنقر على الزر أدناه</p>
                    <span
                        className="flex justify-center mx-auto bg-fuchsia-200 rounded-full p-1 text-light text-center text-fuchsia-800 border-1  border-fuchsia-800 w-16">فعال</span>
                    <div className="flex w-max max-w-sm items-center gap-3 mb-3 mx-auto h-24 ">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            
                            <div>
                                <TextField
                                    dir="ltr"
                                    id="standard-textarea"
                                    defaultValue=" 0553672168 "
                                    color="secondary"
                                    variant="standard"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </div>
                        </Box>
                        <div className="bg-slate-200 w-16 text-center rounded-l-full p-2 pr-0 ">
                             213 +
                        </div>
                 </div>
                <div className="bay mx-auto flex justify-center">
                    <button className={`m-5 relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-400 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
                            تأكيد رقم الهاتف
                    </button>
                </div>
            </div>
        </div>

        </>
    )
}
export default PhoneConfirmation;