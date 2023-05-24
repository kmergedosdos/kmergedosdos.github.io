import React from 'react'
import './index.css'

function TechTile({
  title
}) {
  return (
    <code className="techtile">
      {title}
    </code>
  )
}

export default TechTile