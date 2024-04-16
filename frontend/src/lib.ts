"use server"

import { cookies } from "next/headers";

export async function logout() {
  // Destroy the session
  cookies().set("jwt", "", { expires: new Date(0) });
}

export async function getSession() {
  
  console.log("WCZYTUJE")
  const session = cookies().get("jwt")?.value;
  console.log(session)
  if (!session) return null;

  return session
}


