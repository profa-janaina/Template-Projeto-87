
// criar uma variável para o canvas

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// enviar as imagens

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{	block_x = 0;
	 //envie a imagem do Ranger Escarlate
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		new_image('gr.png'); 
		console.log("g");
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		new_image('yr.png'); 
		console.log("y");
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		new_image('pr.png'); 
		console.log("p");
	}
	if(keyPressed == '73')
	{
		block_x = 700;
		new_image('br.png'); 
		console.log("b");
	}
	
}

