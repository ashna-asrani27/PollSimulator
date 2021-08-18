import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import getCandidateNames from '../poll'
var fn1 = require('../poll').fn1;
var fn2 = require('../poll').fn2;
var fn3=require('../poll').fn3;
var fn4=require('../poll').fn4;



export default class TheHeader extends Component{
    constructor(props)
    {
        super(props);
    }
 
   
    
    render()
    {
       fn4();
       let keyss=[];
       let valuess=[];
       const k=localStorage.getItem('candidatekeys');
       const v=localStorage.getItem('countvalues');
       keyss.push(k.split(","));
       valuess.push(v.split(","));
       let v1;
    
      const k1= keyss.map((key)=>(
            v1=valuess.map((value)=>(
            <div>
        
           
            <table>
        <tr>
            <td>{key[0]}: </td>
            <td>{value[0]}</td>
            
        </tr>
        <tr>
           
            <td>{key[1]}: </td>
            <td>{value[1]}</td>

        </tr>
        <tr>
           
           <td>{key[2]}: </td>
            <td>{value[2]}</td>
            
        </tr>
        <tr>
            
            <td>{key[3]}: </td>
            <td>{value[3]}</td>
           
        </tr>
        <tr>
      
            <td>{key[4]}: </td>
            <td>{value[4]}</td>
           
        </tr>
  </table>
    


</div>
            ))
      ))
        

        return(
            <div className="frmcls">
                    <h1>Voting Report</h1>
                    <table>
                        {k1}
                    </table>
            </div>
        )
    }
}