import { footerSections, footerButtons } from "../data";
import FooterButton from "./FooterButton";
const AboutFooter = () => {
  return (
    <div className=" bg-navy-light text-white">
    <div className="w-full grid  place-items-center pb-10">
      <div className="bg-navy-lighter w-full text-center py-4 text-xs hover:bg-white/30 mb-8 hover:cursor-pointer">Back to top</div>
      <div className="grid grid-cols-4 gap-12 w-9/12 mb-10">
        {footerSections.map((section, index) => (
          <div key={index}>
          <h1 className="font-bold mb-3">{section.heading}</h1>
          <ul className="space-y-2">
            {section.links.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-200 hover:cursor-pointer hover:underline">{item}</li>

            ))}
          </ul>
          </div>
        ))}
      </div>
     <hr className="my-4  border-gray-600 w-full" />

    <div className="flex items-center gap-12">

    <img className="w-18 hover:cursor-pointer "
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
