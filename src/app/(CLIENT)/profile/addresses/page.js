export const dynamic = "force-dynamic";
import Contact from "@/components/profile/Contact";
import {deleteAddress, getAddress,putAddress} from "@/util/serverActions";
import EmptyAddress from "@/components/EmptyPage/EmptyCartAddress";

export default async function AddressesPage() {
    const displayAddress = await getAddress();
    return (
        <div className="mr-80 mt-24">
            {displayAddress?.address?.length > 0 ? 
                <Contact deleteAddress={deleteAddress} displayAddress={displayAddress} putAddress={putAddress} />
                :
                <EmptyAddress />
            }
        </div>
    )
}