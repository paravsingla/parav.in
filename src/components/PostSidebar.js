import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { getFormattedDate, slugify } from '../utils/helpers'
import me from '../../content/images/parav.jpg'

export const PostSidebar = ({
  tags = [],
  date,
  categories = [],
  thumbnail,
}) => {
  const category = categories?.filter((category) => category !== 'Highlight')
  const formattedDate = getFormattedDate(date)

  return (
    <aside className="post-sidebar">
      {thumbnail && (
        <div className="post-image">
          <Img fixed={thumbnail.childImageSharp?.fixed} />
        </div>
      )}
      <div className="post-sidebar-card">
        <h2>About me</h2>
        <img src={me} alt="Parav" className="sidebar-avatar" />
        <p>
          Hello and thanks for visiting! My name is{' '}
          <Link to="/me">Parav</Link>, and this is my digital
          backyard. 🍻
        </p>
        <p>
          I'm a software engineer who also creates music and writes
          about stuff.
        </p>
      </div>

      <div className="post-sidebar-card">
        <h2>Post Details</h2>
        <ul>
          <li>Published {formattedDate}</li>
        </ul>

        {category && (
          <div>
            <h2>Category</h2>
            <ul>
              <li>
                <Link to={`/categories/${slugify(category)}`}>{category}</Link>
              </li>
            </ul>
          </div>
        )}

        <h2>Tags</h2>
        <div className="tags">
          {tags.map((tag) => {
            return (
              <Link
                key={tag}
                to={`/tags/${slugify(tag)}`}
                className="tag"
                activeClassName="active"
              >
                {tag}
              </Link>
            )
          })}
        </div>
      </div>

      {/* <div className="post-sidebar-card">
        <h2>Newsletter</h2>
        <p>
          Get updates when I write something new! No spam, I respect your inbox.
        </p>
        <p>
          <a
            href="https://taniarascia.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button highlighted"
          >
            Subscribe to the Newsletter
          </a>
        </p>
      </div> */}
    </aside>
  )
}
