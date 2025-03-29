import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/TechConstants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [visibleCount, setVisibleCount] = useState(10); // Start with 10 items
  const loaderRef = useRef(null); // Ref for the loader element

  // Function to load more items
  const loadMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 10, technologies.length)
    );
  };

  // Intersection Observer to detect when the loader is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // Load more items when the loader is visible
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.slice(0, visibleCount).map((tech, index) => (
          <div key={index} className="w-28 h-28">
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
      {visibleCount < technologies.length && (
        <div ref={loaderRef} className="mt-10">
          <p>Loading more...</p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
