import React from "react";
import Logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { GiJourney } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import {FaAngleRight} from "react-icons/fa6";
import { FiUser } from "react-icons/fi";

const Sidebar = () =>{
  return (
    <>
    <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
      
      <div className="logoWrapper py-3 px-4">
        <img src={Logo} className="w-100"/>
      </div>
      
      
      

      <div className="sidebarTabs px-2 flex gap-2 flex-col mt-4">
        <Button className=" active"><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><MdOutlineDashboard />
        </span>Dashboard</Button>



        <Button className="w-100"><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><GiFarmer/>
        </span>
        My Farm
        <span className="arrow mx-auto "><FaAngleRight/></span>
        </Button>


        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><MdDataSaverOff />
        </span>Saved Data</Button>


        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><GiJourney />
        </span>My Farming Journey</Button>


        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><CiShoppingCart />
        </span>FarmKart</Button>


        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><LiaRupeeSignSolid />
        </span>Price Chart</Button>

        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><FiUser />
        </span>Login</Button>


        <Button className=""><span className="icon  pt-1 w-[30px] h-[30px] flex item-center justify-center rounded-md"><FiUser />
        </span>sign Up</Button>

      </div>
 



    </div>
    </>
  )
}
export default Sidebar;