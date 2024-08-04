import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";

function ClientLayoutFirst({children}) {
    return (
        <>
            <Navbar/>
             {children}
            <Footer/>
        </>
    );
}
export default  dynamic (() => Promise.resolve(ClientLayoutFirst), { ssr: false })