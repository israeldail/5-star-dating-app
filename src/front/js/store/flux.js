const defaultStore = {token: null,
  profiles: [],
  person: [],
  queue: [],
  waiting: [],
  pendingDates: [],
  accept: null,
  profile: {},
  pendingInvitations: [],
}

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: defaultStore,
    actions: {
      // Use getActions to call a function within a fuction

      dehydrate: () => {
        for (const key in getStore()) {
          sessionStorage.setItem(key, JSON.stringify(getStore()[key]));
        }
      },

      rehydrate: () => {
        for (const key in getStore()) {
          let update = {};
          update[key] = JSON.parse(sessionStorage.getItem(key));
          setStore(update);
        }
      },

      getName: (first_name) => {
        const store = getStore();
        setStore({ waiting: [...store.waiting, first_name] });
        const storage = localStorage.setItem("name", store.waiting);
        console.log(store.waiting);
        console.log(storage);
      },

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: JSON.parse(token) });
      },

      signup: async (email, password,first_name,last_name,bio,age) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            bio: bio,
            age: age,
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
          sessionStorage.setItem("token", JSON.stringify(data.access_token));
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error logging in");
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Logging out");
        setStore(defaultStore);
      },

      getProfile: async () => {
        // const token = sessionStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          headers: {
            Authorization: `Bearer ${getStore().token}`,
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
            console.log(data, "getting profile");
            setStore({ profiles: data });
            // don't forget to return something, that is how the async resolves
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getQueue: async () => {
        // const token = sessionStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          headers: {
            Authorization: `Bearer ${getStore().token}`,
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
            getActions().dehydrate();
            // don't forget to return something, that is how the async resolves
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getPerson: async (id) => {
        try {
          getActions().rehydrate();
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile/${id}`
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setStore({ person: data });
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      like: async (id) => {
        // const token = sessionStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getStore().token}`,
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
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      accept: async (date_uuid) => {
        // const token = sessionStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getStore().token}`,
          },
          body: JSON.stringify({
            p2: date_uuid,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile/dates/<string:date_uuid>`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            alert(data.msg);
            console.log(data);
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      pendingDates: async () => {
        // const token = localStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          headers: {
            Authorization: `Bearer ${getStore().token}`,
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
            setStore({ pendingDates: data });
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      pendingInvitations: async () => {
        // const token = localStorage.getItem("token");
        getActions().rehydrate();
        const opts = {
          headers: {
            Authorization: `Bearer ${getStore().token}`,
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile/dates/invited`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log("dates created", data);
            setStore({ pendingInvitations: data });
            getActions().dehydrate();
            return data;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      profile: async () => {
        getActions().rehydrate();
        const opts = {
          headers: {
            Authorization: `Bearer ${getStore().token}`,
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/profile`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data, "user data");
            setStore({ profile: data });
            getActions().dehydrate();
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
