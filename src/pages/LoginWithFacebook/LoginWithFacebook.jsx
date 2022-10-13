import React from "react";
import "./LoginWithFacebook.css";
import firebase, { auth } from "../../firebase/config";
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.addScope("user_birthday");

const LoginWithFacebook = () => {
  const handleFBLogin = () => {
    auth.signInWithPopup(fbProvider);
    console.log("vô nè");
  };
  auth.onAuthStateChanged((user) => {
    console.log({ user });
  });
  return (
    <div className="login-with-face-book-container">
      <div className="content">
        <div className="title">Đăng nhập với facebook của bạn</div>
        <div className="login-with-facebook">
          <div className="box-logo">
            <img
              className="logo-face"
              src="https://logopng.com.br/logos/facebook-13.png"
              alt=""
            />
          </div>
          <button className="btn-login-with-facebook">
            Tiếp tục với facebook
          </button>
        </div>
        <div className="footer">
          <span className="span" onClick={handleFBLogin}>
            Bạn chưa có tài khoản? <p>Đăng ký</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginWithFacebook;
