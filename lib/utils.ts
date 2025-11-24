import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import type { AxiosResponse } from 'axios';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function authLogin(email: string, password: string) {
  try {
    const response: AxiosResponse = await axios.post("http://localhost:8080/auth/login", {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    return response.data;
  } catch(error:any) {
      throw error.response?.data || error;
    }
}
