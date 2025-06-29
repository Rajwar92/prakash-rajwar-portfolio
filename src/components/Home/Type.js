import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Technical Content Specialist",
          "Docs-as-Code Advocate",
          "Markdown & GitHub Enthusiast",
          "AI-Powered Writer",
          "Developer Experience Champion",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
