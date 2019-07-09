import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.hStyle = { color: 'red' };
      
      this.state = {
         data: '',
         gender:'',
      }
    
      this.updateState = this.updateState.bind(this);
      this.handleChange = this.handleChange.bind(this);
   };


     handleChange(a) {

 if( a.target.value == "Male" ){
      	 this.setState({gender: 'male'});
       }else{
       	this.setState({gender: 'FeMale'});
       }
 
  };

   updateState(e) {
   	if (this.state.gender == "male") {

      if( e.target.value >20 ){
      	 this.setState({data: 'IS eligible for vote'});
       }else{
       	this.setState({data: 'IS not eligible for vote because your age is less than 21'});
       }
   }
     	else {

      if( e.target.value >17 ){
      	 this.setState({data: 'IS eligible for vote'});
       }else{
       	this.setState({data: 'IS not eligible for vote because your age is less than 18'});
       }
   }

   }
   render() {
      return (
      	<div>
         <div>
         <h3>Name:</h3>
            <input type = "text"/><br/>
           <h3>Gender:</h3>

           <div className="radio">
          <label>
            <input type="radio" name="Male" value="Male" onChange={this.handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="Male" value="FeMale" onChange={this.handleChange} />
            FeMale
          </label>
        </div>
           <h3>Age:</h3>    <input type = "text"
               onChange = {this.updateState} /><br/>
         </div>
         <div>
         <h4 style={ this.hStyle }>{this.state.data}</h4>
         </div>
           </div>
      );
   }
}
export default App;