import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return <section id='home' className='gap-16 py-10 md:h-full md:pb-0'>
        {/* IMG AND MAIN HEADER */}
        <motion.div
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* HEADINGS */}
                <motion.div
                    className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className='relative'>
                            <img alt="home-page-text" src={HomePageText} />
                    </div>
                    <p className='mt-8 text-sm'>
                    Image AI Generator is a powerful tool that harnesses the latest advancements in artificial intelligence to transform 
                    your creative vision into stunning visuals. However, the key to obtaining exceptional results lies in using the right 
                    prompts. Choosing the perfect prompt is an art form in itself. It's crucial to provide clear and concise instructions 
                    to the AI. Our website will help providing you with tips and tricks on crafting effective prompts.
                    </p>
                </motion.div>
                {/* ACTIONS */}
                <motion.div
                    className='mt-8 flex items-center gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Try Now</ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-red-350 underline hover:text-red-700'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* IMG */}
            <div className='flex h-full basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img alt='home-pageGraphic' src={HomePageGraphic} style={{ transform: 'scaleX(-1)' }}/>
            </div>
        </motion.div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-red-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex items-center justify-between gap-8'>
                        <img alt='redbull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}
    </section>
}

export default Home;