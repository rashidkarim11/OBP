import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";

const GoogleAuth = ({ useraction }) => {
  const [autheticaton, setAutjenticion] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "895536953430-38gr70lgkmmcfr4pircg7287jb3g5e82.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          auth.isSignedIn.listen(onAuthChnage);
          setAutjenticion(auth.isSignedIn.get());
        });
    });
  }, []);

  const onAuthChnage = () => {
    return setAutjenticion(auth.isSignedIn.get());
  };

  function renderSignedIn() {
    if (auth && auth.isSignedIn == null) {
      return null;
    } else if (auth && auth.isSignedIn.Mb) {
      console.log(auth.isSignedIn );
      return (
        <Button
          onClick={() => {
            console.log(auth);
            auth.signOut();
          }}
          color="secondary"
          variant="contained"
        >
          sign out
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => {
            auth.signIn();
          }}
          color="secondary"
          variant="contained"
        >
          sign in with google
        </Button>
      );
    }
  }

  return <div>{renderSignedIn()}</div>;
};
export default GoogleAuth;
