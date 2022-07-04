import React from "react";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";

const Auth = () => (
  <div>
    <h3>Sign in</h3>
    <div>
      <FirebaseAuth />
    </div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth);
