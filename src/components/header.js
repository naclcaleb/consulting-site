import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return <nav className="pt-[40px] pb-[40px] relative z-[10] bg-opacity-[100%] bg-[white]" data-animation-load="uysc7ow1q" data-animation-id-uysc7ow1q="" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
        <div className="flex items-center justify-between">
            <Link className="text-[#000000] focus:outline-none text-[16px] hover:underline" to="/" current="">Caleb Hester</Link>
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="overflow-hidden flex flex-col h-[16px] sm:hidden cursor-pointer" id="toggle-menu" data-animation-click="dwvda6fx0"> <span className="sm:text-[14px] text-[16px] leading-[16px]" data-animation-id-851zn9088="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>Menu</span><span className="sm:text-[14px] text-[16px] leading-[16px]" data-animation-id-c2jqep3q5="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>Close</span></div>
            <div className="items-center gap-[32px] hidden sm:flex">
              <Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/about">About Me</Link> 
              <Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/contact">Contact</Link> 
              <Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/service-description">Service Description</Link>
              <a className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-opacity-[100%] text-[white] bg-[#0147AA] bg-opacity-[100%] duration-75 transform hover:scale-[1.05]" target="_blank" href="https://form.feathery.io/to/PNd9AV"><span>Free 15-minute consult</span></a>
            </div>
            <div className="absolute top-[100%] right-[0px] left-[0px] pb-[44px] bg-[white] z-[100] bg-opacity-[100%] border-b-[1px] border-[black] border-opacity-[10%] sm:hidden block sm:bg-[white]" id="menu" style={{display: mobileMenuOpen ? 'block' : 'none'}}>
              <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] pr-[24px] pl-[24px] max-w-[1200px]">
                  <div className="flex gap-[32px] flex-col items-end"><Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/about">About Me</Link> <Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/contact">Contact</Link> <Link className="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/service-description">Service Description</Link></div>
              </div>
            </div>
        </div>
      </div>
  </nav>
}

export default Header
