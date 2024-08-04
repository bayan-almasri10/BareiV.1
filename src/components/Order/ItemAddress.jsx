import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function ItemAddress({ onClick, displayAddresses, postAddress, deleteAddress,onSelectAddress }) {

    const [checkedItemId, setCheckedItemId] = useState(null);

    const handleChangeCheck = (event, itemId) => {
        if (event.target.checked) {
            setCheckedItemId(itemId);
            onSelectAddress(itemId); // Call the onSelectAddress function with the selected item ID
        } else {
            setCheckedItemId(null);
            onSelectAddress(null); // Call the onSelectAddress function with null when unchecked
        }
    };

    const handleDeleteAddress = (itemId) => {
        deleteAddress(itemId);
        setCheckedItemId(null); // Reset checked item after deletion
        onSelectAddress(null); // Reset selected address after deletion
    };

    return (
        <>
            <div className="container">
                <h5 className={'text-lg font-semibold'}>دليل العناوين</h5>
                <FormGroup>
                    {displayAddresses?.address.map((item) => (
                        <div className="border p-3 my-3 flex justify-between" key={item?.id}>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={checkedItemId === item?.id}
                                    onChange={(event) => handleChangeCheck(event, item?.id)}
                                />}
                                className={'my-auto'}
                            />

                            <div className="my-1 mx-5">
                                <p className="mb-1">العنوان : {item?.address} | {item?.city} | {item?.state}</p>
                                <p className="mb-1">الرقم الأساسي : {item?.primaryPhone}<span> 213 + </span></p>
                                <p className="mb-1"> الرقم الثانوي :{item?.secondaryPhone} <span> 213 + </span></p>
                            </div>

                            <AlertDialog>
                                <AlertDialogTrigger><DeleteIcon className="text-red-600" /></AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogDescription>
                                            سيتم حذف هذا العنوان نهائيا!
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter className="mx-auto">
                                        <AlertDialogAction className="bg-red-600 mx-1"
                                                           onClick={() => handleDeleteAddress(item.id)}>موافق</AlertDialogAction>
                                        <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    ))}
                </FormGroup>
                <button
                    className={`m-5 mx-auto relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden bg-fuchsia-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
                    onClick={() => onClick('OrderAddress') && handleSubmit()}>
                    إضافة عنوان جديد
                </button>
            </div>
        </>
    );
}

export default ItemAddress;
