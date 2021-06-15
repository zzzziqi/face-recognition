import React, { Component } from "react";
import "./App.css";
// import Clarifai from "clarifai";
// 在后端使用别人的api会更加安全，因为这样不暴露key
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

// const app = new Clarifai.App({ apiKey: "b245f7327c72491f83ffec3cdbfffb85" });
const particlesOptions = {
  particles: {
    number: 30,
    density: {
      enable: true,
      value_area: 800,
    },
  },
};
// function App() {
//   return (
//     <div className="App">
//       <Particles className="particles" params={particlesOptions} />
//       <Navigation />
//       <Logo />
//       <Rank />
//       <ImageLinkForm />
//       {/* <FaceRecognition /> */}
//     </div>
//   );
// }

// 就我理解，需要使用到state这个属性必须要有constructor方法，即要通过class来声明
const initialState = {
  urlInput: "",
  imageUrl: "",
  faceFrame: {},
  concepts: {},
  route: "signin",
  isSignin: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    // 要使用this必须要先使用super
    super();
    // 设定state，可以让子组件和父组件进行数据互动，有点类似于闭包
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.eamil,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  // componentDidMount() {
  //   fetch("http://localhost:3000")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  // 利用箭头函数解决this的指向问题
  // 设置这个方法是为了改变state里面属性的值，子组件不能直接修改state的值，只能调用父组件的方法，从而达到修改state的目的
  // 这里获得的event为调用这个方法的事件
  onInputChange = (event) => {
    console.log(event.target.value); //调用 事件对象.target.value可以获得输入input的值
    // 调用这个继承自Component的方法来进行设定属性，不要通过 this.state.urlInput来设置值
    // 传入参数为一个对象
    this.setState({ urlInput: event.target.value });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data["outputs"][0]["data"]["regions"][0]["region_info"]["bounding_box"];
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      // 因为想在inset里面使用百分比，所以在这里先乘以100，再进行返回
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceFrame = (faceFrame) => {
    this.setState({ faceFrame: faceFrame });
    // 可以简单写法
    // this.setState({ faceFrame })
  };

  getConcepts = (data) => {
    const concepts =
      data["outputs"][0]["data"]["regions"][0]["data"]["concepts"][0];
    this.setState({ concepts: concepts });
  };

  onButtonSubmit = () => {
    console.log("click");
    // 当点击按钮的时候和clarifai的api做交流
    // 当点击按钮时改变State中imageUrl的值,这个值为输入的url的值
    this.setState({ imageUrl: this.state.urlInput });
    // app.models
    //   .initModel({
    //     id: Clarifai.FACE_DETECT_MODEL,
    //     // version: "53e1df302c079b3db8a0a36033ed2d15",
    //   })
    //   .then((generalModel) => {
    //     return generalModel.predict(this.state.urlInput);
    //   })
    // fetch("http://localhost:3000/imageurl", {
    fetch("https://quiet-meadow-82973.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // input: this.state.user.id,
        input: this.state.urlInput,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // 把这一串拿走当作一个方法会比较符合面向对象的语言（我猜）
        // var concepts =
        //   response["outputs"][0]["data"]["regions"][0]["region_info"][
        //     "bounding_box"
        //   ];
        if (response) {
          // fetch("http://localhost:3000/image", {
          fetch("https://quiet-meadow-82973.herokuapp.com/image", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        // console.log(response);
        this.getConcepts(response);
        // console.log(
        //   response["outputs"][0]["data"]["regions"][0]["region_info"][
        //     "bounding_box"
        //   ]
        // );
        // console.log(this.calculateFaceLocation(response));
        // console.log(this.state);
        return this.calculateFaceLocation(response);
      })
      .then((faceLocation) => {
        this.displayFaceFrame(faceLocation);
      })
      .catch((err) => {
        console.log("There are some errors", err);
      });
  };

  onRouteChange = (route) => {
    if (route === "logout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignin: true });
    }
    this.setState({ route });
  };

  render() {
    // 通过destructuring减少this.state的使用
    const { route, imageUrl, concepts, isSignin, faceFrame } = this.state;
    // 设定一个函数对state.route进行判断
    const knowRoute = (route) => {
      if (route === "home") {
        return (
          <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            {/* 传入属性值，这样子组件可以获取数据，而且可以调用这里的方法 */}
            {/* 第一个onInputChange为属性名，第二个为属性值，记得要加this，代表的是这个App类的方法 */}
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={imageUrl}
              faceFrame={faceFrame}
              concepts={concepts}
            />
          </div>
        );
      } else if (route === "register") {
        return (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        );
      } else {
        return (
          <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        );
      }
    };

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} isSignin={isSignin} />
        <Logo />
        {knowRoute(route)}
      </div>
    );
  }
}

export default App;
