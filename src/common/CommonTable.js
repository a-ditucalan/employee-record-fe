import React from 'react'
import { Table } from 'semantic-ui-react'
import CommonCheckbox from './CommonCheckbox'
import Container from './Container'
const CommonTable = () => {
  return (
    <Container>
      <div className="table-wrapper">
        <Table unstackable>
          <Table.Body>
            <Table.Row className="tbl-row">
              <Table.Cell className="common-check">
                <CommonCheckbox />
              </Table.Cell>
              <Table.Cell className="product-wrapper">
                <div className="product-holder">
                  <img
                    className="product-img"
                    src={require('../assets/img/img-product.png')}
                    alt="img"
                  />
                  <div className="title-sub-wrapper">
                    <p className="tbl-title">
                      Toddler Fishing Game Gifts for 2 3 Year Old Girl and…
                    </p>
                    <div className="img-box">
                      <img
                        src={require('../assets/img/Ellipse180.png')}
                        alt="flag"
                      />
                      <span> B078WLH42J </span>
                      <div className="icon-wrapper">
                        <img
                          src={require('../assets/img/skull-crossbones.png')}
                          alt="bone"
                        />
                        <img
                          src={require('../assets/img/lock.png')}
                          alt="lock"
                        />
                        <img
                          src={require('../assets/img/th-list.png')}
                          alt="list"
                        />
                        <img
                          src={require('../assets/img/cubes.png')}
                          alt="cube"
                        />
                        <img
                          src={require('../assets/img/comment-dollar.png')}
                          alt="dollar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell className="common-data"> </Table.Cell>
              <Table.Cell className="common-data"> $5 .68 </Table.Cell>
              <Table.Cell className="common-data"> $5 .68 </Table.Cell>
              <Table.Cell className="common-data"> 29 % </Table.Cell>
              <Table.Cell className="common-data"> 192 </Table.Cell>
              <Table.Cell className="common-data"> $32, 813.36 </Table.Cell>
              <Table.Cell className="common-data"> 100 % </Table.Cell>
              <Table.Cell className="common-data"> 9.3 </Table.Cell>
              <Table.Cell className="common-data"> 9.3 </Table.Cell>
              <Table.Cell className="common-data"> 9.3 </Table.Cell>
              <Table.Cell className="common-data"> 9.3 </Table.Cell>
              <Table.Cell className="common-data">
                <div className="pop-up-menu">
                  <img
                    src={require('../assets/img/folder-plus.png')}
                    alt="folder"
                  />
                  <img
                    src={require('../assets/img/bell-slash.png')}
                    alt="bell"
                  />
                  <img
                    src={require('../assets/img/ellipsis-v.png')}
                    alt="folder"
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  )
}

export default CommonTable
