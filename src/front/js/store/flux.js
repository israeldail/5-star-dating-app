const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      profiles: [],
      person: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },


      signup: async (email,password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        }

    
        try {
          const resp = await fetch("https://3001-israeldail-5stardatinga-r6d0fpp7smk.ws-us59.gitpod.io/api/signup", opts)
               
          if(resp.status !== 200) {
            alert('there was an error signing up')
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data)
          setStore({ data: data});
          
        } catch(error) {
          console.error('there has been an error with the sign up')
        }
        },

        login: async (email, password) => {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          };
  
          try {
            const resp = await fetch(
              "https://3001-israeldail-5stardatinga-r6d0fpp7smk.ws-us59.gitpod.io/api/token",
              opts
            );
            if (resp.status !== 200) {
              alert("there has been some error");
              return false;
            }
  
            const data = await resp.json();
            console.log("this came from the backend", data);
            sessionStorage.setItem("token", data.access_token);
            setStore({ token: data.access_token });
            return true;
          } catch (error) {
            console.error("There has been an error logging in");
          }
        },
  
        logout: () => {
          sessionStorage.removeItem("token");
          console.log("Logging out");
          setStore({ token: null });
        },
  



      getProfile: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch("https://3001-israeldail-5stardatinga-r6d0fpp7smk.ws-us59.gitpod.io/api/profiles");
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setStore({ profiles: data });
            // don't forget to return something, that is how the async resolves
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getPerson: async (id) => {
        try {
          const resp = await fetch(
            `https://3001-israeldail-5stardatinga-r6d0fpp7smk.ws-us59.gitpod.io/api/profile/1`
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setStore({ person: data });
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
