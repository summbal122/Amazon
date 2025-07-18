import { footerSections, footerButtons } from "../data";
import FooterButton from "./FooterButton";
import { Link as ScrollLink } from "react-scroll"
const AboutFooter = () => {
  return (
    <div className=" bg-navy-light text-white">
    <div className="w-full grid place-items-center pb-10">
        <div className="bg-navy-lighter w-full text-center py-4 text-xs 2xl:text-xl hover:bg-white/30 mb-8 hover:cursor-pointer">
        <ScrollLink smooth={true} duration={1000} to="top-section">
        Back to top
        </ScrollLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12 w-11/12 lg:w-9/12 mb-10">
        {footerSections.map((section, index) => (
          <div key={index}>
          <h1 className="font-bold mb-3 text-sm lg:text-lg">{section.heading}</h1>
          <ul className="space-y-2">
            {section.links.map((item, idx) => (
              <li key={idx} className="text-xs xl:text-sm 2xl:text-lg text-gray-200 hover:cursor-pointer hover:underline">{item}</li>

            ))}
          </ul>
          </div>
        ))}
      </div>
     <hr className="my-4 border-gray-600 w-full" />

    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">

    <img className="w-18 2xl:w-24 hover:cursor-pointer "
      alt="Amazon logo"
      src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"   />

    <div className="flex gap-2 flex-wrap justify-center">
    {footerButtons.map((btn, index) => (
      <FooterButton key={index} data={btn} />
    ))}
  </div>
</div>

    </div>
    </div>
  )
}

export default AboutFooter
