"use client";
import React, { useState, useEffect } from "react";
import Addproducte from "@/components/Dashboardseller/Addproducte";
import CheckStoreSettings from "@/components/Dashboardseller/CheckStoreSettings";
import { getStoreSettings } from "@/lib/serverActions";

export default function AddproductePage() {
  const [infoCompleted, setInfoCompleted] = useState(false);

  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const data = await getStoreSettings();
        console.log("Data received:", data);

        if (data && data.store) {
          const { storeName, storeDescription } = data.store;
          if (storeName && storeDescription) {
            setInfoCompleted(true);
          } else {
            setInfoCompleted(false);
          }
        } 
      } catch (error) {
        console.error("Error fetching data:", error);
        setInfoCompleted(false);
      }
    };

    fetchAccountSettings();
  }, []);

  return (
    <div>
      {infoCompleted ? (
        <Addproducte />
      ) : (
        <CheckStoreSettings/>
      )}
    </div>
  );
}
