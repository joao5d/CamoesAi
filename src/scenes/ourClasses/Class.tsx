import { SwiperSlide } from "swiper/react";

type Props = {
  positivePrompt: string;
  negativePrompt?: string;
    image: string;
}

const Class = ({positivePrompt, negativePrompt, image}: Props) => {
  
    const overlayStyles = `p-5 absolute z-28 flex h-full w-full flex-col
        item-center justify-center whitespace-normal bg-red-400 text-center
        text-white opacity-0 transition duration-500 hover:opacity-90`;
  
  return <SwiperSlide>
    <div className={overlayStyles}>
        <p><span className="font-semibold text-red-950 text-xl">Prompt:</span> {positivePrompt}</p> 
        {negativePrompt ? <p><span className="font-semibold text-red-950 text-xl">Negative Prompt: </span>{negativePrompt}</p> : ''}
    </div>
    <img alt={`${image}`} src={image} />
  </SwiperSlide>
}

export default Class