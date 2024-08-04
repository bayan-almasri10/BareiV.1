import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import GoToTopButton from "@/components/GoToUp/GoToUp";
import dynamic from "next/dynamic";

 function ClientLayout({ children }) {
  return (
    <>
        {children}
        <GoToTopButton/>
    </>
  );
}
export default dynamic(() => Promise.resolve(ClientLayout), { ssr: false })