
import { Outlet } from 'react-router-dom';
import Navbarlayout from './../Component/Navbarlayout';
import Footerlayout from './../Component/Footerlayout';

const Main = () => {
    return (
        <div>
            <Navbarlayout />
             <Outlet />
            <Footerlayout />
        </div>
    );
};

export default Main;