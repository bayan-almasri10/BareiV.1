import SelectForm from "@/components/Signup/selectForm";
import Image from "next/image";
import log from "../../../public/images/log.png";
import { signUp } from "@/lib/getters";
export default function Form() {

  return (
      <div className="flex my-20">
        <SelectForm signUp={signUp}/>
      <div className="login mt-auto">
        <div className="container text-center">
          <h1 className="text-4xl">مرحبا بكم في عالم بارع</h1>
          <p className=" text-xl text-gray-400 mt-8">
            استمتع بتجربة تسوق فريدة بمنتجات صنعت بحب
          </p>
        </div>
        <Image 
           src={log} 
           className="placeholder='blur' mx-5" 
           alt="" 
        />
      </div>
    </div>
  );
}