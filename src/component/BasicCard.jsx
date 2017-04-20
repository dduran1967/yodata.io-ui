import React from 'react'

const BasicCard = ({header, meta, description, extra}) => (
  <div className="ui fluid card">
    <div className="content" style={{position: 'relative'}}>
      <div className="header">{header}</div>
      <div className="meta">{meta}</div>
      <div className="description">{description}</div>
    </div>
    {extra && <div className="extra">{extra}</div>}
  </div>
)

export default BasicCard