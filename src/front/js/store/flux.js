const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			getProfile: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getProfile: async () => {
				let BACKEND_URL = "https://3001-israeldail-5stardatinga-s3sotg209b4.ws-us54.gitpod.io/"
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/profile")
					const data = await resp.json()
					console.log(data)
					setStore({ profile: data.profile })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			
		}
	};
};

export default getState;
