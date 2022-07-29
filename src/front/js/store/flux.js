const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      getProfile: [],
      profile: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getProfile: async () => {
        let BACKEND_URL =
          "https://3001-israeldail-5stardatinga-5bwzkz0n44u.ws-us54.gitpod.io";
        try {
          // fetching data from the backend
          const resp = await fetch(BACKEND_URL + "/api/profile");
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setStore({ profile: data });
            // don't forget to return something, that is how the async resolves
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
