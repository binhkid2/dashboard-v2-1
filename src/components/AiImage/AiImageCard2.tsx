export function AiImageCard2(){
    return(
        <>
        <div className="card  mx-auto border rounded-lg">
	<img src='https://bold.vn/wp-content/uploads/2019/05/bold-academy-5.jpg' alt='' className="p-4 h-40  lg:h-60 w-full object-cover rounded-3xl" />
	<hr />

	<div className="flex justify-between items-center p-4">
		<div>
			<b>AI Image 1</b>
			<p className="text-xs opacity-70">Powered by AI </p>
		</div>
		<p className="badge variant-ghost-tertiary">50% OFF</p>
	</div>
	<hr />
	<div className="p-4 border-t border-surface-300-600-token space-y-4">
		<div className="flex justify-between "> 
			<p className="uppercase opacity-70 font-bold text-sm">Infomation</p>
			<button className="text-red-500"><i className="fa-regular fa-heart"></i> </button>
		</div>
		<div className="">
			<p className="p">Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
#FrontendWithZoey 💻</p>
		</div>
	</div>
	<hr />
	<div className=" md:flex justify-between m-2 lg:m-5 ">
		<div  className="flex items-center flex-row justify-center md:justify-start">
			<div className="font-semibold ">600/</div>
			<div className="text-sm opacity-70">1 hình ảnh </div>
		</div>
		<button className="px-2  py-2 md:py-3 border rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold  w-full md:w-1/2"> Thử ngay</button>
	</div>
</div>
        </>
    )
}