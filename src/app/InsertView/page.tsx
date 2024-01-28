import { supabase } from "@/lib/supabase";
import React from "react";

function InsertView() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({
      name: "Mahdi Hassani",
    });

    if (data) console.log(data);
    if (error) console.log(error);
  };

  setNewView();
  return <div>InsertView</div>;
}

export default InsertView;
