const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      profiles: [],
      person: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getProfile: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/profiles");
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
    },
  };
};

export default getState;
