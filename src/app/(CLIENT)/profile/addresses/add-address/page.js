export const dynamic = "force-dynamic";
import AddAddressForm from "@/components/profile/AddAddressForm"
import {postAddress} from "@/util/serverActions";

const AddAddress = () => {
    return (
        <>
            <div className="mr-80 mt-24">
            <AddAddressForm postAddress={postAddress}/>
            </div>
        </>
    );
}

export default AddAddress;