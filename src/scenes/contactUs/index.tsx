import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.jpg";
import Htext from "@/shared/Htext";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-red-350 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault()
        }
    }

    return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
                className="md:3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <Htext>
                    START YOUR JOURNEY WITH CAMÕES.<span className="text-red-350">AI</span> TODAY
                </Htext>
                <p className="my-5">
                    Discover a world of innovation and creativity with Camões.Ai. Contact us today to unlock the power of AI-driven solutions and unleash the full potential of your projects. Let's collaborate and shape the future together. Embrace limitless possibilities with Camões.Ai.
                </p>
            </motion.div>
            {/* FORM AND IMG */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/joao5d@hotmail.com"
                        method="POST"
                    >
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-450">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}

                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-450">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            placeholder="MESSAGE"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-red-450">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-red-350 px-20 py-3 transition duration-400 hover:text-white hover:bg-red-700"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="w-full before:absolute">
                        <img className="w-full rounded-xl" alt="contact-uspage-graphic" src={ContactUsPageGraphic} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
}

export default ContactUs