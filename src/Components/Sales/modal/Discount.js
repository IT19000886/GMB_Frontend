import React, { Component, useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Container, Form, Row, Col } from 'react-bootstrap';



class Discount extends Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }



    handleClick = () => {
        this.props.open();
    };

    render(){
        

    return (
        <Modal 
        isOpen={true} 
        shouldCloseOnOverlayClick={false}
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '200px',
              left: '500px',
              right: '500px',
              bottom: '200px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '0px'
            }
          }}
        >
        
            <div className="container ">
                <div className="py-2">
                    <h2 className="text-center dark">Discount </h2>
                    <form className="form-horizontal"  >
                    <Row>
                <Col md ="6">
        
                    <Form.Label for="discount"><strong>Add Discount: </strong></Form.Label>
                        <Form.Select 
                        id="discount"
                        name="discount"
                       >
                        <option value=""></option>
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                        <option value="30">30%</option>
                        <option value="35">35%</option>
                        <option value="40">40%</option>
                        <option value="45">45%</option>
                        <option value="50">50%</option>
                     </Form.Select>
                     </Col>

                        </Row>
                        <div className="form-group text-right">        
                            <div className="col-sm-offset-2 col-sm-10 ">
                                <button type="submit" className="btn btn-dark m-2  text-right">ADD</button>
                            </div>
                        </div>  
                    </form>
                </div >
                <div className="form-group text-center">
                <button className="btn btn-danger m-2 text-center" onClick={this.handleClick}>Close</button> 
                </div>
            </div>
         
         </Modal>
        
        
    )
        
    }
}

export default Discount
