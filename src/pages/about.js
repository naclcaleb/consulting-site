import * as React from 'react'
import '../dependencies/animations.js'

import { Script, graphql } from 'gatsby'

import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

const About = ({ data }) => {
    const pageData = data.allContentfulAboutMe.nodes[0]

    const header = pageData.header.header
    const description = pageData.description.description
    const photo = pageData.photo

    return <Layout>
        <section className="pt-[100px] pb-[100px] sm:pb-[60px] sm:pt-[60px]">
            <div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pb-[0] md:pr-[24px] md:pl-[24px] max-w-[1200px] pl-[24px] pr-[24px]">
                <div className="flex md:flex-row flex-col-reverse">
                <div data-animation-load="2bnk0jqh4" data-animation-id-2bnk0jqh4="" style={{ flex: 1 }}>
                    <GatsbyImage
                    className="w-[auto] h-[auto] max-w-[100%]"
                    image={photo.gatsbyImageData}
                    alt={photo.description}
                    srcSet="https://assets.ycodeapp.com/assets/app/images/ATaRygTYQiT88jN079h7nKxGwhjxZBXS0pvtvEw2-published.jpg 800w, https://assets.ycodeapp.com/assets/app/images/ZmPg7SJR129jAXQAWEAuK0R8FSMkUAZPnZ0ggHvS-published.jpg 500w, https://assets.ycodeapp.com/assets/app/images/wWgZwlSHpUooKhlDnjrFCFQVMFcjBT09NCnlZ51o-published.jpg 150w, https://assets.ycodeapp.com/assets/app19033/Images/UszePd9OlcQrwPZoKrWzY3uMNmsBv9y3VIkcqWqD-published.jpg 1032w"
                    sizes="(max-width: 1032px) 100vw, 1032px"
                    />
                </div>
                <div
                    className="space-y-[32px] mb-8"
                    style={{ marginBottom: 40, marginLeft: 40, marginRight: 40, flex: 1 }}
                    data-animation-scroll-into-view="8nvgdkry9"
                    data-animation-id-8nvgdkry9=""
                >
                    <h2 className="font-normal tracking-[-0.025em] text-[30px] leading-[1.375em]">
                    {header}
                    </h2>
                    <p className="font-normal tracking-[-0.025em] opacity-[50%] leading-[1.625em] text-[20px]">
                    {description.split('\n').map((item, i) => <span key={i}>{item}<br /></span>)}
                    </p>
                </div>
                </div>
            </div>
        </section>

    </Layout>
}


export default About

export const Head = () => (
    <>
        <title>Caleb Hester - About</title>
        <title>Caleb Hester - About</title>
        <meta name="description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="og:title" content="Caleb Hester - About" />
        <meta property="twitter:title" content="Caleb Hester - About" />
        <meta property="og:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
        <meta property="twitter:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!"></meta>
        <Script className='dataScript' src='/animations.js'></Script>
    </>
)

export const query = graphql`
    query {
        allContentfulAboutMe {
        nodes {
            header {
                header
            }
            description {
                description
            }
            photo {
                gatsbyImageData
                description
            }
        }
        }
    }
`