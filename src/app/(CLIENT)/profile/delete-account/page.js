export const dynamic = "force-dynamic";
import Deleteaccount from "@/components/profile/DeleteAccount"
import { deleteProfile } from '@/util/serverActions'
import { getProfileInfo } from "@/util/serverActions";
export default async function DeleteAccount() {

    const ProfileInfo = await getProfileInfo();

    return (
        <>
            <div className="mr-80 mt-24">
                <Deleteaccount deleteProfile={deleteProfile} ProfileInfo={ProfileInfo} />
            </div>
        </>
    )
}