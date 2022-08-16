const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      profiles: [],
      person: [],
      queue: [],
      waiting: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getName: (first_name) => {
        const store = getStore();
        setStore({ waiting: [...store.waiting, first_name] });
        console.log(store.waiting);
      },

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      signup: async (email, password) => {
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
            process.env.BACKEND_URL + "/api/signup",
            opts
          );

          if (resp.status !== 200) {
            alert("there was an error signing up");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          setStore({ data: data });
        } catch (error) {
          console.error("there has been an error with the sign up");
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
          console.log(process.env.BACKEND_URL);
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/token",
            opts
          );
          if (resp.status !== 200) {
            // alert("there has been some error");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backend", data.access_token);
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
        const token = sessionStorage.getItem("token");

        const opts = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/profiles",
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data, "yooyoyoyo1");
            setStore({ profiles: data });
            // don't forget to return something, that is how the async resolves
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getQueue: async () => {
        const token = sessionStorage.getItem("token");

        const opts = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/queue",
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setStore({ queue: data });
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
            process.env.BACKEND_URL + `/api/profile/${id}`
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
      like: async (id) => {
        const token = sessionStorage.getItem("token");
        console.log("random", token);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            p2: id,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile/dates`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            alert(data.msg);
            console.log(data);
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      accept: async (date_uuid) => {
        const token = sessionStorage.getItem("token");
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            p2: date_uuid,
          }),
      }
      try {
        const resp = await fetch(
          process.env.BACKEND_URL + `/api/profile/dates/<string:date_uuid>`,
          opts
        );
        if (resp.ok) {
          const data = await resp.json();
          alert(data.msg);
          console.log(data);
          return data;
        }
      } catch (error) {
        console.log("Error loading message from backend", error);
      }
    },


      pendingDates: async () => {
        const token = sessionStorage.getItem("token");
        const opts = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile/dates/pending`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log("dates created", data);
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
