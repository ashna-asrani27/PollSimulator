import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import storage from 'node-sessionstorage'

import axios from 'axios'
var fn1 = require('../poll').fn1;

export default class TheHeader extends Component{
    constructor(props)
    {
        
        super(props);
        this.state={
            candidatename:'',
            name:'',
            candidates:[]
        };
        this.onChangeCandidateName=this.onChangeCandidateName.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
       
    }
   
    onChangeCandidateName(e)
    {
        console.log('hu');
        this.setState(
            {
                candidatename:e.target.value
            }
        )
    }
    handleSubmit(e)
    {

        e.preventDefault();
        
       console.log('inside submit',this.state.candidatename);
    
     fn1(this.state.candidatename);
      
    }
   
    render()
    {
        
       
        return(
            <div>
                <form className="frmcls" onSubmit={this.handleSubmit}>
                     <label>Candidate Name:</label><br/>
                        <input type="text" className="txtbox" name="CandidateName" 
                        value={this.state.candidatename}
                        onChange={this.onChangeCandidateName}/>
                      <input type="submit"  className="btn" value="Submit"/>
                 </form> 
            </div>
        )
    }
}