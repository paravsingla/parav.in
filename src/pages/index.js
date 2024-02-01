import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { projectsList } from '../data/projectsList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Index({ data }) {
  const latest = data.latest.edges
  const highlights = data.highlights.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedHighlights = useMemo(
    () =>
      getSimplifiedPosts(highlights, { shortTitle: true, thumbnails: true }),
    [highlights]
  )

  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />

      <div className="container">
        <div className="hero-wrapper">
          <Hero title="Hi, I'm Parav." index>
            <p className="hero-description small width">            
              I'm a software engineer based in Hyderabad, India. I take pictures, {' '}
              <Link to="https://www.youtube.com/@paravmusic">make
              music</Link> and{' '}
              <Link to="/blog">ramble</Link> about stuff. I like
              programming, table tennis, reading, and gaming.
            </p>
            🍻
            <br />
            <br />
            <p>
              <small className="text-muted">
                <em>Last updated: December 24th, 2023</em>
              </small>
            </p>
          </Hero>
          <div className="decoration">
            <img
              src="/sarangi.jpg"
              alt="Sarangi"
              className="image hero-image"
              title="Sarangi"
            />
            <small className="text-muted">
                <em>Sarangi: my favorite instrument</em>
          </small>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="segment first">
          <Heading title="Word Salad" slug="/blog" />

          <Posts data={simplifiedLatest} newspaper />
        </section>

        <section className="segment large">
          <Heading title="Useful Stuff"  slug="/blog"/>

          <div className="highlight-preview">
            {simplifiedHighlights.map((post) => {
              return (
                <div className="muted card flex" key={`popular-${post.slug}`}>
                  {post.thumbnail && <Img fixed={post.thumbnail} />}
                  <div>
                    <time>{post.date}</time>
                    <Link className="card-header" to={post.slug}>
                      {post.title}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* <section className="segment large">
          <Heading title="Projects" slug="/projects" />

          <div className="post-preview">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="anchored card" key={project.slug}>
                    <div>
                      <time>{project.date}</time>
                      <a
                        className="card-header"
                        href={`https://github.com/taniarascia/${project.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                      <p>{project.tagline}</p>
                    </div>
                    <div className="anchored links">
                      {project.writeup && (
                        <Link className="button" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      <a className="button flex" href={project.url}>
                        Demo
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </section> */}

        {/* <section className="segment large">
          <Heading title="Youtube" />
          <p>
            I also have a youtube channel.
          </p>
          <p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button large highlighted"
            >
              Check it out!
            </a>
          </p>
        </section> */}
      </div>
    </div>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            shortTitle
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 45, height: 45) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
