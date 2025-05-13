import NewsContainer from "@/containers/news";
import { Suspense } from "react";

export default function News() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsContainer />
      </Suspense>
    </>
  );
}
