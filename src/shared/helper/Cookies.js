"use server";
import { cookies } from "next/headers";
export const setCookie = async (
  name = process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  value,
  options = {}
) => {
  const cookiesStore = await cookies();
  cookiesStore.set(name, value, options);
};

export const getCookie = async (name) => {
  const cookiesStore = await cookies();
  return cookiesStore.get(name);
};

export const removeCookie = async (name) => {
  const cookiesStore = await cookies();
  cookiesStore.delete(name);
};

export const getCookies = async () => {
  const cookiesStore = await cookies();
  let cookie = cookiesStore.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN)?.value;
  let parsedCookie = await JSON.parse(cookie || "{}");
  return parsedCookie;
};
