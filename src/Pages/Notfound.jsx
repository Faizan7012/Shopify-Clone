import { useEffect } from "react";
function Notfound(){

    useEffect(()=>{
        document.title = '404 - Page Not Found'
     })
return <h1>Page Not Found</h1>


}

export default Notfound;