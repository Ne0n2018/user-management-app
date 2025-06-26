import axios from "axios";
import { User, PaginatedUsers } from "../types";

export const userService = {
  async getUsers(page: number = 1): Promise<PaginatedUsers> {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    return response.data;
  },
  async getUser(id: number): Promise<User> {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    return response.data.data;
  },
  async createUser(user: User): Promise<User> {
    const response = await axios.post("https://reqres.in/api/users", user);
    return response.data;
  },
  async updateUser(id: number, user: User): Promise<User> {
    const response = await axios.put(`https://reqres.in/api/users/${id}`, user);
    return response.data;
  },
  async deleteUser(id: number): Promise<void> {
    await axios.delete(`https://reqres.in/api/users/${id}`);
  },
};
