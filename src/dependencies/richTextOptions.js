import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text) => <i className="italic">{text}</i>,
      [MARKS.CODE]: (text) => <code className="font-mono bg-[#f4f4f5]" style={{ padding: 5, borderRadius: 5}}>{text}</code>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
            <a target="_blank" href={uri} rel="noopener noreferrer nofollow" className="underline focus:outline-none" style={{ color: '#0147AA' }}>{children}</a>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1 className='leading-[1.25em] font-normal tracking-[0px] text-[48px] sm:text-[32px]' style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20, fontSize: 40 }}>{children}</h1>
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className='font-normal text-[28px] tracking-[0px] mb-[6px] text-[black]' style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20, fontSize: 35 }}>{children}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className='leading-[1.25em] font-normal tracking-[0px] sm:text-[32px] text-[24px] mb-[6px] mt-[64px] text-[black]' style={{ fontWeight: 'bold' }}>{children}</h3>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className='font-normal tracking-[-0.025em] text-[22px] leading-[1.5em] mb-[32px]'>{children}</p>
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className='list-decimal pl-[40px] mb-[16px] space-y-[12px]'>{children}</ol>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { gatsbyImageData, description } = node.data.target
            return <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 20, marginBottom: 20 }}>
                <div style={{ flex: 1 }}></div>
                <GatsbyImage image={getImage(gatsbyImageData)} alt={description || 'image'} />
                <div style={{ flex: 1 }}></div>
            </div>
      },
      [BLOCKS.TABLE]: (node, children) => (
        <table className='rounded-corners'>
            <thead>
                {children[0]}
            </thead>
          <tbody>{children.slice(1)}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
      [BLOCKS.QUOTE]: (node, children) => <div className='quote'><div className='quote-bar'></div><div className='quote-contents'>{children}</div></div>
    },
  }

export default options