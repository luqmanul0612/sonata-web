import ComingSoonContainer from "@/containers/coming-soon";
import { Suspense } from "react";

export default function ComingSoon() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ComingSoonContainer />
      </Suspense>
    </>
  );
}
