import { LogoIcon } from "../../lib/Reused/LogoIcon";



export function SidebarHeader() {
  return (
    <div className="flex h-20 items-center justify-start pl-4 md:pl-8">
     
				<a className=" overflow-hidden mr-1"   href='/'  title="Go to Homepage">
					<LogoIcon />
				</a>
    </div>
  );
}