import "./App.css";

import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Router } from "./Router";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div>
        <SignedIn>
          <Router />
          <div style={{ alignSelf: "flex-end" }}>
            <SignOutButton />
          </div>
        </SignedIn>

        <SignedOut>
          <div>
            <h2>Not Signed in... 😢</h2>
            <SignInButton />
          </div>
        </SignedOut>
      </div>
    </ClerkProvider>
  );
};

export default App;
