import Button from "../components/button";
export default function SignIn() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* left */}
      <div className="h-full w-[40%] bg-gray-100 flex justify-center items-center flex-col">
        <img className=" w-[33rem] drop-shadow-sofa-down" src="/assists/sign-up/sofa.png" alt="" />
        <img  className="absolute text-center font-semibold  top-10" src="/assists/3legant..png" alt="" />
      </div>
      {/* right */}
      <div className="h-full w-[60%] flex justify-center items-center flex-col gap-3">
        {/* sign-up-box */}
        <div className=" h-[620px] w-[75%] flex justify-center items-start flex-col ">

          <div className="w-full ">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p className="py-5 text-customGrayBlue ">
            Don’t have an accout yet? {" "}
              <a className="text-green-400 hover:text-green-500" href="#">Sign Up</a>{" "}
            </p>
          </div>

           <div className="flex justify-center items-center flex-col w-full">
              <input className="focus:px-2 w-full py-5 border-b-2 focus:rounded-md text-customGrayBlue " type="text" name="name" placeholder="Your Username or email address" />
              <div className="w-full flex justify-between items-center ">
              <input className="focus:px-2 w-full py-5 text-customGrayBlue focus:rounded-md border-b-2" type="text" name="name" placeholder="Password" />
              <img className="relative right-8 cursor-pointer" src="/assists/sign-up/eye.png" alt="" />
              </div>
              <div className="flex gap-2 py-5 w-full justify-between">
                <div className="flex gap-3 justify-center items-center">
              <input className="scale-150 mx-1 cursor-pointer" type="checkbox" name="checkbox"  />
              <p className="text-customGrayBlue font-medium">Remember me</p>
              </div>
               <p className="font-bold hover:text-gray-500 cursor-pointer">Forgot password?</p>
              </div>
            <div className="w-full">
              <Button text="Sign In"/>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
