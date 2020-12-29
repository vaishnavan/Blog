import React, { Component } from 'react'
import './App.css'
import Form from './component/Form'
import axios from 'axios'
import Post from './component/Post'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feedback from './component/Feedback'
import Footer from './component/Footer'
import About from './component/About'
import Home from './component/Home'
import Display from './component/Display'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      comtData:[]

    }
  }




  create = data => {
    axios.post('http://localhost:5000', data)
      .then(res => {
        console.log(res)
      })
  }

  createComment = comdata => {
    axios.post('http://localhost:5000/feedback', comdata)
      .then(res => {
        console.log(res)
      })
  }




  componentDidMount() {
    this.getall();
    this.getComment();
  }


  getall() {
    axios.get('http://localhost:5000/allpost')
      .then(res => {
        this.setState({ data: res.data })

      })
  }

  getComment(){
    axios.get('http://localhost:5000/allfeed')
    .then(res=>{
      this.setState({comtData:res.data})
      console.log(this.state.comtData)

    })
  }

  del = data => {
    axios.delete(`http://localhost:5000/del/${data._id}`)
      .then(res => {
        this.getall();
      })
  }





  render() {
    return (
      <div className="app">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">BloG2Log</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/post">Create Post</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/feedback">Feedback</Link>
                </li>



              </ul>

            </div>
          </nav>

          <Switch>
          <Route exact path="/">
              <Home/>
              

            </Route>
          <Route exact path="/about">
              <About/>
              

            </Route>
            <Route exact path="/blog">
              <Post getdata={this.state.data} del={this.del} />
              <Footer />

            </Route>
            <Route path="/post">
              <Form mydata={this.create} />
              <Footer />
            </Route>
            <Route path="/feedback">
              <Feedback commentdata={this.createComment} />
              <Display getcom={this.state.comtData}/>
              <Footer />

            </Route>
          </Switch>
          <ToastContainer />

        </Router>


      </div>

    )
  }
}

export default App

