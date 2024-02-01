import React from 'react'
import { Link } from '@reach/router'

import me from '../../content/images/parav.jpg'

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Parav" />
      </div>
    </aside>
  )
}
