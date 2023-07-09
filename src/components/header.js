import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return <nav class="pt-[40px] pb-[40px] sm:relative sm:z-[10] bg-opacity-[100%] bg-[white]" data-animation-load="uysc7ow1q" data-animation-id-uysc7ow1q="" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
      <div class="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
        <div class="flex items-center justify-between">
            <Link class="text-[#000000] focus:outline-none text-[16px] hover:underline" to="/" current="">Caleb Hester</Link>
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} class="sm:overflow-hidden sm:flex sm:flex-col sm:h-[16px] hidden sm:cursor-pointer" id="toggle-menu" data-animation-click="dwvda6fx0"> <span class="text-[14px] sm:text-[16px] sm:leading-[16px]" data-animation-id-851zn9088="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>Menu</span><span class="text-[14px] sm:text-[16px] sm:leading-[16px]" data-animation-id-c2jqep3q5="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>Close</span></div>
            <div class="flex items-center gap-[32px] sm:hidden">
              <Link class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/about">About Me</Link> 
              <Link class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/contact">Contact</Link> 
              <Link class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" to="/service-description">Service Description</Link>
              <Link class="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-opacity-[100%] text-[white] bg-[#0147AA] bg-opacity-[100%] duration-75 transform hover:scale-[1.05]" target="_blank" to="https://form.feathery.io/to/PNd9AV"><span>Free 15-minute consult</span></Link>
            </div>
            <div class="sm:absolute sm:top-[100%] sm:right-[0px] sm:left-[0px] sm:pb-[44px] sm:bg-[white] sm:z-[100] sm:bg-opacity-[100%] sm:border-b-[1px] sm:border-[black] sm:border-opacity-[10%] hidden sm:block bg-[white]" id="menu" style={{display: mobileMenuOpen ? 'block' : 'none'}}>
              <div class="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
                  <div class="flex items-center gap-[32px] sm:flex sm:flex-col sm:items-end"><a class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" href="https://naclcaleb.ycode.site/about">About Me</a> <a class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" href="https://naclcaleb.ycode.site/work">Work</a> <a class="text-[#000000] focus:outline-none text-[16px] font-normal antialiased hover:underline current:underline" href="https://naclcaleb.ycode.site/blog">Blog</a></div>
              </div>
            </div>
        </div>
      </div>
  </nav>
}

export default Header
