export function NotificationIcon(){
    return (
        <>
         <span className="relative block rounded px-3 py-2 text-white">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </span>
              <span className="absolute right-0 top-0 rounded-full bg-blue-700 px-2 py-0.5 text-xs font-bold">
                3
              </span>
            </span>
        </>
    )
}