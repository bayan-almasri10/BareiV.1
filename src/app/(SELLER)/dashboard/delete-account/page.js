export const dynamic = "force-dynamic";
import DeleteAccount from "@/components/Dashboardseller/Deleteaccount"
import {deleteProfile} from "@/lib/serverActions"
export default async function DeleteAccountPage() {
  const Delete = await deleteProfile();
  return (
    <div> 
      <DeleteAccount deleteProfile={Delete} />
    </div>
  );
}