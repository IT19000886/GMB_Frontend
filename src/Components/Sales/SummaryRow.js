import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { render } from '@testing-library/react';
import AdditionalCharges from './modal/AdditionalCharges';

class SummaryRow extends Component {
    constructor(props){
        super(props);

        this.state={
            showAddCharge: false,
            visible : false,
            summary1:props.summary1,
            summary2:props.summary2,
            summary3:props.summary3,
            summary4:props.summary4,
            summary5:props.summary5,
            summary6:props.summary6,
            summary7:props.summary7,
            summary8:props.summary8
        };
        this.openAddCharge  = this.openAddCharge.bind(this);
        
    }
    openAddCharge(){
        this.setState({
            showAddCharge:!this.state.showAddCharge
        })
      }

render(){
    return(
        <>
        {this.state.showAddCharge ? <AdditionalCharges open={this.openAddCharge} /> : null}
        <tr className = 'text-center'>
            <td> {this.state.summary1}</td>
            <td> {this.state.summary2}</td>
            <td> {this.state.summary5}</td>
            <td> {this.state.summary6}</td>
            <td> {this.state.summary7}</td>
            <td> <button  className="btn btn-primary btn-block" onClick={this.openAddCharge} > ADD </button></td>
            <td> {this.state.summary3}</td>
            <td> {this.state.summary4}</td>
            <td> <button className="btn btn-primary btn-block" > ADD </button> </td>
            <td> </td>
            

        </tr>
        </>
    )
}
}
export default SummaryRow;