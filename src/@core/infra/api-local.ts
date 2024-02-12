import axios from "axios";

export const apiLocal = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      "content-Type": "application/json",
    },
  });