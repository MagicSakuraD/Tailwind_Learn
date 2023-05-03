import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { ReactNode } from "react"; // import ReactNode

// create an interface for your props
interface SideBarIconProps {
  icon: ReactNode;
  text?: string;
}

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-primary text-secondary">
      <SideBarIcon icon={<FaFire size="28" />} />
      {/* <Divider /> */}
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      {/* <Divider /> */}
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

// add the type annotation for your props
const SideBarIcon = ({ icon, text = "tooltip 💡" }: SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
