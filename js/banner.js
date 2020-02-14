document.getElementsByTagName('canvas')[0].remove();
const timelineDiv = document.getElementById('timeline');

function setup() {
	const div = document.createElement('div');
	div.style.height = div.style.width = '100%';
	timelineDiv.append(div);
  const CANVAS = createCanvas(div.offsetWidth, div.offsetHeight);
  div.remove();
  CANVAS.parent('timeline');
  bwidth = width-30;
  em = document.getElementsByTagName('h2')[0].offsetHeight/2;
  noStroke();
  textAlign(LEFT, TOP);
  textFont('CaviarDreams');
}
var windowResized = setup;

const events = [{
	name: "Wakeup!",
	time: 1581464897620,
	description: "The lorem ipsum fitnessgram pacer gram test is a multistage aerobic capacity."
}, {
	name: "CODE Meeting",
	time: 1581465783434,
	description: "The lorem ipsum fitnessgram pacer gram test is a multistage aerobic capacity."
}];
let $X = 0, em = 14;
let bwidth = 100;
function draw() {
	clear();
  for(let i = 0; i < events.length; i ++){
  	const x = i*width + $X;
  	if(x < -width) continue;
  	if(x > width) break;
  	const e = events[i];
  	push();
  	translate(x+15, 15);
  	fill(255, 40);
  	rect(0, 0, bwidth, height-30);
  	fill(0);
  	textSize(em);
  	text(e.name, 15, 15);
  	textSize(em/2);
  	text(e.description, 15, 15+em, bwidth-15, height-30);
  	textAlign(RIGHT, TOP);
  	text(new Date(e.time).toLocaleTimeString(), bwidth-15, 15);
  	pop();
  }
  for(let i = 0; i < events.length; i ++){
  	fill(255, Math.round(-$X/width)==i ? 140 : 40);
  	ellipse((width-events.length*20)/2 + 20*i, height-5, 10, 10);
  }
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && mouseIsPressed){
  	$X += (pmouseX - mouseX);
  }else{
  	$X -= ($X - constrain(Math.round($X/width)*width, -(width*events.length-width), 0)) / 7;
  }
}