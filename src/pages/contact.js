import * as React from 'react'
import { Script } from 'gatsby'
import Layout from '../components/layout'

import '../dependencies/animations.js'

const Contact = () => (
    <Layout>
        <section className="pb-[80px] pt-[80px]">
            <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex justify-center">
                <div className="w-[50%]">
                <form
                    yc-form-type="Advanced"
                    method="POST"
                    action="https://hook.us1.make.com/osi5ryrlffpwjhqfrta62wpgpuxfetsd"
                    encType="multipart/form-data"
                    data-netlify='true'
                >
                    <input
                    type="hidden"
                    name="_token"
                    defaultValue="$2y$10$je0ZEQcR69TJwLHhmLUYTORyZCBEkHgLlJZO6mui8l4/xGMKvHM.q"
                    />
                    <input type="hidden" name="_element_id" defaultValue="" />
                    <h1 className="text-[48px] font-bold text-center">Contact Me</h1>
                    <div className="flex mt-[25px]">
                    <div className="flex-1 mr-[12px]">
                        <label className="block text-[14px] tracking-[0.025em]">
                        First Name
                        </label>
                        <input
                        className="bg-white w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] text-[14px] tracking-[0.025em] rounded-[8px] border-solid border-[1px] border-[#000000] border-opacity-[15%] placeholder-[#000000] text-[#000000] placeholder-opacity-[50%] focus:outline-none focus:border-[#000000] focus:border-opacity-[50%]"
                        type="text"
                        placeholder="First Name"
                        id="rt1jalup8"
                        name="firstname"
                        required=""
                        autoComplete="off"
                        />
                    </div>
                    <div className="flex-1 ml-[12px]">
                        <label className="block text-[14px] tracking-[0.025em]">
                        Last Name
                        </label>
                        <input
                        className="bg-white w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] text-[14px] tracking-[0.025em] rounded-[8px] border-solid border-[1px] border-[#000000] border-opacity-[15%] placeholder-[#000000] text-[#000000] placeholder-opacity-[50%] focus:outline-none focus:border-[#000000] focus:border-opacity-[50%]"
                        type="text"
                        placeholder="Last Name"
                        id="ihs0ovubw"
                        name="lastname"
                        required=""
                        autoComplete="off"
                        />
                    </div>
                    </div>
                    <div className="mt-[25px]">
                    <label className="block text-[14px] tracking-[0.025em]">Email</label>
                    <input
                        className="bg-white w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] text-[14px] tracking-[0.025em] rounded-[8px] border-solid border-[1px] border-[#000000] border-opacity-[15%] placeholder-[#000000] text-[#000000] placeholder-opacity-[50%] focus:outline-none focus:border-[#000000] focus:border-opacity-[50%]"
                        type="email"
                        placeholder="Email"
                        id="a8kyxpk5c"
                        name="email"
                        required=""
                        autoComplete="off"
                    />
                    </div>
                    <div className="mt-[25px]">
                    <label className="block text-[14px] tracking-[0.025em]">
                        Message
                    </label>
                    <textarea
                        className="bg-white w-[100%] pt-[8px] pr-[12px] pb-[8px] pl-[12px] text-[14px] tracking-[0.025em] leading-[1.25rem] rounded-[6px] border-solid border-[1px] border-[#000000] border-opacity-[25%] placeholder-[black] placeholder-opacity-[50%] focus:outline-none focus:border-[#000000] focus:border-opacity-[50%]"
                        id="3xc371g56"
                        name="message"
                        rows={4}
                        required=""
                        defaultValue={""}
                    />
                    </div>
                    <button
                    className="text-white text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none mt-[25px] w-[100%] bg-[#0147AA] bg-opacity-[100%]"
                    type="submit"
                    >
                    {" "}
                    <span>Submit</span>
                    </button>
                </form>
                </div>
            </div>
        </section>


    </Layout>
)

export default Contact

export const Head = () => (
    <>
        <title>Caleb Hester - Contact</title>
        <meta name="description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="og:title" content="Caleb Hester - Contact" />
        <meta property="twitter:title" content="Caleb Hester - Contact" />
        <meta property="og:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="twitter:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!"></meta>
        <Script className='dataScript' src='/animations.js'></Script>
    </>
)