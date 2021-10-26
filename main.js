var mouseEvent = 'empty';
var last_position_x,last_position_y;

Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

color = "black";
width = 1;
radius = 10;

Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;

    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - Canvas.offsetTop;


    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();

    }
    
    x = current_position_of_mouse_x;
    y = current_position_of_mouse_y;
    console.log(x);
    console.log(y);
    console.log(mouseEvent);
}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
function clearCanvas()
{
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
}
