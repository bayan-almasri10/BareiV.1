export const dynamic = "force-dynamic";
import ProfileInfo from '@/components/profile/ProfileInfo'
import { getProfileInfo , putProfileInfo } from "@/util/serverActions";

export default async function Profileinfo() {
    const profileInfo = await getProfileInfo();
    return (
        <>
            <div className="mr-80 mt-24">
                <ProfileInfo putProfileInfo={putProfileInfo} profileInfo={profileInfo} />
            </div>
        </>
    )
}