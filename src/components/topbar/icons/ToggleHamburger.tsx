import { useDashboardContext } from "../../Provider";

export function ToggleHamburger(){
    const { openSidebar } = useDashboardContext();
return (
    <>
    <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={openSidebar}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
    </>
)
}