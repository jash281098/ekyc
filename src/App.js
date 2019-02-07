import React, { Component } from 'react';
import './css/bootstrap.min.css';
import logo from './images/ekyc.jpg';
import './App.css';
import contract from './contract';
import web3 from './web3';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';


class App extends Component {

  state={
    home:true,
    message:'',
    isMetaMask: false,
    value: 0,
    name:'',
    email:'',
    contact: 0
  };



  //  async componentDidMount() {

  // if (typeof window.web3 !== 'undefined') {
  //   console.log('web3 is enabled');
  //   if (web3.currentProvider.isMetaMask === true) {
  //     await this.setState({isMetaMask: true});
  //     console.log('MetaMask is active');
  //   } else {
  //     console.log('MetaMask is not available')
  //   }
  // } else {
  //   console.log('web3 is not found')
  // }

  //   if (this.state.isMetaMask) {

  //   }
  // }

  create = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({message1: 'Done'});

    try {
      await contract.methods.addclient(this.state.name,this.state.email,this.state.contact).send(
          {from : accounts[0]}
      );
    }catch(err){}
  }






  change2 = () => {
    this.setState({home:false});
  }

  change6 = () => {
    this.setState({home:true});
  }

  change3 = () => {
    this.setState({home:3});
  }

  change4 = () => {
    this.setState({home:4});
  }

  change5 = () => {
    this.setState({home:5});
  }
  change6 = () => {
    this.setState({home:6});
  }

  submit = () => {

  }

  renderhome() {
    return (
        <div className="App">

          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo} /></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>

          <div className="card bg-primary" align="center" style={{margin:'4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">User Menu</p>
              <div className="card bg-info">
                <div className="card-body text-center text-light">
                  <form method="POST" action="P1.php" name="sform">
                    <a className="text-light" onClick={this.change2}><label>Create Account</label></a>
                    <br/>
                    <a className="text-light" onClick={this.change3}><label>Submit Documents</label></a>
                    <br/>
                    <a className="text-light" onClick={this.change4}><label>View and Approve Access</label></a>
                    <br/>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-dark" align="center" style={{margin:'4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">Institution Level</p>
              <div className="card bg-secondary">
                <div className="card-body text-center text-light">
                  <form method="POST" action="P1.php" name="sform">
                    <a className="text-light" onClick={this.change5}><label>Request Access</label></a>
                    <br/>
                    <a className="text-light" onClick={this.change6}><label>View Access Status</label></a>
                    <br/>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }

  renderca() {
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo} /></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" onClick={this.change6}>Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>

          <div className="card bg-primary" align="center" style={{margin:'4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">Create Account</p>
              <div className="card bg-info">
                <div className="card-body text-center text-light">
                  <form method="POST" name="sform" onSubmit={this.create}>
                    <a href="#" className="text-light"><label>Enter Your Full Name</label></a>
                    <br/>
                    <FormGroup>
                      <FormControl
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={event => this.setState({name: event.target.value})}/>

                    </FormGroup>
                    <br/>
                    <a href="#" className="text-light"  ><label>Enter EmailID</label></a>
                    <br/>
                    <FormGroup>
                      <FormControl
                          type="text"
                          name="email"
                          value={this.state.email} 
			  onChange={event => this.setState({email: event.target.value})}/>
                    </FormGroup>
                    <br/>
                    <a href="#" className="text-light"><label>Enter Contact no.</label></a>
                    <br/>

                    <FormGroup>
                      <FormControl
                          type="text" 
			  name="contactno" 
			  value={this.state.contact} 
			  onChange={event => this.setState({contact: event.target.value})}/>
                    </FormGroup>
                    <input />
                    <br/>
                    <br/>
                 
                    <input className=" btn btn-primary" type="submit" name="submit" />

                    <br/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }

  rendersd(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo} /></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>

          <div className="card bg-primary" align="center" style={{margin: '4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">Submit Account</p>
              <div className="card bg-info">
                <div className="card-body text-center text-light">
                  <form method="POST" action="P1.php" name="sform">
                    <a href="#" className="text-light"><label>Aadhar Card Number</label></a>
                    <br/>
                    <input type="text" name="aadid"/>
                    <br/>
                    <a href="#" className="text-light"><label>Name as per Aadhar Card</label></a>
                    <br/>
                    <input type="text" name="aname"/>
                    <br/>
                    <a href="#" className="text-light"><label>DOB as per Aadhar Card</label></a>
                    <br/>
                    <input type="text" name="adob"/>
                    <br/>
                    <a href="#" className="text-light"><label>Address as per Aadhar Card</label></a>
                    <br/>
                    <textarea name="aadd"></textarea>
                    <br/>
                    <a href="#" className="text-light"><label>Attach Aadhar Card</label></a>
                    <br/>
                    <input type="file" name="apic" accept="image/*"/>
                    <br/>
                    <br/>
                    <input className=" btn btn-primary" type="submit" name="submit"/>
                    <br/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  rendervaa(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navcol" aria-controls="navcol" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="index.html">Home <span className="sr-only">(current)</span></a>
              </div>
            </div>
          </nav>

          <div className="card bg-primary" align="center" style={{margin: '4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">View Access Request</p>
              <div className="card bg-info">
                <div className="card-body text-center text-light">
                  <form method="POST" action="P1.php" name="sform">
                    <table className="table table-bordered">
                      <tr>
                        <th>Institution Name</th>
                        <th>Approval Status</th>
                        <th>More Info</th>
                      </tr>
                      <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                      </tr>
                      <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                      </tr>
                      <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                      </tr>
                      <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                      </tr>
                      <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  renderra(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo}/></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="index.html">Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>

          <div className="card bg-dark" align="center" style={{margin: '4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">Request Access</p>
              <div className="card bg-secondary">
                <div className="card-body text-center text-light">
                  <form method="POST" name="sform">
                    <a href="#" className="text-light"><label>Requesting Institution name</label></a>
                    <br/>
                    <input type="text" name="riname"/>
                    <br/>
                    <a href="#" className="text-light"><label>User Blockchain ID</label></a>
                    <br/>
                    <input type="text" name="ubid"/>
                    <br/>
                    <br/>
                    <a href="#" className="text-light"><label>Select the required access</label></a>
                    <br/>
                    <input type="checkbox" name="raop1" value="acn"/> Aadhar CardNo<br/>
                    <input type="checkbox" name="raop2" value="nac"/> Name as per Aadhar Card<br/>
                    <input type="checkbox" name="raop3" value="adob"/> DOB as per Aadhar Card<br/>
                    <input type="checkbox" name="raop4" value="aadd"/> Address as per Aadhar Card<br/>
                    <input type="checkbox" name="raop5" value="dac"/> Digital Aadhar Copy<br/>
                    <br/>
                    <br/>
                    <input className=" btn btn-dark" type="submit" name="submit"/>
                    <br/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  rendervrq(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <a className="navbar-brand" href="#"><img height="50px" width="80px" src={logo}/></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="index.html">Home <span className="sr-only">(current)</span></a>
            </div>
          </nav>

          <div className="card bg-dark" align="center" style={{margin: '4%'}}>
            <div className="card-body text-center">
              <p className="card-text text-light">View Requested data</p>
              <div className="card bg-secondary">
                <div className="card-body text-center text-light">
                  <form method="POST" action="P1.php" name="sform">
                    <table className="table table-bordered">
                      <tr>
                        <th>Institution Name</th>
                        <th>Approval Status</th>
                        <th>More Info</th>
                      </tr>
                      <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                      </tr>
                      <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                      </tr>
                      <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                      </tr>
                      <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                      </tr>
                      <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  render(){
    // switch(this.state.home) {
    //    case '1':
    //      return this.renderhome();
    //    case '2':
    //      return this.renderca();
    //    case '3':
    //      return this.rendersd();
    //    case '4':
    //      return this.rendervaa();
    //    case '5':
    //      return this.renderra();
    //    case '6':
    //      return this.rendervrq();
    //    default:
    //      return this.renderhome();
    //      this.setState({home:1});
    //  	}
    if(this.state.home)
    {
      return this.renderhome();

    }
    else
    {
      return this.renderca();
    }
    // if(this.state2.home2)
    // {
    // 	return this.renderhome();
    // }
    // else
    // {
    // 	return this.rendersd();
    // }
  }

}
export default App;
