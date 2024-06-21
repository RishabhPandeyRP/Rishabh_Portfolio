import ContactForm from "./ContactForm";

//@ts-ignore
const Contact = ({theme}) => {
    return (
        theme == "light" ? <div id="contacts" className=" border-red-700">
        <div className=" mt-36 xs:mt-20">
            <p className=" w-fit mx-auto font-sans text-5xl font-semibold mt-10 my-6 xs:text-2xl">
                CONTACT
            </p>

            <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto -mt-2 mb-3">

            </div>

            <p className=" w-[60%] mx-auto my-5 text-xl text-center xs:text-sm">
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </p>
        </div>

        <div>
            <ContactForm theme={theme}></ContactForm>
        </div>
    </div>
    :
    <div id="contacts" className="border border-[#1A191D] bg-[#1A191D] text-sky-50">
            <div className=" mt-36 xs:mt-20">
                <p className=" w-fit mx-auto font-sans text-5xl font-semibold mt-10 my-6 xs:text-2xl">
                    CONTACT
                </p>

                <div className=" w-[50px] h-[7px] rounded-lg bg-[#7843E9] mx-auto -mt-2 mb-3">

                </div>

                <p className=" w-[60%] mx-auto my-5 text-xl text-center xs:text-sm">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
            </div>

            <div>
                <ContactForm theme={theme}></ContactForm>
            </div>
        </div>
    )
}

export default Contact;