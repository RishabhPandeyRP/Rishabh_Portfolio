import { useEffect } from "react";

const ModalProject = ({closeModal}:any)=>{
    useEffect(()=>{
        document.body.style.overflowY = "hidden"
        document.body.style.overflowX = "hidden"

        return(()=>{
            document.body.style.overflowY = "scroll"
            document.body.style.overflowX = "scroll"
        })
    })
    return(
        <div className="absolute top-0 w-[100vw] h-[100vh] border border-red-500 flex justify-center items-center bg-black/20 backdrop-blur-lg" onClick={closeModal}>
            <div className="w-[50%] h-[40%] border bg-white">
                serfewf
            </div>
        </div>
    )
}

export default ModalProject;