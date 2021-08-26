import React from 'react'

const Arrow = () => {
  return (
    <div className="con">
      <div className="hex gradient-border">
        <div className="inputBoxWrapper">
          <div className="input-box">
            <div className="icon" title="Select Search Engine">
              Icon
            </div>
            <input
              className="search-box"
              type="text"
              placeholder="Search or Type URL here"
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrow
