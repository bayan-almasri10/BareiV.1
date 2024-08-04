"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import nookies from 'nookies';

const DeleteAccount = ({ deleteProfile , ProfileInfo }) => {
    console.log(ProfileInfo)
    const [email, setEmail] =useState(ProfileInfo?.user?.email);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogout = () => {

        nookies.destroy(null, 'token', {
            path: '/',
        });
        // window.location.href = '/login'; 
        deleteProfile();
    };
    return (
        <>
            <div className="">
                <div className="rounded-3xl shadow-md shadow-fuchsia-300 w-[55rem]">
                    <div className="flex justify-between border-b border-fuchsia-700 ">
                        <div className="Label flex m-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-x-octagon-fill my-auto text-fuchsia-700" viewBox="0 0 16 16">
                                <path
                                    d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                            </svg>

                            <h2 className=" text-2xl font-light p-3 my-auto text-fuchsia-700"> حذف الحساب </h2>
                        </div>
                    </div>

                    <div className=" w-full h-full p-5 mx-auto flex flex-col justify-center gap-4 ">
                        <h3 className="text-center text-xl"> يؤسفنا ذهابك من منصتنا </h3>
                        <p className="text-center font-light text-lg py-3"> قبل حذف حسابك، نريد إبلاغك بأن هذا الإجراء
                            سيحذف جميع بياناتك من منصات بارع.</p>
                        <div className="flex flex-col w-max max-w-sm items-center gap-3 mb-3 mx-auto h-24 ">
                            <div className="my-5">
                            <Box
                                component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                    }}
                                noValidate
                                autoComplete="off"
                            >
                                
                                <div>
                                    <TextField
                                        dir="ltr"
                                        id="standard-textarea"
                                        defaultValue=""
                                        color="secondary"
                                        variant="standard"
                                            value={email}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </div>
                                </Box>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, width: '40ch' }} variant="standard" dir="ltr">
                                <Input
                                    id="standard-adornment-password"
                                    color="secondary"
                                    placeholder='كلمة السر'
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
                        <div className="bay mx-auto mt-12 flex justify-center">
                            <AlertDialog className="text-center mt-12" >
                                <AlertDialogTrigger className={`mt-24 relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-red-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}>
                                     حذف الحساب نهائيا
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle className="text-center"> سيتم حذف الحساب نهائيا </AlertDialogTitle>   
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                    <Link href ="/login"><AlertDialogAction className="bg-red-500" onClick={handleLogout()} > حذف </AlertDialogAction> </Link>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                   </div>
                </div>
            </div>
        </>
    );
}
export default DeleteAccount;