import { createRoot } from "react-dom/client";
import Topography from "@/components/Topography";
import "./index.css";

const mountNode = document.getElementById("hero-bg-root");

if (!mountNode) {
  throw new Error("Missing hero background mount point.");
}

createRoot(mountNode).render(
  <Topography
    color="#aeb4bd"
    lineCount={14}
    lineWidth={1}
    majorLines={false}
    elevation={0.8}
    detail={0.12}
    tilt={44}
    speed={0}
    morph={0}
    glow={0.2}
    depthOfField={0.1}
    fog={0.5}
    brightness={0.7}
    opacity={0.8}
    mouseInteraction={false}
    trail={0}
    parallax={0}
    clickEffect="none"
    markers="none"
    glitch={0}
    intro={false}
  />,
);
