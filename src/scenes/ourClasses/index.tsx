import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ClassType, SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.jpg';
import image8 from '@/assets/image8.jpg';
import image9 from '@/assets/image9.jpg';
import image10 from '@/assets/image10.jpg';
import image11 from '@/assets/image11.jpg';
import image12 from '@/assets/image12.jpg';
import image13 from '@/assets/image13.jpg';
import image14 from '@/assets/image14.jpg';
import image15 from '@/assets/image15.jpg';
import image16 from '@/assets/image16.jpg';
import image17 from '@/assets/image17.jpg';
import image18 from '@/assets/image18.jpg';
import image19 from '@/assets/image19.jpg';
import image20 from '@/assets/image20.jpg';
import image21 from '@/assets/image21.jpg';
import image22 from '@/assets/image22.jpg';
import image23 from '@/assets/image23.jpg';
import image24 from '@/assets/image24.jpg';
import image25 from '@/assets/image25.jpg';
import image26 from '@/assets/image26.jpg';
import image27 from '@/assets/image27.jpg';
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from './Class';

const classes1: Array<ClassType> = [
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute kitten head, fantasy flowers splash, vintage t-shirt design, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image1
    },
    {
        positivePrompt: "STICKER, masterpiece cute dinosaur watercolor sublimation, colorful vector art, cartoon style, intricate details, highly detailed, ((White Background)) centered, 3D vector art, cute and quirky, fantasy art, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        negativePrompt: "crop, blur, extra limbs, bad proportion, bad composition, no teeth",
        image: image2
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute dog head, fantasy flowers splash, modern t-shirt design, in the style of Studio Ghibli, red and yellow flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image3
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute dragon head, fantasy splash, in the style of how to train your dragon, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image4
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute turtle  head with a litle bird on the top of the body, fantasy jungle splash, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effct, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        image: image5
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute dragon head, fantasy splash, in the style of how to train your dragon, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image6
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute kitten head, fantasy flowers splash, vintage t-shirt design, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image7
    },
    {
        positivePrompt: "STICKER, masterpiece cute dinosaur watercolor sublimation, colorful vector art, cartoon style, intricate details, highly detailed, ((White Background)) centered, 3D vector art, cute and quirky, fantasy art, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        negativePrompt: "crop, blur, extra limbs, bad proportion, bad composition, no teeth",
        image: image8
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute turtle  head with a litle bird on the top of the body, fantasy jungle splash, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effct, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        image: image9
    },
    {
        positivePrompt: "STICKER, A detailed illustration a print of vivid cute dragon head, fantasy splash, in the style of how to train your dragon, 3D vector art, cute and quirky, fantasy art, watercolor effect, hand-drawn, digital painting, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, photorealistic rendering",
        image: image10
    },
]
const classes2: Array<ClassType> = [
    {
        positivePrompt: "LOGO for a food company specialized in chocolates, white background,, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering",
        image: image11
    },
    {
        positivePrompt: "LOGO for a site about anime and manga reviews with some of characters from the most knowned animes, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and blue and orange flora pastel tetradic colors",
        negativePrompt: "cropped head, cropped hair, big head, deformed body, mutates body, extra hand, extra foot, extra hand, extra body, clone, twins, puppet, family, toys, 2 people, bad shape hand, giant, titan, inside water",
        image: image12
    },
    {
        positivePrompt: "LOGO for a food company specialized in melon and watermelons, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and orange flora pastel tetradic colors, fantasy flowers splash",
        image: image13
    },
    {
        positivePrompt: "LOGO, A detailed illustration a print of vivid cute Camões poet, fantasy flowers splash, vintage t-shirt design, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        image: image14
    },
    {
        positivePrompt: "LOGO for a IT company specialized in gaming computers, white background, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, isometric style, retro aesthetic, 4K resolution, photorealistic rendering",
        image: image15
    },
    {
        positivePrompt: "LOGO for a food company specialized in blueberries with a arara as mascote, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and orange flora pastel tetradic colors, fantasy flowers splash",
        image: image16
    },
    {
        positivePrompt: "LOGO for a smothie company specialized in romantic drinks with a cute dragon as mascote, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and light-red flora pastel tetradic colors, fantasy flowers splash",
        image: image17
    },
    {
        positivePrompt: "LOGO for a animal food company specialized in food to young kittys with a cute kitty as mascote, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and light-red flora pastel tetradic colors, fantasy flowers splash",
        image: image18
    },
    {
        positivePrompt: "LOGO for a site about anime and manga reviews with some of characters from the most knowned animes, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and blue and orange flora pastel tetradic colors",
        negativePrompt: "cropped head, cropped hair, big head, deformed body, mutates body, extra hand, extra foot, extra hand, extra body, clone, twins, puppet, family, toys, 2 people, bad shape hand, giant, titan, inside water",
        image: image19
    },
]

