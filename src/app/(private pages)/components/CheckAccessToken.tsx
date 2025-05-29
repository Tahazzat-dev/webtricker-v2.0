"use client";
import { getAccessToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function CheckAccessToken() {
  const router = useRouter();
  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return <></>;
}
