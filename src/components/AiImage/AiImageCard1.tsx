
import { CardBody, CardContainer, CardItem } from "../aceternity-ui/Card3dCardContainer";
export function AiImageCard1() {
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]  w-auto  h-auto rounded-xl p-6 border  ">
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
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" h-40 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
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
