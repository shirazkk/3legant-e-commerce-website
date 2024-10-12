import LinksText from "./link";

export default function Blog() {
  return (
    <section className="flex justify-center h-auto ">
      <div className="w-full md:w-[80%] h-full overflow-hidden">
        {/* article+button */}
        <div className="flex justify-between items-center md:mx-0 mx-12 py-5 ">
          <h2 className="font-bold text-4xl py-3 px-1">Articles</h2>
          <div className="py-3 px-1 text-center">
            <LinksText texticon="More Articles" />
          </div>
        </div>
        {/* articles */}
        <div className="w-full h-full flex justify-center items-start gap-5 flex-shrink-0 flex-wrap ">
          <div className="h-[500px] ">
            <div className="bg-no-repeat bg-[url(/assists/homepage/blog-picture/img-1.png)]  bg-center  bg-cover w-[400px] h-[400px]"></div>

            <div className="mt-5  ml-4 sm:ml-0">
              <p className="text-lg font-semibold">7 ways to decor your home</p>
              <LinksText texticon="Read More" />
            </div>
          </div>

          <div className="h-[500px] ">
            <div className="bg-no-repeat bg-[url(/assists/homepage/blog-picture/img-2.png)]  bg-center  bg-cover w-[400px] h-[400px]"></div>
            <div className="mt-5  ml-4 sm:ml-0">
              <p className="text-lg font-semibold">Kitchen organization</p>
              <LinksText texticon="Read More" />
            </div>
          </div>

          <div className="h-[500px]">
            <div className="bg-no-repeat bg-[url(/assists/homepage/blog-picture/img-3.png)]  bg-center  bg-cover w-[400px] h-[400px]"></div>
            <div className="mt-5 ml-4 sm:ml-0">
              <p className="text-lg font-semibold">Decor your bedroom</p>
              <LinksText texticon="Read More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
