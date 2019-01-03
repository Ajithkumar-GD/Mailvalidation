import React,{Component} from 'react';

class App extends Component{
      constructor(props){
      super(props);
  this.state = {
      emailid:'',
      phoneno:'',
      paymentmode:'credit card',
      errormsg: false,
      errorphone:false,
    };
  
  this.email = this.email.bind(this);
  this.phoneno = this.phoneno.bind(this);
  this.paymentcard= this.paymentcard.bind(this);
  this.validateemail=this.validateemail.bind(this);
  this.validatephoneno=this.validatephoneno.bind(this);
  this.onfocus=this.onfocus.bind(this);
  this.onfocusphone=this.onfocusphone.bind(this);
  }
      email(e){
        this.setState({emailid:e.target.value})
      }
      phoneno(e){
        this.setState({phoneno:e.target.value})
      }
      paymentcard(e){
        this.setState({paymentmode:e.target.value})
      }
     
     validateemail()
     {
                   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailid))) {
                      this.setState({errormsg:true}) }
                   else {
                      this.setState({errormsg:false})
                   }
                  }
      validatephoneno()
      {
        if(!(/^[0-9]*$/.test(this.state.phoneno))){ 
          this.setState({errorphone:true}) 
        }
          else {
          this.setstate({errorphone:false})
        }
      }            
      onfocus()
      {
        this.setState({errormsg:false})
      }     
      
      onfocusphone()
      {
        this.setState({errorphone:false})
      }
      componentWillUpdate() {
             console.log(this.state.emailid);
             console.log(this.state.phoneno);
             console.log(this.state.paymentmode);
      }
      render(){
        return(
          <div>
          ENTER THE EMAIL ID &nbsp; <input type='text' value={this.state.emailid} onChange={this.email} onBlur={this.validateemail} onFocus={this.onfocus} />
          <br/>
          {this.state.errormsg ? (<h1>enter the valid email</h1>):''}
          <br />
          ENTER THE PHONE NO &nbsp; <input type='text' value={this.state.phoneno} onChange={this.phoneno}  onBlur={this.validatephoneno} onFocus={this.onfocusphone}/>
          <br/>
          {this.state.errorphone ? (<h1>enter the valid phoneno</h1>):''}
          <br/>
          ENTER THE PAYMENTMODE  &nbsp; <select value={this.state.paymentmode} onChange={this.paymentcard}>
                <option value="creditcard">creditcard</option>
                <option value="debitcard">debitcard</option>
            </select>
          </div>
        );
      }
    }
    export default App;


