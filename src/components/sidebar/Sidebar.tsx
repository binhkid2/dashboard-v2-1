import css from "./sidebar.module.css"
import { SidebarItems } from "./SidebarItems";
import { SidebarHeader } from "./SidebarHeader";
import { useDashboardContext } from "../Provider";
import { SideBarFooter } from "./SideBarFooter";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  close: "hidden",
  container: "pb-32 lg:pb-6",
  open: "w-8/12 absolute z-40 sm:w-5/12 ",
  default:
    "bg-gray-200  h-screen overflow-y-auto top-0 lg:bg-transparent lg:block lg:relative lg:w-64 lg:z-auto",
};

export function Sidebar({ mobileOrientation }: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
         ${style.mobileOrientation[mobileOrientation]} 
         ${sidebarOpen ? style.open : style.close} ${css.sidebar}`}
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
        <SideBarFooter/>
      </div>
    </aside>
  );
}