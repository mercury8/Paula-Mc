import React from "react";
import { Suspense } from "react";
import VideoComponent from "./ui/video-component";

function HomePage() {
  return (
    <section className="object-fill w-lvw overflow-hidden">
      <Suspense
        fallback={
          <div
            className="w-12 h-12 rounded-full animate-spin
                       border border-solid border-accent border-t-transparent"
          ></div>
        }
      >
        <VideoComponent />
      </Suspense>
    </section>
  );
}

export default HomePage;
