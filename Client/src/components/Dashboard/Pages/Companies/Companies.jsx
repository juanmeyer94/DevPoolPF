import { useEffect } from "react";

const CompaniesDash =  ({ setSelectedLink, link }) => {
 useEffect(() => {
   setSelectedLink(link);
 }, []);

 return(
  <>
 
  <div>Empresas</div>
  
  </>
 )
 
 }
 
 export default CompaniesDash;