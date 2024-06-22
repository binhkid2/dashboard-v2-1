export function UserIcon(){
  const userImg= import.meta.env.VITE_DEFAULT_USER_IMAGE;
    return (<>
     <span className="relative block pl-5">
              <img
                alt="User"
                src={userImg}
                className="mx-auto h-10 w-10 rounded-full object-cover "
              />
            </span>
    </>)
}