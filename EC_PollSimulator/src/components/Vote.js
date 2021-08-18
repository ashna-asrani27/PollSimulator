import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import getCandidateNames from '../poll'
var fn1 = require('../poll').fn1;
var fn2 = require('../poll').fn2;
var fn3=require('../poll').fn3;



export default class TheHeader extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            studentid:'',
            candidates:[],
            votedFor:'ashna'
        }
        this.onChangeStudentId=this.onChangeStudentId.bind(this);
        this.onChangeVotedFor=this.onChangeVotedFor.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
 
    onChangeStudentId(e)
    {
        this.setState(
            {
                studentid:e.target.value
            }
        )
    }
    onChangeVotedFor(e)
    {
        this.setState(
            {
                votedFor:e.target.value
            }
        )
    }
    handleSubmit(e)
    {

        e.preventDefault();
        
       console.log('inside submit:id',this.state.studentid);
       console.log('inside submit:voted::',this.state.votedFor);
   
         fn2(this.state.studentid);
         fn3(this.state.votedFor);
        
            alert('Candidate added!');
    }
    render()
    {
        let candidatename=localStorage.getItem('candidates');
        console.log('from local',candidatename);
        let c=[];
        c.push(candidatename.split(","))
        console.log('c:',c)
    
        let i=0;
        const candidates=c.map(candidate=>(
            // <div>
            //      <input type="radio" name="gender" id="dot-1"/>
            //      <input type="radio" name="gender" id="dot-2"/>
            //      <input type="radio" name="gender" id="dot-3"/>
            //      <input type="radio" name="gender" id="dot-4"/>
            //      <input type="radio" name="gender" id="dot-5"/>
            //      <label for="dot-1">
            //         <span className="dot one" checked={this.state.votedFor === "ashna"} 
            //         onChange={this.onChangeVotedFor} value={candidate[0]}></span>
            //         <span className="gender">{candidate[0]}</span>
            //      </label>
            //      <label for="dot-2">
            //          <span className="dot one" checked={this.state.votedFor === "ashna"} 
            //         onChange={this.onChangeVotedFor} value={candidate[1]}></span>
            //         <span className="gender">{candidate[1]}</span>
            //      </label>
            //      <label for="dot-3">
            //          <span className="dot one" checked={this.state.votedFor === "ashna"} 
            //         onChange={this.onChangeVotedFor} value={candidate[2]}></span>
            //         <span className="gender">{candidate[2]}</span>
            //      </label>
            //      <label for="dot-4">
            //          <span className="dot one" checked={this.state.votedFor === "ashna"} 
            //         onChange={this.onChangeVotedFor} value={candidate[3]}></span>
            //         <span className="gender">{candidate[3]}</span>
            //      </label>
            //      <label for="dot-5">
            //          <span className="dot one" checked={this.state.votedFor === "ashna"} 
            //         onChange={this.onChangeVotedFor} value={candidate[4]}></span>
            //         <span className="gender">{candidate[4]}</span>
            //      </label>

            // </div>
            
               <div onChange={this.onChangeVotedFor}>

           
                    {/* <div> */}
                    <input type="radio" name="gender" id="dot-1"
                    value={candidate[0]}
                           
                           />  {candidate[0]} 
                         {/* <label for="dot-1">
                           <span className="dot one" checked={this.state.votedFor === "ashna"} 
                           onChange={this.onChangeVotedFor} value={candidate[0]}></span>
                           <span className="gender">{candidate[0]}</span>
                           </label> */}
                           
                     {/* </div> */}
                      
                       <input type="radio" name="gender" id="dot-2" 
                        value={candidate[1]}/>{candidate[1]}
     
                       <input type="radio" name="gender" id="dot-3"
                              value={candidate[2]}
                              />  {candidate[2]}
                         
                         <input type="radio" name="gender" id="dot-3"
                              value={candidate[3]}
                              />  {candidate[3]}
                               <input type="radio" name="gender" id="dot-3"
                              value={candidate[4]}
                              />  {candidate[4]}
                           
                      
                      
                        </div>
        ))
          
           
        
       
        return(
            <div>
                <form className="frmcls" onSubmit={this.handleSubmit}>
                     <label for="studentid">Student ID:</label><br/>
                        <input type="text"className="txtbox" name="studentid" 
                        value={this.state.studentid}
                        onChange={this.onChangeStudentId}/>

                        {candidates}
                       
                      <input type="submit"  className="btn" value="Vote"/>
                 </form> 
            </div>
        )
    }
}