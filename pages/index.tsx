import React from "react";
import Link from "next/link";
import { useAuthUser, withAuthUser, withAuthUserSSR } from "next-firebase-auth";

const Demo = () => {
  const { displayName, signOut } = useAuthUser();
  return (
    <div>
      <p>Welcome, {displayName ? displayName : "new user"}.</p>
      {displayName ? (
        <button style={{ border: "black", display: "block" }} onClick={signOut}>
          Log out
        </button>
      ) : (
        <Link href="/auth">
          <div style={{ border: "black", display: "block" }}>Sign in</div>
        </Link>
      )}
    </div>
  );
};

export const getServerSideProps = withAuthUserSSR()();

export default withAuthUser()(Demo);
