/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://naclcaleb.com/" />
      <meta property="og:title" content="Caleb Hester - Application Development Consultant | Caleb Hester Consulting" />
      <meta property="og:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
      <meta property="og:image" content="https://naclcaleb.com/studio-image.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://naclcaleb.com/" />
      <meta property="twitter:title" content="Caleb Hester - Application Development Consultant | Caleb Hester Consulting" />
      <meta property="twitter:description" content="Have an app idea but don't know where to start? I'll help you navigate the world of application development and get you what you need to get it built!" />
      <meta property="twitter:image" content="https://naclcaleb.com/studio-image.jpg" />

      {children}
    </>
  )
}

export default Seo
