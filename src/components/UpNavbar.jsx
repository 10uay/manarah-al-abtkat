import {
  FaFacebook,
  FaTiktok,
  RiTwitterXFill,
  FaLinkedinIn,
  FaInstagram,
} from "../utils/Imports";
import Dropdown_Lang from "./Dropdown_Lang";

export default function UpNavbar({ hide }) {
  return (
    <>
      <div
        className={`bg-lite_color_UPnavbar p-2 ${
          hide && "hidden"
        }  relative z-50 md:block`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            {/* phone number */}
            <div className="gap-2 items-center hidden md:flex">
              <a
                href="tel:+966500473509"
                title="+966500473509"
                className="flex gap-1 items-center text-sm"
              >
                <img
                  src="/images/saudi-arabia-flag-icon.svg"
                  alt="KSA flage"
                  width="25px"
                  height="15px"
                  className="rounded-sm"
                />
                <bdi>+966 500473509</bdi>
              </a>
            </div>

            <div className="flex gap-1 items-center text-primary">
              <Dropdown_Lang />{" "}
              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="flex w-8 h-8 justify-center rounded-full border gap-1 items-center text-sm text-main_color"
                aria-label="tik tok"
                title="tik tok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex w-8 h-8 justify-center rounded-full border gap-1 items-center text-sm text-main_color"
                aria-label="facebook"
                title="facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                className="flex w-8 h-8 justify-center rounded-full border gap-1 items-center text-sm text-main_color"
                aria-label="X"
                title="X"
              >
                <RiTwitterXFill />
              </a>
              {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                className="flex w-8 h-8 justify-center rounded-full border gap-1 items-center text-sm text-main_color"
                aria-label="linkedin"
                title="linkedin"
              >
                <FaLinkedinIn />
              </a> */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex w-8 h-8 justify-center rounded-full border gap-1 items-center text-sm text-main_color"
                aria-label="instagram"
                title="instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
