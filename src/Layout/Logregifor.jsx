import { Outlet } from "react-router-dom";
import Lrgfooter from "../Component/Lrgfooter";
import Lrgnavbar from "../Component/Lrgnavbar";

const Logregifor = () => {
    return (
        <div>
           <Lrgnavbar/>
             <Outlet/>
           <Lrgfooter/>
        </div>
    );
};

export default Logregifor;