'use client'
import * as React from 'react';
import { Label } from '../ui/label';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useToast } from "@/components/ui/use-toast"

import { useState } from 'react'; 
const ChangePassword = ({ password }) => {
    const { toast } = useToast()


    const [showPassword, setShowPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState()
    const [Password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await password(oldPassword,Password,confirmPassword);
        toast({
            title: "تم تغيير كلمة السر بنجاح",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-right",
            style: {
                zIndex: 9999, // Set the z-index to be above all other elements
                backgroundColor: "purple",
               fontColor: "white",
            }
        })

    };
    return (
        <>
            <div className="rounded-3xl shadow-md shadow-fuchsia-300 w-[55rem]">
                <div className="flex justify-between border-b border-fuchsia-700 ">
                    <div className="Label flex m-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-lock-fill my-auto text-fuchsia-700" viewBox="0 0 16 16">
                            <path
                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                        </svg>
                        <h2 className=" text-2xl font-light p-3 my-auto text-fuchsia-700"> تغيير كلمة السر </h2>
                    </div>
                </div>

                <div className=" w-full h-full p-5 mx-auto flex flex-col gap-4 ">
                    <div className="grid w-full max-w-sm items-center gap-3 mb-3 mx-auto h-24">
                        <FormControl sx={{m: 1, width: '40ch' }} variant="standard">
                        <Label htmlFor="standard-adornment-password"  className=" text-lg font-light">كلمة السر القديمة</Label>
                         <Input
                            id="standard-adornment-password"
                            color="secondary"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                        </FormControl>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3 mb-3 mx-auto h-24">
                        <Label htmlFor="standard-adornment-password"  className=" text-lg font-light">كلمة السر الجديدة</Label>
                          <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                        <Input
                            id="standard-adornment-password"
                            color="secondary"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                        </FormControl>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-3 mx-auto mb-3 h-24">
                        <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                        <Label htmlFor="standard-adornment-password"  className=" text-lg font-light"> تأكيد كلمة السر </Label>
                        <Input
                            id="standard-adornment-password"
                            color="secondary"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                        </FormControl>
                    </div>
                </div>

                <div className="">
                     

                 <div className="bay mx-auto flex justify-center">
                    <button className={`m-5 relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-400   rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
                             onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(e);}}>
                    حفظ التغييرات
                    </button>
                </div>
                   
                </div>
            </div>
        </>
    );
}
export default ChangePassword;