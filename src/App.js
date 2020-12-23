import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layouts/default';
import routes from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props => {
                return (
                  <route.layout>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  );
}

export default App;
