import React from "react";
import { login } from "../services/userServices";
import { ToastContainer, toast } from "react-toastify";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(this.state.email, this.state.password);
      localStorage.setItem("token", data);
      this.props.history.push("/admin");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("ایمیل یا پسورد اشتباه است");
      }
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <ToastContainer></ToastContainer>
        <form
          onSubmit={this.handleSubmit}
          className="rtl form-signin border rounded m-2 mx-auto bg-light shadow"
        >
          <h1 classname="h3 mb-3 font-weight-normal">لطفا وارد شوید</h1>
          <label for="inputEmail" className="sr-only">
            آدرس ایمیل
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="آدرس ایمیل"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
            autoFocus
          />
          <label for="input-password" className="sr-only">
            کلمه عبور
          </label>
          <input
            type="password"
            id="input-password"
            className="form-control"
            placeholder="کلمه عبور"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
          <button className="btn btn-lg btn-primary btn-block">ورود</button>
        </form>
      </div>
    );
  }
}

export default Login;
