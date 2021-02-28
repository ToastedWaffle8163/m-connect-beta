import Button from "./Button";

const Home = () => {

  return (    
    <div className="self-center flex flex-col items-center">
      <div className="self-auto text-7xl"><p>Find A </p></div>
      <p>Mentor</p>

      <div className="items-center">
      <p>
        Get Professional Guidance <br/>
        for your passion
      </p>
      </div>

      <Button text="Try it Out Now" color="pink-700" textColor="white"/>

    </div>
  )
}

var pageDetails = {
  location: "/",
  pageName: "Home",
  component: Home,
}


export { pageDetails }
export default Home
