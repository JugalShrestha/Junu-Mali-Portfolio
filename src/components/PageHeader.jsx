import PropTypes from "prop-types"
import React from "react"

const PageHeader = React.forwardRef(({name},ref) => {
  return (
    <div ref={ref} className="page-header">
        <div className="texts">
            <div className="text">{name}</div>
            <div className="text">{name}</div>
            <div className="text">{name}</div>
            <div className="text">{name}</div>
            <div className="text">{name}</div>
            <div className="text">{name}</div>
            <div className="text">{name}</div>
        </div>
    </div>
  )
})

PageHeader.displayName = "PageHeader";

PageHeader.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PageHeader