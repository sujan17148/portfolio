import { useLocation, useParams, useSearchParams } from "react-router-dom";
export default function Details(){
    const {id}=useParams()
   const location=useLocation()
   const param=new URLSearchParams(location.search)
   return <>
   <h1>hello from useLocation {param.get("id")}</h1>
   <h1>hello from useParam{id}</h1>
   </>
}