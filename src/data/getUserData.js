import { USER_DATA_URL } from "../utils/constants";

export const getUserData = async () => {
  const response = await fetch(USER_DATA_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  console.log("result", result.users);
  return result.users;
};
