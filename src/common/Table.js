import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  caption-side: top;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  // border-collapse: separate;
  // border-spacing: 5px 10px;
  margin: 0 auto;
  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */

  th {
    padding: 10px 10px;
  }
  /* td,
  th {
    border: 1px solid #000;

  } */

  td {
    font-size: 15px;
    padding: 5px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #fff;
    }
  }

  th {
    font-size: 20px;
  }
  thead > tr {
    font-size: 20px;
    background-color: #c2c2c2;
  }

  caption {
    font-size: 1em;
    padding: 5px;
    font-weight: bold;
  }
`

const TableMarkup = ({ titles, data, onClick }) => (
  <StyledTable>
    <caption>Shipping Records</caption>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={onClick} name={item._id}>
          <td>{item.shippingMark}</td>
          <td>{item.containerNumber}</td>
          <td>{item.trackingNumber}</td>
          <td>{item.itemName}</td>
          <td>{item.cbm}</td>
          <td>{item.kilo}</td>
          <td>{item.createdAt}</td>
          <td>{item.status}</td>
          <td>{item.notes}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
)

const Table = ({ data, title, onGetId }) => {
  const onClickItem = e => {
    const idx = e.target.parentNode.getAttribute('name')

    onGetId(idx)
  }

  console.log(data, 'load')

  return <TableMarkup onClick={onClickItem} titles={title} data={data} />
}

export default Table
