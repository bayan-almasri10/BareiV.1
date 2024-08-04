export const dynamic = "force-dynamic";
import ChangePassword from '@/components/profile/ChangePassword'
import { changePassword } from '@/util/serverActions'
export default async function Changepassword() {
    return (
        <>
            <div className="mr-80 mt-24">
                <ChangePassword password={changePassword} />
            </div>
        </>
    )
}