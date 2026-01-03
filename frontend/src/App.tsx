import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';

function App() {

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton mode='modal'/>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

      </header>
      <h1 className="text-5xl bg-blue-600 text-white">Hello Coders!!</h1>
    </>
  )
}

export default App
