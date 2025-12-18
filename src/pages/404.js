import * as React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/", { replace: true })
  }, [])

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center text-center">
        <p className="text-muted">Redirecting…</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
