function setup() {
    createCanvas(500, 500);

    fill("gray");
    rect (50, 200, 100, 50); 
    fill("black");
    rect (175, 200, 100, 50); 
    fill("red");   
    rect (300, 200, 100, 50);
    fill("yellow");
    rect (25, 400, 100, 50);
}
    

function mouseDragged (){   
    background(random(130, 78));

    triangle (mouseX, mouseY, random(234, 55), random(9 , 435), random(324, 211), random(123, 10));
    // prevent default
    return false;
    
}



function mouseClicked(){
    if (mouseX > 50 && mouseX < 150 && mouseY > 200 && mouseY < 250) {
        fill("gray");
    }
    else if (mouseX > 175 && mouseX < 275 && mouseY > 200 & mouseY < 250) {
        fill("black"); 
    }
    else if (mouseX > 300 && mouseX < 400 && mouseY > 200 & mouseY < 250 ) {
        fill ("red");
    }
    else if (mouseX > 25 && mouseX < 125 && mouseY > 400 && mouseY < 450) {
            background ("white");
            setup();
        } 
    }



