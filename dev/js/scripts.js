import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//register all plugins
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin (MorphSVGPlugin);
gsap.registerPlugin (DrawSVGPlugin);
gsap.registerPlugin (MotionPathHelper);

//const mainTL = gsap.timeline({id:"mainTL"});


//maintTL.from("#swirl", {duration: 3, drawSVG:0})
 //maintTL.from ("swirl", {duration: 3, x: 200})


const maintTL = gsap.timeline();
  
//maintTL.from(MorphSVGPlugin.convertToPath("swirl"))
//.from("swirl", {duration:1, drawSVG:"50% 50%"})
//.from("swirl", {duration:1, fill:"brown"}, "-=75%")
//.to("swirl", {duration:1, fill:"fff"})

//maintTL.from("#swirl", {duration: 3, drawSVG:0})
 maintTL.from ("swirl", {x: 200})


;