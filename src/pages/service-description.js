import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const ServiceDescription = () => (
    <Layout>
        <section className="pb-[80px] pt-[80px]">
            <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] md:pr-[32px] pb-[0] md:pl-[32px] sm:pr-[24px] sm:pl-[24px] flex justify-center pl-[20px] pr-[20px]">
                <div className="sm:w-[66.67%] w-[91.67%]">
                <h1 className="text-[48px] font-bold text-center text-opacity-[100%] text-[black]">
                    Consulting Services
                </h1>
                <p className="font-normal tracking-[-0.025em] text-[22px] text-left opacity-[100%] mt-[20px] leading-[2em]">
                    After your free 15-minute consult, each subsequent meeting with me will
                    be at a rate of{" "}
                    <strong className="text-[#0147AA] text-opacity-[100%]">
                    $100/hour
                    </strong>
                    .
                    <br />
                    <br />
                    In these meetings, I'll work with you to understand and navigate the
                    unique needs of your app idea, and discuss the various available options
                    for beginning its development.
                    <br />
                    I'll encourage you to start building out a detailed feature description
                    of the app, and consider the software, frameworks, and platforms that
                    might be the best fit for your intended business. In addition, we'll
                    talk about what your priorities are for development (e.g. speed, cost,
                    etc.) and figure out what services would best fit your budget, giving
                    you an idea of what development costs might be.
                    <br />
                    <br />
                    Along the way, I'll create and share resources with you which you can
                    come back to and go over with prospective developers as you move into
                    the development stage of your app.
                </p>
                <div className="bg-[#b91c1c] bg-opacity-[100%] pt-[30px] pl-[30px] pb-[30px] pr-[30px] rounded-[8px] mt-[40px]">
                    <h1 className="font-bold text-[30px] text-opacity-[100%] text-[white]">
                    Note: I'm your consultant, not your developer.
                    </h1>
                    <p className="font-normal tracking-[-0.025em] text-left opacity-[100%] text-opacity-[100%] text-[18px] mt-[8px] text-[#e4e4e7] leading-[1.625em]">
                    Many people start looking for developers long before their idea is
                    ready for development. This can make it difficult to find the right
                    developer for the job. My goal is to give you a good starting point
                    toward beginning the development stage of your app by helping you
                    understand the field a bit better and showing you what to be looking
                    for in prospective developers.
                    <br />
                    <br />
                    From that point, you'll have to find a developer who will contract
                    with you to actually build the app.
                    </p>
                </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default ServiceDescription

export const Head = () => (
    <>
        <Seo title='Caleb Hester - Service Description'></Seo>
        <title>Caleb Hester - Service Description</title>
        <meta name="description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="og:title" content="Caleb Hester - Service Description" />
        <meta property="twitter:title" content="Caleb Hester - Service Decsription" />
        <meta property="og:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="twitter:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!"></meta>
    </>
)