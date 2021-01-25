import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header"
import Home from "./wiews/home";
import NotFound from "./wiews/NotFound";
function App() {

  const [state, setState] = useState({
    user: null,
  });
  
  useEffect (() => {
    getUser("https://api.github.com/users/Yoda2171")
    return() => {

    }
  },[])
  
  
  const getUser = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        ...state,
        user: data,
      });
    }catch(error){
      console.error(error.message);
    }
  };



  return (
    <>
      <BrowserRouter>
        <Header user={state.user}/>
        <div className="main-wrapper">
        <Switch>
          <Route exact path ="/" component={Home}/> 
          <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
