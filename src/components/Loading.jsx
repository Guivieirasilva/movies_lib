import {AiOutlineLoading3Quarters} from "react-icons/ai"

import "./Loading.css"

export default function Loading (){
   return(
      <span className="loading">
         <AiOutlineLoading3Quarters className="c-loader"/>
      </span>
   )
}