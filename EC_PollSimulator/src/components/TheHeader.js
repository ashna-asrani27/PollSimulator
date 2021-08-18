import {React,Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'

export default class TheHeader extends Component{

    render()
    {
        return(
            <div>
                <div className="header">
                    <h1>Poll Simulator</h1>
                 </div>
                <div className="nav">
                    <ul>
                        <li><a  href="#home"><Link to="/AddCandidates">Add Candidates</Link></a></li>
                        <li><a href="#news"><Link to="/Vote">Vote</Link></a></li>
                        <li><a href="#contact"><Link to="/PollResult">Poll Result </Link></a></li>
                        <li><a href="#about"><Link to="/VotingSummary">Voting Summary</Link></a></li>
                </ul>
                </div>
            </div>
        )
    }
}