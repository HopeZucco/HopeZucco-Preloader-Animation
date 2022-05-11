import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

const maintTL = gsap.timeline();
  
maintTL.from(MorphSVGPlugin.convertToPath("swirl"))
.from("swirl", {duration:1, drawSVG:"50% 50%"})
.from("swirl", {duration:1, fill:"brown"}, "-=75%")
.to("swirl", {duration:1, fill:"fff"})



;