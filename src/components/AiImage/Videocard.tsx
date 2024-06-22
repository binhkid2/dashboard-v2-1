
import { CardBody, CardContainer, CardItem } from "../aceternity-ui/Card3dCardContainer";

export function VideoCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto  h-auto rounded-xl p-6 border  ">
       
      <CardItem translateZ="100" className="w-full mt-4">
          <img
            src='https://bold.vn/wp-content/uploads/2019/05/bold-academy-5.jpg'
            className="p-4 h-40  lg:h-60 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="VideoCard"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-base md:text-xl  font-bold  dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 dark:text-neutral-300 "
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
       



        <div className=" md:flex justify-between my-2 lg:m-5 ">
        <CardItem
            translateZ={20}
            as='a'
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className=" flex items-center flex-row justify-center md:justify-start"
          >
            <div className="font-semibold ">~600đ/</div>
			<div className="text-sm opacity-70">1 hình ảnh </div>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-2  py-2 md:py-3 border  w-full md:w-1/2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           Try now →
          </CardItem>
	</div>
      </CardBody>
    </CardContainer>
  );
}
