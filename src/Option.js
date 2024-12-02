import React from 'react'

const Option = () => {
  return (
    <>
   
    <div style={{ display: "flex", margin: "0 15px" }}>
    <div></div>
    <div style={{ margin: "0 0 0 21px" }}>Size</div>
    <div style={{ margin: "0 0 0 70px" }}>Colour</div>
  </div>
  <div style={{ display: "flex" }}>
    <div style={{ margin: "6px 1px 6px 10px" }}>#1</div>
    <select style={{ margin: "5px 20px 5px 5px", width: "60px", padding: "5px" }}>
      <option>S</option>
      <option>M</option>
      <option>L</option>
    </select>
    <select className='color'>
      <option>Black</option>
      <option>colour</option>
    </select>
  </div>
  <div style={{ display: "flex" }}>
    <div style={{ margin: "6px 1px 6px 10px" }}>#2</div>
    <select className='select'>
      <option>S</option>
      <option>M</option>
      <option>L</option>
    </select>
    <select className='color'>
      <option>Colour</option>
      <option>Black</option>
    </select>
  </div>
  </>
  )
}

export default Option