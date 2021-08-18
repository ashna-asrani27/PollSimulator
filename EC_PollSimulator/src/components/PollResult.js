import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'
import getCandidateNames from '../poll'
var fn1 = require('../poll').fn1;
var fn2 = require('../poll').fn2;
var fn3=require('../poll').fn3;
var fn4=require('../poll').fn4;
var fn5=require('../poll').fn5;




export default class TheHeader extends Component{
    constructor(props)
    {
        super(props);
    }
 
   
    
    render()
    {
       const maxim=localStorage.getItem('fmx');
       const smaxim=localStorage.getItem('smx');
       const maximVal=localStorage.getItem('m1');
       const smaximVal=localStorage.getItem('m2');
        return(
            <div className="frmcls">
                    <h1>Poll Result </h1>
                    <table>
                    
                    <tr>
                        <td>Won: </td>
                        <td>{maximVal}({maxim})</td>
                        
                    </tr>
                    <tr>
                    
                        <td>Lost: </td>
                        <td>{smaximVal}({smaxim})</td>

                    </tr>
                </table>
            </div>
        )
    }
}