import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";
const COUNT_LIMIT = 6;

export const getUsers = async (page) => {
  const { data } = await axios.get(
    `/users?page=${page}&count=${COUNT_LIMIT}&sort=registration_timestamp`
  );

  return data;
};

export const addUser = async (formData, token) => {
   console.log("hi,I'm token: ",token);
   console.log("this is: ",formData);
   const newUser = await axios.post("/users", formData, {
     headers: {
       Token: ` ${token}`,
      
       "Content-Type": " multipart/form-data",
     },
   });
 
  console.log(newUser);
  return newUser;
};

export const getToken = async () => {
  const { data } = await axios.get("/token",);
  // console.log(token);
  return data;
};


