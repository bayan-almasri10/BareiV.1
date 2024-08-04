"use client"
import Changepassword from "@/components/Dashboardseller/Changepassword"
import { changePassword } from "@/lib/serverActions";
export default function ChangePassword () {
  return (
    <div> 
      <Changepassword password={changePassword}/>
    </div>
  );
}