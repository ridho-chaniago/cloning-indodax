import DropBarLeftList from "../Molecule/DropBarLeftList"
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { Seru, Chart, } from "../../assets/svg";

export function NavLeft(){
    return(
        <div className=" w-[60px]  flex border flex-col fixed h-full bg-white left-0 pt-16">

                <DropBarLeftList classnamebtn="bg-[#0084b6]" classname="bg-none" ><Chart classname="fill-white" /></DropBarLeftList>
                <DropBarLeftList ><Seru classname="w-3" /></DropBarLeftList>
                <DropBarLeftList icon={faFlagCheckered}></DropBarLeftList>
                <DropBarLeftList classname="font-extrabold ">i</DropBarLeftList>

            </div>
    )
}