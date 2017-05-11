// @flow
import React from 'react'

type CardInstance = {
  header?: String,
  meta?: String,
  description?: String,
  extra?: any
}

const BasicCard = ({ header, meta, description, extra, ...props }: CardInstance) => (
  <div className="ui fluid card">
    <div className="content" style={{ position: 'relative' }}>
      {header && <div className="header">{header}</div>}
      {meta && <div className="meta">{meta}</div>}
      {description && <div className="description">{description}</div>}
    </div>
    {extra && <div className="extra">{extra}</div>}
  </div>
)

export default BasicCard