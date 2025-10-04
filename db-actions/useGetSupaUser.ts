import supabase from "@/lib/supabase";
import { User } from "@/types";
import { useEffect, useState } from "react";

const useGetSupaUser = (clerkUserId: string | undefined) => {
  const [supaUser, setSupaUser] = useState<User | null>(null);
  const [isLoadingSupaUser, setIsLoadingSupaUser] = useState<boolean>(true);

  useEffect(() => {
    if (!clerkUserId) return;

    const fetchUser = async () => {
      setIsLoadingSupaUser(true);
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("uuid", clerkUserId)
        .single();

      if (error) {
        console.error("Error fetching SupaUser:", error);
        setSupaUser(null);
      } else {
        setSupaUser(data);
      }

      setIsLoadingSupaUser(false);
    };

    fetchUser();

    // Realtime Subscription for user updates
    const subscription = supabase
      .channel(`realtime-user-${clerkUserId}`)
      .on(
        "postgres_changes",
        {
          event: "*", // Listen for any changes (INSERT, UPDATE, DELETE)
          schema: "public",
          table: "users",
          filter: `uuid=eq.${clerkUserId}`, // Only listen for changes to the logged-in user
        },
        (payload) => {
          if (payload.eventType === "DELETE") {
            setSupaUser(null);
          } else {
            setSupaUser(payload.new as User);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription); // Cleanup on unmount
    };
  }, [clerkUserId]);

  return { supaUser, isLoadingSupaUser };
};

export default useGetSupaUser;
