import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import CreateCourse from "./CreateCourse";
import Footer from "./../Footer";
import AllCourses from "./AllCourses";
import "react-toastify/dist/ReactToastify.css";
import EditPost from "./EditPost";
import EditCourse from "./EditCourse";
import Logout from "../Logout";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid rtl">
          <ToastContainer />
          <Navbar />
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Switch>
                <Route path="/admin/createPost" component={CreatePost} />
                <Route path="/admin/allPosts" component={AllPosts} />
                <Route path="/admin/createCourse" component={CreateCourse} />
                <Route path="/admin/allCourses" component={AllCourses} />
                <Route path="/admin/editPost" component={EditPost} />
                <Route path="/admin/editCourse" component={EditCourse} />
                <Route path="/admin/logout" component={Logout} />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
