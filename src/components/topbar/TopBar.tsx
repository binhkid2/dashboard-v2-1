import { useAtomValue } from "jotai";
import { NotificationIcon } from "./icons/NotificationIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { ToggleHamburger } from "./icons/ToggleHamburger";
//import { UserIcon } from "./icons/UserIcon";
import { userInfoStore } from "../../store";

export function TopBar() {
  const userInfo = useAtomValue(userInfoStore)
  return (
     <header className="relative z-10 h-16 w-full items-center md:h-20 ">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="container relative left-0 flex w-3/4">
            <ToggleHamburger />
           <SearchIcon/>
          </div>
          <div className="relative ml-5 flex w-9/12 items-center justify-end p-1 sm:right-auto sm:mr-0 md:w-1/4">
           
           <NotificationIcon/>
           <img src={userInfo.avatar} alt="user" className="h-6 w-6 object-cover "/>
          </div>
        </div>
      </div>
    </header>
  );
}
