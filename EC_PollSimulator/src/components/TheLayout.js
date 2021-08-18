import {React,Component} from 'react'
import TheContent from './TheContent'
import TheHeader  from './TheHeader'

export default class TheLayout extends Component
{
    render()
    {
        return(
            <div>
                <TheHeader/>
                <TheContent/>
            </div>
            
        )
    }
}