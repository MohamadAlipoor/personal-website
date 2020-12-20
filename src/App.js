import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Footer from './components/Footer'
import Courses from './components/Courses'
import Education from './components/Education'
import Skill from './components/Skill'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container-fluid rtl'>
          <div className='row'>
            <Sidebar />
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <Switch>
                <Route path='/courses' component={Courses} />
                <Route path='/education' component={Education} />
                <Route path='/skill' component={Skill} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/notFound' component={NotFound} />
                <Route path='/' exact component={Posts} />
                <Redirect to='/notFound' />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App
