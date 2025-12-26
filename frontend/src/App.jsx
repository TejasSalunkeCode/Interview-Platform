
import "./App.css";
import { SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton mode="modal">
        <button>Login</button>
        </SignInButton>
      </SignedOut>

      {/* <SignIn>
        <SignOutButton/>
      </SignIn> */}

      <UserButton/>
    </>
  );
}

export default App;
