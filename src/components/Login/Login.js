import React from "react";

// 因为要加state所以改成class声明
// const Login = ({ onRouteChange }) => {
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://quiet-meadow-82973.herokuapp.com/signin", {
      // fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          this.props.loadUser(data);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      //   在jsx里面需要给input标签补/，让它闭合
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="autoComplete"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="autoComplete"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                //   如果直接这样写就会直接调用这个函数
                //   onClick={onRouteChange("home")}
                //   可以在{}内部通过箭头函数定义一个匿名函数达到不调用函数的效果
                // onClick={() => onRouteChange("home")}
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                autoComplete="autoComplete"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Login;
