import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./nav/Navigation";
import BottomNav from "./nav/BottomNav";
import Routes from "./routes/Routes";
import LoadingSpinner from "./common/LoadingSpinner";
import AycApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "@fontsource/metropolis";

export const TOKEN_STORAGE_ID = "ayc-token";

// AYC application

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: "Metropolis",
      button: {
        textTransform: "none",
      },
    },
    palette: {
      primary: {
        main: "#00c7d7",
      },
      secondary: {
        main: "#607494",
      },
      info: {
        main: "#FFFFFF",
      },
      textPrimary: {
        main: "#000000",
      },
      textSecondary: {
        main: "#FFFFFF",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [service, setService] = useState("workshops");

  useEffect(
    function loadAdminInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            AycApi.token = token;
            let currentUser = username;
            setCurrentUser(currentUser);
          } catch (errors) {
            console.error("App loadUserInfo: problem loading", errors);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }

      // set infoLoaded to false whiel async getCurrentUser runs; once the
      // data is fecthed (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  // handles site-wide logout
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // handles site-wide login.

  async function login(loginData) {
    try {
      let token = await AycApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <LoadingSpinner />;

  async function addCustomer(data) {
    try {
      await AycApi.addCustomer(data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to save customer", errors);
      return { success: false, errors };
    }
  }

  async function editCustomer(id, data) {
    try {
      console.debug("editCustomer", "id=", id, "data=", data);
      await AycApi.editCustomer(id, data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to edit customer", errors);
      return { success: false, errors };
    }
  }

  async function deleteCustomer(id) {
    try {
      await AycApi.deleteCustomer(id);
      return { success: true };
    } catch (errors) {
      console.error("Failed to delete customer", errors);
      return { success: false, errors };
    }
  }

  async function addMember(data) {
    try {
      await AycApi.addMember(data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to add team member", errors);
      return { success: false, errors };
    }
  }

  async function editMember(id, data) {
    try {
      await AycApi.editMember(id, data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to edit team member", errors);
      return { success: false, errors };
    }
  }

  async function deleteMember(id) {
    try {
      await AycApi.deleteMember(id);
      return { success: true };
    } catch (errors) {
      console.error("Failed to delete team member", errors);
      return { success: false, errors };
    }
  }

  async function addVideo(data) {
    try {
      await AycApi.addVideo(data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to add video", errors);
      return { success: false, errors };
    }
  }

  async function editVideo(id, data) {
    try {
      await AycApi.editVideo(id, data);
      return { success: true };
    } catch (errors) {
      console.error("Failed to edit video", errors);
      return { success: false, errors };
    }
  }

  async function deleteVideo(id) {
    try {
      await AycApi.deleteVideo(id);
      return { success: true };
    } catch (errors) {
      console.error("Failed to delete video", errors);
      return { success: false, errors };
    }
  }

  async function tagVideo(id, data) {
    try {
      let video = await AycApi.tagVideo(id, data);
      return { success: true, video };
    } catch (errors) {
      console.error("Failed to add tag to video", errors);
      return { success: false, errors };
    }
  }

  async function untagVideo(id, data) {
    try {
      let video = await AycApi.untagVideo(id, data);
      return { success: true, video };
    } catch (errors) {
      console.error("Failed to remove tag from video", errors);
      return { success: false, errors };
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <div className="App">
            <Navigation logout={logout} />
            <Routes
              login={login}
              addCustomer={addCustomer}
              editCustomer={editCustomer}
              deleteCustomer={deleteCustomer}
              addMember={addMember}
              editMember={editMember}
              deleteMember={deleteMember}
              addVideo={addVideo}
              editVideo={editVideo}
              deleteVideo={deleteVideo}
              tagVideo={tagVideo}
              untagVideo={untagVideo}
              service={service}
              setService={setService}
            />
            <BottomNav setService={setService} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
