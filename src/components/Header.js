import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const Header = ({pageList, companyName}) => {
  var btnBg = "pink-700"
  var btnTextColor = "white"
  const pathname = useLocation().pathname;

  var pageLinks = pageList.map(page =>{
    // if(pathname !== page.location){
      return (
        <div className="p-2 text-white">
          <Link to={page.location}>{page.pageName}</Link>
        </div>)
    // }
  })

  // var pageLinks2 = pageList.filter(page => {
  //   if(pathname !== page.location){
  //     return(
  //       <div className="p-2 text-white">
  //         <Link to={page.location}>{page.pageName}</Link>
  //       </div>
  //     )
  //   }
  // })

  return (
    <div className="bg-pink-400 h-20 flex content-center sticky top-0">
      <img src="./images/mconnectlogo.png" alt="mconnectlogo" className="h-16 m-2 self-center" />
      <p className="text-white text-5xl self-center p-1">{companyName}</p>
      
      <div className="self-center my-3 ml-auto text-xl text-white flex">
        {pageLinks.reverse()}
      </div>

      <div className="self-center ml-1 p-4 flex">
        <div className="p-1"><Button text="Log in" textColor={btnTextColor} color={btnBg}/></div>
        <div className="p-1"><Button text="Sign in" textColor={btnTextColor} color={btnBg}/></div>
      </div>
    </div>
  )
}

export default Header
