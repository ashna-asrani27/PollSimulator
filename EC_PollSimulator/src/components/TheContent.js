import { ReactChild,Component } from "react";
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import routes from '../routes'

export default class TheContent extends Component{
    render()
    {
        return(
            <Switch>
                 {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
              
                      <route.component {...props} />
                    
                  )} />
              )
            })}
            <Redirect from="/" to="/AddCandidates" />
            </Switch>
        )
    }
}