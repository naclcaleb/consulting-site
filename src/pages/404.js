import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="pb-[80px] pt-[80px] h-[70vh]">
      <div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] pr-[32px] pb-[0] pl-[32px] md:pr-[24px] md:pl-[24px] flex justify-center h-[100%]">
        <div className="sm:w-[50%] w-[90%] text-center h-[100%]">
          <h1 style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 20, fontSize: 40 }}>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
