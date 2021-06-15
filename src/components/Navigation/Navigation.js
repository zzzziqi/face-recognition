import React from "react";

const Navigation = ({ onRouteChange, isSignin }) => {
  // return isSignin ? (
  //   <nav style={{ display: "flex", justifyContent: "flex-end" }}>
  //     <p
  //       onClick={() => onRouteChange("signin")}
  //       className="f3 link dim black underline pa3 pointer"
  //     >
  //       Log out
  //     </p>
  //   </nav>
  // ) : (
  //   <nav style={{ display: "flex", justifyContent: "flex-end" }}>
  //     <p
  //       onClick={() => onRouteChange("signin")}
  //       className="f3 link dim black underline pa3 pointer"
  //     >
  //       Sign In
  //     </p>
  //     <p
  //       onClick={() => onRouteChange("register")}
  //       className="f3 link dim black underline pa3 pointer"
  //     >
  //       Register
  //     </p>
  //   </nav>
  // );
  if (isSignin) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("logout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Log out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
