/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"

import Header from "./header"

import "../styles/main.css"
import "../styles/other.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
      <footer>
        <section className="sm:pb-[60px] sm:pt-[60px] bg-opacity-[100%] pt-[50px] pb-[50px] bg-[#f4f4f5]">
          <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px] flex justify-center sm:flex-col sm:items-center">
            <h1 className="font-bold mr-[30px] text-opacity-[100%] text-[#18181b] sm:text-[20px] sm:mb-[10px] md:self-center md:text-[24px] lg:text-[24px] lg:self-center xl:text-[24px] xl:self-center text-[24px] self-center">
              {" "}
              Ready to dive in?{" "}
            </h1>
            <a
              className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-opacity-[100%] bg-opacity-[100%] rounded-[12px] text-[black] bg-[#0147AA] duration-75 transform hover:scale-[1.05]"
              target="_blank"
              href="https://form.feathery.io/to/PNd9AV"
            >
              <span className="font-bold text-[20px] text-[white] text-opacity-[100%]">
                Get a free consultation
              </span>
            </a>
          </div>
        </section>
        <section className="pt-[40px] pb-[40px] mt-[AUto] bg-[#0147AA] bg-opacity-[100%]">
          <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
            <div className="flex items-center justify-between sm:flex-col sm:justify-center sm:gap-[20px]">
              <div className="flex flex-col text-[white] text-opacity-[100%]">
                <span className="text-[16px] sm:text-center">Caleb Hester</span>{" "}
                <span className="text-[12px] opacity-[50%] sm:text-center">
                  2023 © All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Layout
