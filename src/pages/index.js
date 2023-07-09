import * as React from "react"
import { Link, Script, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import '../dependencies/animations.js'

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data)
  return <Layout>
    <section className="pt-[80px] pb-[80px] sm:pb-[60px] sm:pt-[64px] lg:grid lg:items-start lg:content-start lg:grid-flow-col-dense flex justify-start items-center pl-[50px] sm:flex sm:flex-col-reverse divide-y-reverse divide-x-reverse space-y-reverse space-x-reverse mr-[0px] pr-[50px] bg-opacity-[100%] sm:pl-[25px] sm:pr-[25px]">
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px] sm:w-[100%] sm:pl-[5px] sm:pr-[5px] sm:ml-[0px] sm:mr-[0px] sm:max-w-[100%]">
        <div className="block sm:mt-[39px] sm:w-[100%]">
          <div className="max-w-[768px]">
            <h1
              className="leading-[1.25em] font-normal tracking-[0px] text-[48px] sm:text-[32px] md:text-[30px]"
              data-animation-load="quzh51gb1"
              data-animation-id-quzh51gb1=""
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1
              }}
            >
              {" "}
              I'm{" "}
              <strong className="text-opacity-[100%] text-[#0147AA]">
                Caleb
              </strong>
              , and I'm here to help bring{" "}
              <strong className="text-opacity-[100%] text-[#0147AA]">
                your app idea
              </strong>{" "}
              into{" "}
              <strong className="text-opacity-[100%] text-[#0147AA]">
                reality
              </strong>
              .{" "}
            </h1>
          </div>
          <div className="mt-[20px] max-w-[680px]">
            <p
              className="font-normal tracking-[-0.025em] leading-[1.5em] text-left opacity-[100%] text-opacity-[100%] text-[#52525b] text-[24px]"
              data-animation-load="d4q1hc7vf"
              data-animation-id-d4q1hc7vf=""
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: "0.5"
              }}
            >
              You have an awesome idea. I want to show you how to build it.
            </p>
          </div>
          <div className="flex sm:flex-col md:flex-col">
            <a
              className="text-white text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none bg-[#0147AA] bg-opacity-[100%] mt-[29px] transform hover:scale-[1.05] duration-75 sm:text-center md:text-center"
              target="_blank"
              href="https://form.feathery.io/to/PNd9AV"
            >
              <span>Get a free 15-minute consult</span>
            </a>
            <a
              className="text-white text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid inline-block focus:outline-none bg-opacity-[100%] mt-[29px] transform hover:scale-[1.05] duration-75 bg-[#BED8FC] ml-[25px] sm:ml-[0px] sm:text-center md:ml-[0px] md:text-center"
              target="_blank"
              href="https://calendly.com/naclcaleb"
            >
              <span className="text-opacity-[100%] text-[#0147AA]">
                Or, book your next appointment!
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[100%] max-h-[100%] min-h-[100%] h-[100%] w-[16.67%] flex-1 flex-grow pl-[0px] pr-[0px] transform overflow-hidden lg:w-[100%] sm:self-auto sm:flex sm:justify-center 2xl:flex 2xl:justify-center">
        <StaticImage
          className="w-[auto] h-[auto] max-w-[100%]"
          src="../images/cover.png"
        />
      </div>
    </section>
    <section className="pt-[0px] pb-[0px] bg-opacity-[100%] transform skew-x-[0deg] skew-y-[3deg] origin-top-left translate-y-[0%] min-w-[100%] min-h-[100px] bg-[#BED8FC]" />
    <section className="pb-[100px] sm:pb-[60px] sm:pt-[60px] bg-opacity-[100%] pt-[0px] bg-[#BED8FC]">
      <div className="mt-[0] mb-[0] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] text-center flex flex-col items-center border-t-[20px] border-[#BED8FC] border-opacity-[100%] ml-[0px] mr-[0px] max-w-[auto] border-none pl-[0px] pr-[0px] bg-opacity-[100%] bg-[#BED8FC]">
        <h1 className="text-[48px] font-bold text-center text-opacity-[100%] border-t-[4px] border-opacity-[100%] border-[#0147AA] pt-[32px] w-[75%] border-none mb-[32px] text-[#0147AA]">
          {" "}
          Building an app is no joke.{" "}
        </h1>
        <div className="max-w-[80rem] mt-[0] mb-[0] pb-[0] md:pr-[24px] md:pl-[24px] flex flex-row-reverse divide-y-reverse divide-x-reverse space-y-reverse space-x-reverse pl-[0px] pr-[0px] mr-[0px] ml-[0px] pt-[30px] md:flex-col-reverse divide-y-reverse divide-x-reverse space-y-reverse space-x-reverse sm:pl-[0px] sm:pr-[0px]">
          <div className="max-w-[80rem] mt-[0] mb-[0] md:pr-[24px] md:pl-[24px] pb-[30px] bg-opacity-[100%] rounded-[16px] mr-[0px] pl-[0px] pr-[0px] ml-[15px] pt-[0px] md:ml-[0px] sm:pl-[0px] sm:pr-[0px]">
            <p className="font-normal tracking-[-0.025em] leading-[1.625em] text-[20px] text-opacity-[100%] text-left mr-[30px] opacity-[80%] bg-[white] bg-opacity-[100%] pt-[50px] pb-[50px] pr-[50px] pl-[50px] rounded-[24px] text-[#3f3f46] md:ml-[30px] sm:ml-[0px] sm:mr-[0px]">
              {" "}
              The world of tech and mobile app development is{" "}
              <strong className="">constantly changing</strong> at a rapid pace,
              and the number of options can be{" "}
              <strong className="">overwhelming</strong>, leaving you with no idea
              where to start. <br />
              <br />
              <strong className="">
                But with the right help, that doesn't have to stop you from
                launching your big idea.
              </strong>
              <br />
              <br />
              <strong className="">As your consultant</strong>, I'll help you dive
              into the nitty-gritty of application development and{" "}
              <strong className="">come out with a plan</strong> to help you
              achieve success.{" "}
            </p>
          </div>
          <div className="max-w-[80rem] bg-opacity-[100%] rounded-[16px] mt-[0px] mb-[0px] ml-[0px] mr-[15px] pr-[50px] pl-[50px] self-start pt-[50px] pb-[50px] flex-shrink block md:ml-[0px] md:mr-[0px] md:pl-[104px] md:pr-[104px] sm:pl-[25px] sm:pr-[25px]">
            <h2 className="font-normal tracking-[-0.025em] leading-[1.375em] text-opacity-[100%] text-left bg-opacity-[100%] rounded-[8px] pt-[0px] pl-[0px] pb-[0px] pr-[0px] mb-[0px] mt-[0px] text-[24px] text-[#0147AA]">
              {" "}
              With <strong className="">over 9 years of experience</strong>{" "}
              developing web and mobile apps on all major platforms, I'm here to
              help you{" "}
              <strong className="">navigate the app development process</strong>{" "}
              and show you what it takes to build out your solution.{" "}
            </h2>
            <div className="flex mt-[30px] items-start sm:flex-col">
              <a
                className="text-white text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-[transparent] border-[1px] border-solid focus:outline-none block bg-[white] bg-opacity-[100%] duration-75 transform hover:scale-[1.05] w-[auto] mt-[0px] sm:w-[100%]"
                href="https:"
              >
                <span className="text-[#0147AA] text-opacity-[100%] font-bold">
                  Free 15-minute consult
                </span>
              </a>
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-[100px] pb-[100px] sm:pb-[60px] sm:pt-[60px] text-[white] bg-[white] bg-opacity-[100%]">
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px] duration-75">
        <h2
          className="tracking-[-0.025em] text-opacity-[100%] font-bold text-[#0147AA] text-[48px] text-center"
          data-animation-load="8dspiagbo"
          data-animation-id-8dspiagbo=""
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            opacity: 1
          }}
        >
          {" "}
          Nine Years of Development Experience{" "}
        </h2>
        <p className="text-[#3f3f46] text-opacity-[100%] text-center text-[16px]">
          I don't just talk the talk, I've walked the walk - and that's what will
          make me a great consultant.
        </p>
        <h1 className="font-bold text-opacity-[100%] text-[#14684A] text-[36px] mt-[30px]">
          {" "}
          Past Projects{" "}
        </h1>
        <div
          className="grid grid-cols-3 gap-[20px] mt-[20px] md:grid-cols-1 bg-opacity-[100%] pt-[30px] pb-[30px] pl-[30px] pr-[30px] rounded-[24px] bg-[#f4f4f5]"
          data-animation-load="y03ejl9g0"
          data-animation-id-y03ejl9g0=""
          style={{
            opacity: 1,
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)"
          }}
        >
          {data.allContentfulWorkShowcase.nodes.map(work => <div className="hover:underline" data-animation-hover="4bg1vwb1l">
            <a
              className="hover:rounded-[2px]"
              href={`/work/${work.slug}`}
            >
              <div className="mb-[12px] overflow-hidden hover:rounded-[8px] rounded-[8px] h-[1328 px] min-h-[1328 px] relative">
                <GatsbyImage
                  className="rounded-[8px] object-cover max-w-[auto] w-[100%] min-h-[auto] max-h-[auto] h-[200px] relative top-[0px] right-[0px]"
                  image={work.coverImage.gatsbyImageData}
                  data-animation-id-luxzhphxt=""
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)"
                  }}
                />
                <div className="top-[0px] right-[0px] bg-[black] bg-opacity-[100%] w-[100%] h-[100%] absolute opacity-[10%] hover:opacity-[30%] duration-150" />
              </div>
              <div className="flex items-center justify-start gap-[8px]">
                <span className="text-[16px] text-opacity-[100%] text-[#0147AA]">
                  {work.title}
                </span>
                {work.services.map(service => <div className="flex items-center">
                  <div className="w-[4px] h-[4px] bg-[black] bg-opacity-[50%] mr-[10px]" />
                  <span className="flex flex-col items-start opacity-[50%] text-[16px] text-opacity-[100%] text-[#0147AA]">
                    {service}
                  </span>
                </div>)}
              </div>
            </a>
          </div>)}
        </div>
        <h1 className="font-bold text-opacity-[100%] text-[#14684A] text-[36px] mt-[50px]">
          {" "}
          Wide-Ranging, Robust Knowledge{" "}
        </h1>
        <div className="mb-[0] md:pr-[24px] md:pl-[24px] bg-opacity-[100%] rounded-[24px] bg-[#0147AA] mt-[25px] pl-[50px] pr-[50px] pb-[70px] pt-[70px] block ml-[0px] mr-[0px] w-[100%] max-w-[100%]">
          <StaticImage
            className="w-[auto] h-[auto] max-w-[100%]"
            src="../images/technologies.png"
          />
          <p className="font-normal tracking-[-0.025em] text-[22px] leading-[1.5em] text-left opacity-[100%] mt-[30px]">
            Working as a full-stack developer for years, I've gained extensive
            knowledge of the many tools, frameworks, and platforms out there for
            developers. I'll guide you through what you need and what you don't,
            for your specific use case.
          </p>
        </div>
      </div>
    </section>
    <section className="pt-[140px] pb-[140px] bg-[#BED8FC] bg-opacity-[100%]">
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px]">
        <h1 className="text-[48px] font-bold text-[#0147AA] text-opacity-[100%]">
          {" "}
          What you'll get from me{" "}
        </h1>
        <div className="bg-[white] bg-opacity-[100%] rounded-[24px] pt-[30px] pb-[30px] pl-[30px] pr-[30px] mr-[0px] mt-[25px]">
          <ul className="list-disc space-y-[2px] flex text-[20px] leading-[2em] list-outside mt-[0px] pl-[0px]">
            <div className="flex-1 mr-[15px] pl-[30px]">
              <li>
                <span className="text-[18px]">
                  Free, no-risk first consult to see if we're a good fit
                </span>
              </li>
              <li>
                <span className="text-[18px]">
                  Valuable feedback on your idea
                </span>
              </li>
              <li>
                <span className="text-[18px]">
                  Clear picture of what different features will require
                </span>
              </li>
              <li>
                <span className="text-[18px]">
                  Guidance on choosing the best technologies to power your app
                </span>
              </li>
            </div>
            <div className="flex-1 ml-[10px] pl-[30px]">
              <li>
                <span className="text-[18px]">
                  Criteria for what to look for in a good developer and how to
                  write a solid contract
                </span>
              </li>
              <li>
                <span className="text-[18px]">
                  Basic estimate of the costs of developing and running an app
                </span>
              </li>
              <li>
                <span className="text-[18px]">
                  Pointers for creating an app design and feature list
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section className="pt-[100px] pb-[100px] sm:pb-[60px] sm:pt-[60px]">
      <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
        <h2
          className="text-[20px] font-normal tracking-[-0.025em]"
          data-animation-scroll-into-view="6mia5ssga"
          data-animation-id-6mia5ssga=""
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            opacity: 1
          }}
        >
          {" "}
          Blog posts{" "}
        </h2>
        <div
          className="mt-[20px] md:grid-cols-1 block divide-y-[1px] divide-[black] divide-opacity-[5%] border-t-[1px] border-b-[1px] border-[black] border-opacity-[5%]"
          data-animation-scroll-into-view="2m0br29z2"
          data-animation-id-2m0br29z2=""
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            opacity: 1
          }}
        >
        { data.allContentfulBlogPost.nodes.map(blogPost => (
          <div>
            <a
              className="pt-[32px] pb-[32px] flex items-center justify-between hover:underline cursor-pointer"
              href={`/blog/${blogPost.slug}`}
              data-animation-hover="ficx0r12s"
            >
              <h3
                className="font-normal text-[16px]"
                data-animation-id-p3noxfkk6=""
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)"
                }}
              >
                {" "}
                {blogPost.title}{" "}
              </h3>
              <i
                className="inline-block w-[24px] h-auto flex-shrink-0"
                data-animation-id-cv58y9p93=""
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)"
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="square"
                  strokeLinejoin="arcs"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </i>
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  </Layout>
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" sizes="32x32" href="https://assets.ycodeapp.com/assets/app19033/favicons/ZxtYmsZz38BkgI7IBBNgjs7ySaM1Ru2TSesEbQn0.png" />
  <link rel="apple-touch-icon" sizes="256x256" href="https://assets.ycodeapp.com/assets/app19033/webclips/AgzEYZYPHRCb58bcCMB9nDWoS38YeU3wcEVYyKZt.png" />    
  <title>Caleb Hester - Application Development Consultant</title>
  <meta name="description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
  <meta property="og:title" content="Caleb Hester - Application Development Consultant" />
  <meta property="twitter:title" content="Caleb Hester - Application Development Consultant" />
  <meta property="og:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
  <meta property="twitter:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!"></meta>
  <Script className='dataScript' src='/animations.js' onLoad={() => console.log('animations')}></Script>
</>

export default IndexPage

export const query = graphql`
    query {
      allContentfulBlogPost(sort: { postedAt: DESC }) {
        nodes {
          title
          id
          contentful_id
          slug
        }
      }
      allContentfulWorkShowcase {
        nodes {
          coverImage {
            __typename
            gatsbyImageData(
              width: 800
              placeholder:BLURRED
            )
          }
          title
          id
          contentful_id
          slug
          websiteUrl
          services
          year(formatString: "YYYY")
        }
      }
    }
`