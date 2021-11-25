import './App.css';
import UploadFile from './UploadFile'
import PlayFIle from './PlayFile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
function App() {
  return (
   <>
     <Router>
     <Switch>
          <Route path="/"  exact={true} component={UploadFile} />
          <Route path="/playfile/" component={PlayFIle} />
     </Switch>
        </Router>
   </>
  );
}

export default App;
