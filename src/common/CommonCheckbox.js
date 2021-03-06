/**  Copyright 2020 MonetaGo, Inc.  All Rights Reserved.
 *  This code is copyrighted material that is confidential and proprietary to MonetaGo, Inc.
 *  and may not (in whole or in part) be published, publicly displayed,copied, modified or
 *  used in any way other than as expressly permitted in a written agreement executed by
 *  MonetaGo, Inc.  No portion of this code may be used to create derivative works or exploited
 *  in any other way without MonetaGo, Inc.’s prior written consent.  No portion of this code
 *  may be transmitted or redistributed to any person without MonetaGo,Inc.’s prior written
 *  consent. This notice may not be deleted or modified without MonetaGo,Inc.’s consent.
 */

import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CommonCheckbox = ({
  onChange,
  name,
  checked,
  checkboxStyle,
  onClick
}) => {
  return (
    <div className="holder-checkbox">
      <Checkbox
        onChange={onChange}
        name={name}
        checked={checked}
        className={checkboxStyle}
        onClick={onClick}
      />
    </div>
  )
}

export default CommonCheckbox
