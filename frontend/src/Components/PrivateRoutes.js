import { Outlet, Navigate } from "react-router-dom";


export default function PrivteRoutes()
{

let auth = {'token':true};

return(
    auth.token ? <Outlet/> : <Navigate to='/History'/>
)

}