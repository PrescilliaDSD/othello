import React from 'react'
import PropTypes from 'prop-types'

const Chip = ({ color }) => {
  return (
    <div className={`${color}-chip chip`}></div>
  )
}

Chip.propTypes = {
  color: PropTypes.string.isRequired
}

export default Chip
