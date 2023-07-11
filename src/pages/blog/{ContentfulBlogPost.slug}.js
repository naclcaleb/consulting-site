import React from 'react'

import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../../components/layout'
import options from '../../dependencies/richTextOptions'

import '../../styles/table.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function BlogPost({ data }) {
    const post = data.contentfulBlogPost
    return (
        <Layout>
            <section className="pb-[80px] pt-[80px]">
                <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] md:pr-[32px] pb-[0] md:pl-[32px] sm:pr-[24px] sm:pl-[24px] flex justify-center pl-[20px] pr-[20px]">
                    <div className="sm:w-[66.67%] w-[91.67%]">
                        <div className='flex flex-row w-[100%]'>
                            <div style={{flex: 1}}></div>
                            {post.coverImage && <GatsbyImage
                                image={post.coverImage.gatsbyImageData}
                                alt={post.coverImage.title}
                                style={{ marginBottom: 80, borderRadius: 20 }}
                            />}
                            <div style={{flex: 1}}></div>
                        </div>
                        <h1 className="text-[48px] font-bold text-center text-opacity-[100%] text-[black]" style={{ marginBottom: 20 }}>
                            {post.title}
                        </h1>
                        <p style={{ width: '100%', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>{post.postedAt}</p>
                        <div style={{ width: '100%' }} className='blog'>
                            {renderRichText(post.postContent, options)}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            postedAt(formatString: "MMMM Do, YYYY")
            postContent {
                raw
                references {
                    ... on ContentfulAsset {
                        __typename
                        contentful_id
                        id
                        title
                        file {
                            url
                        }
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                        ) 
                    }
                }
            }
            coverImage {
                gatsbyImageData(
                    width: 800
                    placeholder: BLURRED
                )
                title
            }
        }  
    }
`