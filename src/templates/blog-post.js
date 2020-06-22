import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AmazonFrame from "../components/AmazonFrame";
import AmazonImg from "../components/AmazonImg";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div>
        <AmazonFrame
          src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=42&l=ur1&category=businessbooks&banner=193VEH3W0HC5KQESHJG2&f=ifr&linkID=e84f4b72daa5193ab657c3193f5fbc1a&t=hamchance0215-22&tracking_id=hamchance0215-22"
          width="234"
          height="60"
          scrolling="no"
          border="0"
          marginwidth="0"
          frameborder="0"
        ></AmazonFrame>
      </div>
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <div>
              <hr />
            </div>
            <PostContent content={content} />
            <div>
              <hr />
              [AD]
              <br />
              <a
                target="_blank"
                href="https://www.amazon.co.jp/gp/search?ie=UTF8&tag=hamchance0215-22&linkCode=ur2&linkId=9783e01af382b09eab2625f69e92ca5c&camp=247&creative=1211&index=books&keywords=投資"
              >
                おすすめの投資に関する本をチェック！
              </a>
              <AmazonImg
                src="//ir-jp.amazon-adsystem.com/e/ir?t=hamchance0215-22&l=ur2&o=9"
                width="1"
                height="1"
                border="0"
                alt=""
              />
              <br />
              <a
                target="_blank"
                href="https://www.amazon.co.jp/b?_encoding=UTF8&tag=hamchance0215-22&linkCode=ur2&linkId=68772c6f8df4cc0d693ce70b077b0a4b&camp=247&creative=1211&node=466282"
              >
                おすすめのビジネス・経済の本をチェック！
              </a>
              <AmazonImg
                src="//ir-jp.amazon-adsystem.com/e/ir?t=hamchance0215-22&l=ur2&o=9"
                width="1"
                height="1"
                border="0"
                alt=""
              />
              <br />
              <a
                target="_blank"
                href="https://www.amazon.co.jp/gp/search?ie=UTF8&tag=hamchance0215-22&linkCode=ur2&linkId=c9808fbb941505ea5acf221463040129&camp=247&creative=1211&index=books&keywords=ダイヤモンドＺＡｉ"
              >
                ダイヤモンドＺＡｉで株情報をチェック！
              </a>
              <AmazonImg
                src="//ir-jp.amazon-adsystem.com/e/ir?t=hamchance0215-22&l=ur2&o=9"
                width="1"
                height="1"
                border="0"
                alt=""
              />
              <hr />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
