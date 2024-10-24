import WhatsAppButton from "../../components/WhatsAppButton";
import {
  motion,
  container,
  leftCard,
  rightCard,
  middleImage,
} from "@/utils/framer_motion_vars";
import BoxReveal from "@/components/magicui/box-reveal";


export default function Contact_us_Intro({t}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto lg:px-20 top-header grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 mb-20 items-center bg-left mt-11"
    >
      <div className="md:!order-2">
        <motion.img
          variants={middleImage}
          width="400"
          height="400"
          src="/images/whole-world.svg"
          alt="map"
          className="mx-auto w-[300px] md:w-[400px] "
        />
      </div>
      <div className="md:!order-1 ">
        <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
          <h1 className="mb-3 text-2xl lg:text-4xl text-text font-bold max-w-[450px] animated wow fadeInUp animated lg:text-start text-center">
            {t("start-a-free-consultation")}
          </h1>
        </BoxReveal>

        <p className="text-[#737195] max-w-[270px] lg:max-w-[450px] animated wow fadeInUp animated lg:mx-0 mx-auto lg:text-start text-center">
          <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
            {t("we-conduct-a-comprehensive-study")}
          </BoxReveal>
        </p>

        <div className="mt-5 animated wow fadeInUp animated w-fit lg:mx-0 mx-auto">
          <WhatsAppButton text="Send-your-message" />
        </div>
      </div>
    </motion.div>
  );
}
