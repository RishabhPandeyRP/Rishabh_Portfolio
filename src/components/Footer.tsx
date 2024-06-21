import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import youtube from "../assets/youtube (1).png"

const Footer = () => {
    return (
        <div className="  bg-black h-fit border border-black w-[100%]">
            <div className=" lg:w-fit xl:w-[1200px] sm:w-fit  bg-black flex mx-auto justify-around  border-red-500 ">
                <div className="lg:w-[600px]  px-9 py-3  border-green-600 sm:w-[400px] xs:hidden sm:block lg:block xl:block">
                    <p className=" text-2xl font-semibold mt-16 text-slate-200">
                        Rishabh pandey
                    </p>

                    <p className=" mb-5 mt-5 text-slate-200">
                        A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                    </p>
                </div>

                <div className="lg:w-fit xl:w-[600px] px-9 py-3  border-green-600 sm:w-fit xs:-mt-9">
                    <p className=" text-2xl font-semibold mt-16 text-slate-200 w-fit mx-auto">
                        Social
                    </p>

                    <div className="flex gap-5 mt-6 w-fit mx-auto">
                        <a href="https://www.linkedin.com/in/rishabh-pandey-68683222b/" target="_blank"><img src={linkedin} alt="" className=" w-[40px] h-[40px]" /></a>

                        <a href="https://github.com/RishabhPandeyRP" target="_blank">

                            <img src={github} alt="" className=" w-[40px] h-[40px]" />
                        </a>

                        <a href="https://www.youtube.com/@codeschoolrpj" target="_blank">
                            <img src={youtube} alt="" className=" w-[40px] h-[40px]" />
                        </a>


                    </div>


                </div>

            </div>

            <hr className=" lg:w-[60%] xl:w-[1200px] mx-auto my-3 sm:w-[600px]" />

            <div className=" text-slate-200 text-xs my-3  border-green-500 w-fit mx-auto">
                created by - Rishabh Pandey
            </div>

        </div>
    )
}

export default Footer;