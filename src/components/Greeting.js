import LoggedInPage from "./LoggedInPage";
import LoggedOutPage from "./LoggedOutPage";

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoggedInPage />;
  }
  return <LoggedOutPage />;
};

const LoginButton = (props) => {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <button className="btn btn-primary" onClick={props.onClick}>
        LogIn
      </button>
    </div>
  );
};

const LogoutButton = (props) => {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <button className="btn btn-primary" onClick={props.onClick}>
        LogOut
      </button>
    </div>
  );
};

export { LoginButton, LogoutButton, Greeting };
