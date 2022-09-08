import "./Component.scss"
import {ImHome2, ImHistory } from 'react-icons/im';
import { FiPlusCircle} from 'react-icons/fi/index'
import { useNavigate } from "react-router-dom";
export default function TabBar() {
  const navigate = useNavigate();
  return (
    // This component is used for navigating to, homepage, add new page and habits page.
    <div className='tab-bar'>
      <ImHome2 className="text-blue-400 text-3xl cursor-pointer"  onClick={() => navigate("/")}/>
     < FiPlusCircle className="text-blue-400 text-5xl -mt-6 cursor-pointer" onClick={() => navigate("/add-new")} />
      <ImHistory className="text-blue-400 text-3xl cursor-pointer" onClick={() => navigate("/all-history")}/>
    </div>
  )
}
