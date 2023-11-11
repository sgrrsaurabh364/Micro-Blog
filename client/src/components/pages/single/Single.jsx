import "./single.css"
import Sidebar1 from "../../sidebar/Sidebar1";
import Singlepost from "../../singlepost/Singlepost";


  
 export default function Single() {
  return (
    <div className="single">
    <Singlepost/>
      <Sidebar1 />
    </div>
  );
}
