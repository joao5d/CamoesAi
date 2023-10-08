import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import { ClockIcon, AcademicCapIcon, CloudIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPage1 from "@/assets/BenefitsPage1.jpg"
import BenefitsPage2 from "@/assets/BenefitsPage2.jpg"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <ClockIcon className="h-6 w-6" />,
        title: "Less Time Comsuming",
        description: "Save Time and Create Masterpieces: Discover the Efficiency of AI Generator for Stunning Artwork!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Easy To Learn",
        description: "Embrace Simplicity: Unlock Your Creative Potential with AI Generator's User-Friendly Approach to Incredible Art!"
    },
    {
        icon: <CloudIcon className="h-6 w-6" />,
        title: "Everithing Is Possible",
        description: "Breaking Barriers: AI Generator Makes the Impossible Possible, Fueling Your Artistic Journey!",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section id="benefits" className="mx-auto min-h-full w-5/6 py-10">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div className="mt-10 items-center justify-between gap-10 md:mt-28 md:flex" initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}>
                <div>
                    <Htext>Discover the Transformative Benefits of Learning Image Generator <span className="text-red-350">AI</span></Htext>
                    <p className="my-5 ">
                        In today's digital age, learning about Image Generator AI can be a game-changer, opening up a world of possibilities and
                        bringing numerous benefits. Firstly, it empowers you to create visually stunning images with ease, regardless of your
                        artistic background. The AI's ability to transform your prompts into breathtaking visuals is truly remarkable.<br /><br />
                        Additionally, understanding Image Generator AI opens doors to various industries and career opportunities. From graphic
                        design to marketing and content creation, the demand for professionals skilled in AI-generated images is rapidly growing.
                        It gives you a competitive edge and positions you at the forefront of innovation.<br /><br />
                        Moreover, exploring Image Generator AI allows you to tap into your creativity and experiment with unique visual concepts.
                        It encourages you to think outside the box, pushing the boundaries of traditional art and enabling you to express your
                        ideas in new and exciting ways.<br /><br />
                        Lastly, as AI technology continues to advance, staying up-to-date with Image Generator AI ensures you stay relevant in
                        an ever-evolving digital landscape. It equips you with a valuable skill set that will remain in high demand for years
                        to come.<br /><br />
                        Embrace the benefits of learning about Image Generator AI and embark on a transformative journey where imagination
                        and technology unite to create extraordinary art.
                    </p>
                </div>
                {/* GRAPHIC */}
                <img
                    className="mx-auto w-2/5 md:w-1/5"
                    alt="benefits-page-graphic"
                    src={BenefitsPage1}
                />
            </motion.div>
            {/* BENEFITS */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-14"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto w-4/5 md:w-3/5"
                    alt="benefits-page-graphic-2"
                    src={BenefitsPage2}
                    style={{ transform: 'scaleX(-1)' }}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <Htext>
                                Embrace the Power of Image Generator {" "}
                                    <span className="text-red-350">AI</span>!
                                </Htext>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="my-10">
                        By understanding how to communicate your vision effectively, you can harness the full potential of this 
                        powerful tool. Craft prompts that inspire stunning visuals, captivating artwork, and professional graphics. 
                        <br/><br/> Learning the art of prompts empowers you to bring your imagination to life, creating visually 
                        striking images that leave a lasting impact.<br/><br/>Dive into the world of prompts and unlock the true 
                        power of Image Generator AI today.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits