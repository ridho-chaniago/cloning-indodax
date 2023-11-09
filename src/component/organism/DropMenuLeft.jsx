import DropBarLeftList from "../Molecule/DropBarLeftList"
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { Seru, Chart, } from "../../assets/svg";

export function DropMenuLeft() {
    return (
        // <div className="w-[60px]  flex border flex-col fixed h-full left-0 pt-16">
        <div className="flex flex-col bg-white P-3 " >
            <p className="ml-3 text-slate-400 text-[10px] text-sm p-3 px-2">NAVIGASI</p>
            <DropBarLeftList classnamebtn="bg-[#0084b6]" classname="bg-none text-white font-mediun  flex text-[14px] gap-2" text="Marketplace" ><Chart classname="fill-white" /></DropBarLeftList>
            <DropBarLeftList classname="bg-none text-black font-medium  flex text-[14px] gap-2 pr-1" text="Earn" ><Seru classname="w-3" />Earn</DropBarLeftList>
            <DropBarLeftList classname="bg-none text-[#0084b6] font-medium  flex text-[14px] gap-2"  icon={faFlagCheckered}><span className="text-black">Kompetisi Trading</span></DropBarLeftList>
            <DropBarLeftList classnamebtn="" classname="bg-none text-black font-medium  flex text-[14px] gap-2" text="Informasi" ><span className="font-extrabold text-[#0084b6] pr-3">i</span></DropBarLeftList>

        </div>
    )
}