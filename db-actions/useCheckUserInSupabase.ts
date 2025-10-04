import supabase from "@/lib/supabase";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const useCheckUserInSupabase = () => {
  const { user, isLoaded } = useUser();
  const [exists, setExists] = useState<null | boolean>(null);

  useEffect(() => {
    const checkUser = async () => {
      if (!user || !isLoaded) return;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("uuid", user.id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Supabase error:", error);
      }

      setExists(!!data);
    };

    checkUser();
  }, [user, isLoaded, supabase]);

  return { exists, loading: exists === null };
};
