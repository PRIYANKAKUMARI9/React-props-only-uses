import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Obj from './Obj';
import Propsall from './Propsall';

function App() {
  return (
    <div className="App">
      <Header pri='priyanka'/>
      <Header pri='jaymala'/>
      <Header pri='i miss you'/>
      <Profile text='hello vivek anurag pinki'/>
      <Obj pri2={{nam:'pinki sharma'}} data='this is props class in this ' hello='this this this this class component'/>
      <Propsall text2='this is props first we code some in app.js afte we add some code'/>
    </div>
  );
}

export default App;
