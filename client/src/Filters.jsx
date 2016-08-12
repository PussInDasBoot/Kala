import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';

var Filters = React.createClass({
  getInitialState() {
    return {Commitment: ''}
  },
  handleChange(e) {
    this.setState({Commitment: e.target.value}, function (){
      console.log(this.state)
    })
  },
  render() {
    return (
      <Row>
        <Row>
          <p>Commitment level</p>
          <Input s={2} name='Commitment' type='radio' value='Single' label='Single' onClick={this.handleChange}/>
          <Input s={2} name='Commitment' type='radio' value='Pass' label='Pass' onClick={this.handleChange}/>
          <Input s={2} name='Commitment' type='radio' value='Membership' label='Membership' onClick={this.handleChange}/>
          <Input s={6} type='select' label="Location">
            <option value='Downtown'>Downtown Vancouver</option>
            <option value='Kitsilano'>Kitsilano</option>
            <option value='Mount Pleasant'>Mount Pleasant</option>
            <option value='East Vancouver'>East Vancouver</option>
          </Input>
        </Row>
        <Row>
          { this.state.Commitment &&
            <Input s={6} type="number" label="Maximum price per class" />
            }  
        </Row>
        <Row>
          <p>Google+ rating higher than</p>
          <Input name='Commitment' type='radio' value='1' label='1' />
          <Input name='Commitment' type='radio' value='2' label='2' />
          <Input name='Commitment' type='radio' value='3' label='3' />
          <Input name='Commitment' type='radio' value='4' label='4' />
        </Row>
        <Row>
          <Input s={6} label="Type of class" />
        </Row>
        
      </Row>
    );
    // Could hardcode or get from data
  }
})
export default Filters;