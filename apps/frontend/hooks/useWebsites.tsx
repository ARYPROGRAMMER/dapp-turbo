import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export function useWebsites() {
  const { getAuth } = useAuth();
  useEffect(() => {
    const auth = getAuth();
    axios.get()
    if (auth) {
      console.log(auth);
    }
  },[]);
}
