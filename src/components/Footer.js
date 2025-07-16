import { amazonFooterLinks, copyrightText } from "../data"
import AboutFooter from "./AboutFooter"

const Footer = () => {
  return (
      <div>
        {/* About section of Footer */}
        <AboutFooter/>

        {/* Footer */}
      <div className="bg-navy-blue text-white w-full py-8 grid place-items-center">
        <div className=" grid grid-cols-7 gap-x-8 gap-y-4 w-9/12 mb-4"> 
        {amazonFooterLinks.map((link, index) => { 
          return (
          <div className="text-xs hover:underline hover:cursor-pointer" key={index}>
          <h1>{link.title}</h1>
          <span className="text-gray-dark">{link.description} </span> </div>  )
        })}
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">{copyrightText}</p>
      </div>
</div>
  )
}

export default Footer
