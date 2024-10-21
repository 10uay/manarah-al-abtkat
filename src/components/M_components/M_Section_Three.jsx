import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  motion,
  container,
  leftCard,
  rightCard,
  middleImage,
} from "@/utils/framer_motion_vars";

export default function M_Section_Three({ info }) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 items-center px-3"
    >
      <div className={`rounded-[3rem] lg:order-${info?.dir}`}>
        <motion.img
          variants={middleImage}
          src={info?.img}
          width="595"
          height="521"
          alt={t(info?.title)}
          loading="lazy"
          sizes="(max-width: 768px) 400px, 500px"
          className="max-h-[595px] mx-auto object-contain !rounded-[3rem]"
        />
      </div>
      <div className="lg:order-1 space-y-5">
        <h2 className="text-2xl lg:text-3xl lg:leading-[2.4rem] text-text font-semibold leading-[2.5rem] capitalize">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h2>
              <strong style={{ color: "rgb(0, 0, 0)" }}>
                {t(info?.title)}
              </strong>
            </h2>
          </BoxReveal>
        </h2>
        <div className="text-text-light max-w-[500px]">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <p>
              <span
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(14, 16, 26)",
                }}
              >
                {t(info?.para)}
              </span>
            </p>
          </BoxReveal>
          <p>
            <br />
          </p>
          {info?.features?.map(({ title, para }, index) => (
            <motion.p key={index} variants={leftCard}>
              <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                <strong
                  style={{
                    backgroundColor: "transparent",
                    color: "#044572",
                  }}
                >
                  {t(title)}{" "}
                </strong>
              </BoxReveal>
              <span
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(14, 16, 26)",
                }}
              >
                {t(para)}{" "}
              </span>
            </motion.p>
          ))}
          <p>
            <br />
          </p>
        </div>
        <motion.div variants={middleImage}>
          <WhatsAppButton text="get-service-now" />
        </motion.div>
      </div>
    </motion.div>
  );
}
