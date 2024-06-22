//import { AiImageCard } from "../../components/AiImage/Card";
import { AiImageCard1 } from "../components/AiImage/AiImageCard1";


export default function AiImage() {
  return <>
 <div className="w-full   grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4   gap-2 md:gap-4 lg:gap-8 grid-flow-row px-3 lg:px-10 py-3 lg:py-10 ">
             <AiImageCard1/>
           <AiImageCard1/>
           <AiImageCard1/>
           <AiImageCard1/>
           <AiImageCard1/>
           <AiImageCard1/>
      </div>  

    
  </>;
}