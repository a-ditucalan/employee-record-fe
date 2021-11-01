import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownClearable = ({ option }) => {
  // console.log(option, 'option')
  return <Dropdown clearable options={option} selection />
}

export default DropdownClearable
