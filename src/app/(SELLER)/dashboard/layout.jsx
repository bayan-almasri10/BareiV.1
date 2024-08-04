import "bootstrap/dist/css/bootstrap.css";
import Persistent from "./Persistent";

export default function DashboardLayout({ children }) {
  return (
    <>
        <Persistent/>
        {children}            
    </>
  );
}