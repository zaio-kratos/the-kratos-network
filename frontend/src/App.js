import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Content from './components/dashboard/Content'
import LandingPage from './components/pages/LandingPage'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import EditProfile from './components/profile/EditProfile'
import CreateProfile from './components/profile/CreateProfile'
import PreviewProfileView from './components/profile/PreviewProfileView'
import PublicViewProfile from './components/profile/PublicViewProfile'
import Fireapp from './config/firebaseConfig'
import UpdateTopic from './components/content/UpdateTopic'

function App() {
  const auth = Fireapp.auth().currentUser
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component = {LandingPage}/>
        <Route path='/signin' component = {SignIn}/>
        <Route path='/signup' component = {SignUp}/>
        <Route exact path='/profiles' component = {Dashboard}/>
        <Route path='/createprofile' component = {CreateProfile}/>
        <Route path='/profile/:name/:id' component = {PublicViewProfile}/>
        <Route path='/editprofile/:name/:id' component = {EditProfile}/>
        <Route path='/generatedProfile/:name/:id' component = {PreviewProfileView}/>
        <Route path='/content' component = {Content}/>
        <Route path='/topic/:id' component = {UpdateTopic}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
