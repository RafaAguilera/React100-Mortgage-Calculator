import { result } from 'lodash';
import React from 'react';
// import "../css/app.css";
export default class App extends React.Component {
  // your Javascript goes here
constructor(props){
super(props)
this.state = {
  balance: 0,
  rate: 0,
  term: 15,
  output: 0
}
this.getData = this.getData.bind(this)
this.getMMV = this.getMMV.bind(this)
}
getData(event)
{
console.log(event.target.name)
console.log(event.target.value)
this.setState({
  [event.target.name]: parseFloat(event.target.value)
})
}
getMMV()
{
  // e.preventDefault()
console.log(this.state.balance)
console.log(this.state.rate)
console.log(this.state.term)

let monthlyRate = ((this.state.rate)/12)*.01;
console.log(monthlyRate)
let paymentTotalMonths = (this.state.term)*12;
console.log(paymentTotalMonths)
let equationTOP = (monthlyRate * (Math.pow( 1 + monthlyRate, paymentTotalMonths)))
let equationBottom= (( Math.pow( 1 + monthlyRate, paymentTotalMonths)) -1)

let payment = this.state.balance * (equationTOP/equationBottom)
console.log(payment)
this.setState({
output: payment.toFixed(2)})
}

  render() {
    return (
        <div className='container mt-3 mb-3 pb-1 pt-1 rounded'style={{backgroundColor: "#5bc0de"}}>
        {/* your JSX goes here */}
        <div className="wrapper">
        <h3 className="text-center font-weight-bold mt-4 mb-4 text-light">Mortgage Calculator</h3>
          
          <div className="dropdown-divider"></div>
        


            <div className="input-group mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffc107" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg><span></span><span></span>
 <div className="input-group-prepend">
    <span className="input-group-text ml-3">Loan Balance  $</span>
  </div>
  <input type="number" className="form-control" name="balance" id="balance" defaultValue={this.state.balance}
                min="0" max="100000000" onChange={this.getData} ></input>
  <div className="input-group-append">
    </div>
</div>

<div className="input-group mb-3">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffc107" class="bi bi-percent" viewBox="0 0 16 16">
  <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg><span></span><span></span>
 <div className="input-group-prepend">
    <span className="input-group-text ml-3">Interest Rate  %</span>
  </div>
  <input type="number" className="form-control" name="rate"  
                step="0.01" min="0" max="100" 
                id="rate" onChange={this.getData} ></input>
  <div className="input-group-append">
    </div>
</div>


<div className="input-group mb-3">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffc107" class="bi bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>


  <div className="input-group-prepend">
    <label className="input-group-text ml-3" HTMLfor="Loan Term">  Loan Terms   → </label>
  </div>
  <select className="custom-select" id="Loan Term" name="term" onChange={this.getData}>
    <option selected>Choose...</option>
    <option name="15" value="15">15 Years</option>
    <option name="30" value="30">30 Years</option>
  </select>
</div>


            <div>
              
            <button type="button" name="submit" className="btn btn-warning font-weight-bold pl-5 ml-5 pr-5" onClick={this.getMMV} >Submit</button>
            </div>
            <div>
             <h4 className="output ml-5 pl-4 mt-3 mb-4 font-weight-bold" style={{color: "#e6e6e6"}} id="output"> Monthly Mortgage Value is: ${this.state.output}  </h4>
            </div>
            <div>
              <div>

              </div>
            </div>
          
          </div>
          </div>        
    )
  }
}