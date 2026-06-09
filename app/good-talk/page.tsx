import { Suspense } from "react";
import type { Metadata } from "next";
import AfterCall from "@/components/AfterCall";

export const metadata: Metadata = {
  title: "Good talk — Connectors",
  description: "Thanks for the time. A short recap of what we covered is on its way.",
  robots: { index: false, follow: false },
};

export default function GoodTalkPage() {
  return (
    <Suspense fallback={null}>
      <AfterCall />
    </Suspense>
  );
}
