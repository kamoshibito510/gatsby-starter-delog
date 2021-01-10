---
template: BlogPost
path: /No25
date: 2021-01-10T12:02:58.664Z
title: Gatsby製ブログの記事に、自分のSNS（Twitter）へのリンクを貼り付ける
---
前提として当ブログは

[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) で作成しています。



リンク用アイコンは、**react-fontawesome** を使用していきます。

まずは npm install していくのですが、@fontawesome ではなく @fortawesome であることにご注意。 

```bash
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-brands-svg-icons
```

src/templates/blogTemplate.js

```
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
    
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(defaultImage)`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        //以下を追記
        ここから
        <a href="https://twitter.com/Gon387?s=09">
          <FontAwesomeIcon
            color="#3eaded"
            icon={faTwitterSquare} />
        </a>   
        ここまで
      </div>
    </Layout>
  )
}
```

・モジュールのインストール

・モジュールのインポート

・aタグ追記

たったこれだけでTwitterへのリンクが出来上がりました。

参考にした記事

# [Takumon Blog](https://takumon.com/2018/09/16/)
