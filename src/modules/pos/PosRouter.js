import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './screens/home/Home'
import Productos from './screens/productos/Productos'


const PosRouter = () => {
    return (
      <>  
        <Header/>
          <Switch>
            <Route path={"/productos"} component={Productos} />
            <Route path={"/"} exact component={Home}/> 
          </Switch>
        <Footer />
      </>
    )
}

export default PosRouter
