gsap.from(".nav img" , {
  delay: 1, 
  duration: 4,
  x: -200,
  ease: "expo.inOut",
});  

gsap.from(".nav p" , {
  delay: 2, 
  duration: 4,
  x: 600, 
  ease: "expo.inOut",
}); 

gsap.from(".num h1" , {
  delay: 5, 
  duration: 4,
  y: -200, 
  ease: "elastic",
  rotate: 360, 
}); 

gsap.from(".column img" ,{
  delay: 7, 
  duration: 4,
  x: -500, 
  ease: "elastic"
}); 

gsap.from(".nun p" , {
  delay: 8, 
  duration: 4,
  x: 600,
  ease: "expo.inOut",
});

gsap.from(".back", {
	delay: 1,
	duration: 2,
	scale: 2,
	ease: 'expo.inOut',
})