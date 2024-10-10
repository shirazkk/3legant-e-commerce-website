export default function GetInTouch(){
  
    return(
        <div className="w-full h-auto flex justify-center items-center">
     
      <div className="flex justify-between w-[80%] gap-10 ">
       <div>
        <form>
            <label className=" font-semibold text-customGrayBlue">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"

            className="border-2 p-2 w-full my-3 rounded-md placeholder:pl-2 placeholder:text-lg"
          />
          <label className=" pt-3 font-semibold text-customGrayBlue">Email Address</label>
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 p-2 w-full my-3 rounded-md placeholder:pl-2 placeholder:text-lg"
          />
          <label className=" font-semibold text-customGrayBlue">Message</label>
          <input
            type="text"
            placeholder="Your message"
            className=" border-2 p-2 w-full h-[180px] mt-3 rounded-md placeholder:pl-2 placeholder:text-lg"
          />
          <button
            type="submit"
            className="bg-black text-white p-2 rounded-md w-[25%] shadow-lg mt-5"
          >
            Send Message
          </button>
        </form>
        </div>

        <div> <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4818990439977!2d144.961495!3d-37.8165365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b0b1023485%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sau!4v1616529072277!5m2!1sen!2sau"
        width="600"
        height="450"
        
        loading="lazy"></iframe></div>
      </div> 
        </div>
    )
}