import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./Components";

export default function LoginForm() {
  const [signIn, toggle] = useState(true);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (signIn) {
      if (!email || !password) {
        setError("Email and password are required");
        return false;
      }
    } else {
      if (!username || !password || !email) {
        setError("Username, email and password are required");
        return false;
      }
    }
    setError("");
    return true;
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    //navigate("/homepage");
  };

  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    //navigate("/homepage");
  };

  const signInAction = () => {
    toggle(true);
    setError("");
  };
  const signUpAction = () => {
    toggle(false);
    setError("");
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmitSignUp}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button type="submit">Sign Up</Components.Button>
          {error && <p style={{ color: "red" }}> {error} </p>}
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSubmitSignIn}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button
            type="submit"
            onClick={() => {
              console.log("Click SIGN IN");
            }}
          >
            Sign In
          </Components.Button>
          {error && <p style={{ color: "red" }}> {error} </p>}
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={signInAction}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={signUpAction}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
