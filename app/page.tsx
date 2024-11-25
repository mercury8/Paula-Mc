import React from "react";
import { Suspense } from "react";
import VideoComponent from "./ui/video-component";

function HomePage() {
  return (
    <section className="object-fill w-lvw overflow-hidden">
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent />
      </Suspense>
    </section>
  );
}

export default HomePage;