const classes3: Array<ClassType> = [
    {
        positivePrompt: "LOGO for a food company specialized in chocolates, white background,, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering",
        image: image20
    },
    {
        positivePrompt: "LOGO for a food company specialized in blueberries with a arara as mascote, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and orange flora pastel tetradic colors, fantasy flowers splash",
        image: image24
    },
    {
        positivePrompt: "LOGO, A detailed illustration a print of vivid cute Camões poet, fantasy flowers splash, vintage t-shirt design, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        image: image21
    },
    {
        positivePrompt: "LOGO for a smothie company specialized in romantic drinks with a cute dragon as mascote, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and light-red flora pastel tetradic colors, fantasy flowers splash",
        image: image22
    },
    {
        positivePrompt: "LOGO for a food company specialized in chocolates, white background,, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering",
        image: image23
    },
    {
        positivePrompt: "LOGO for a food company specialized in melon and watermelons, white background, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering, white and orange flora pastel tetradic colors, fantasy flowers splash",
        image: image25
    },
    {
        positivePrompt: "LOGO, A detailed illustration a print of vivid cute Camões poet, fantasy flowers splash, vintage t-shirt design, in the style of Studio Ghibli, white and orange flora pastel tetradic colors, 3D vector art, cute and quirky, fantasy art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, focused on the character, 4K resolution, photorealistic rendering, using Cinema 4D",
        image: image26
    },
    {
        positivePrompt: "LOGO for a food company specialized in chocolates, white background,, in the style of Studio Ghibli, 3D vector art, watercolor effect, bokeh, Adobe Illustrator, hand-drawn, digital painting, low-poly, soft lighting, bird's-eye view, isometric style, retro aesthetic, 4K resolution, photorealistic rendering",
        image: image27
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return <section id='ourclasses' className='w-full bg-red-100 py-28'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            {/* SWIPER STICKER */}
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-4/5'>
                    <Htext>Unleash Your Creativity with <span className="text-red-350">AI</span> "Sticker" Generation</Htext>
                    <p className='pt-6'>
                        Introducing our AI-powered Sticker Generator, a revolutionary tool that empowers you to bring your wildest ideas to life. With just a single word, you can now effortlessly create stunning stickers that perfectly encapsulate your imagination. Get ready to embark on a journey where your dreams become tangible with the power of AI.
                    </p>
                    <p className='pb-4 pt-4'>
                        Whether you're looking for cute characters, vibrant illustrations, or unique graphics, this tool can mold your ideas into captivating visuals that surpass your imagination. With a few clicks, you can experiment with various themes, styles, and moods, customizing every detail to match your artistic preferences. Gone are the days of tedious design processes or endless searches for the perfect sticker. Our AI Sticker Generator puts the power of creation in your hands.
                    </p>
                </div>
            </motion.div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                className='px-6 mt-2'
            >
                {classes1.map((item: ClassType, index) => (
                    <SwiperSlide key={`${item.positivePrompt}-${index}`}>
                        <Class
                            positivePrompt={item.positivePrompt}
                            negativePrompt={item.negativePrompt}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* SWIPER LOGO 1 */}
            <motion.div
                className='mx-auto w-5/6 mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-4/5'>
                    <Htext>Unlock Unlimited "Logo" Possibilities with <span className="text-red-350">AI</span></Htext>
                    <p className='py-5'>
                        Welcome to the world of AI Logo Generation, where creativity knows no bounds. Our advanced AI-powered system empowers you to design logos that perfectly represent your brand or vision. With a wide range of styles, from sleek and modern to playful and vibrant, you can create a logo that truly stands out from the crowd.
                        <br /><br />
                        Our AI Logo Generator simplifies the logo design process, eliminating the need for complex software or extensive design skills. Simply provide a few key details and let our intelligent algorithm work its magic. Whether you're starting a new business, launching a project, or rebranding an existing venture, our AI Logo Generator ensures you get the perfect logo that captures the essence of your identity.
                        <br /><br />
                        Customize your logo using the right props, such as fonts, colors, symbols, and layout options. Experiment with endless combinations to find the ideal representation of your brand's personality and values. Our intuitive interface allows you to preview and fine-tune your logo in real time, ensuring complete satisfaction with every element.
                        <br /><br />
                        Stand out in the market with a logo that resonates with your target audience. Whether you prefer a minimalistic approach or a bold and expressive design, our AI Logo Generator has the versatility to cater to your unique preferences. Let your creativity soar as you explore a vast library of logo options and unleash the full potential of your brand.
                    </p>
                </div>

            </motion.div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={35}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                className='px-6 mt-6'
            >
                {classes2.map((item: ClassType, index) => (
                    <SwiperSlide key={`${item.positivePrompt}-${index}`}>
                        <Class
                            positivePrompt={item.positivePrompt}
                            negativePrompt={item.negativePrompt}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* SWIPER LOGO 2 */}
            <motion.div
                className='mx-auto w-5/6 mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-4/5'>
                    <Htext>Discover Logo Possibilities</Htext>
                    <p className='py-5 '>
                        Whether you're a startup or an established business, our AI Logo Generator enables you to create professional logos without the need for design expertise.
                        <br />
                        Ready to make your mark? Explore endless logo possibilities and bring your brand to life with our AI-powered Logo Generator. Create a logo that resonates with your audience and communicates your brand's values.
                    </p>
                </div>


            </motion.div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                className='px-6 mt-6'
            >
                {classes3.map((item: ClassType, index) => (
                    <SwiperSlide key={`${item.positivePrompt}-${index}`}>
                        <Class
                            positivePrompt={item.positivePrompt}
                            negativePrompt={item.negativePrompt}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    </section>
}

export default OurClasses