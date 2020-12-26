import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import ogp_image from "../images/dev.png";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    //画像のURLを取得
  const siteUrl = site.siteMetadata.siteUrl;
  const defaultImage = `${siteUrl}${ogp_image}`;

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Gon387" /> 
        <meta property="og:url" content="https://ecstatic-easley-e04553.netlify.app/" />
        <meta property="og:title" content="30代後半からはじめるエンジニア生活" /> 
        <meta property="og:description" content="38歳未経験から独学＋プログラミングスクールを経てSES企業に入社しエンジニアとしての生活をスタートさせた筆者が、業務や日々の学習から学んだあれこれをアウトプットして記憶に定着させようと目論む（自称）テック系ブログです。" /> 
        <meta property="og:image" content="https://ecstatic-easley-e04553.netlify.app/static/dev.png" />
        
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
