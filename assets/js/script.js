// var imageArray = new Array();

// imageArray[0]= {
//     image01: new Image(),
//     image01.src: "my-image-01.png",  //"SyntaxError: missing : after property id"
//     imageCaption: "An image caption"
//     };

// imageArray[1] = {
//     image02: new Image().
//     image02.src: "my-image-02.png",
//     imageCaption: "Another image caption"
//     }


function createImage(src, title) {
  	var img   = new Image();
  	img.src   = src;
  	img.alt   = title;
  return img; 
}

var cuartaProm_chile = [];
var quintaProm_lima = [];
var sextaProm_lima = [];

cuartaProm_chile.push(createImage("assets/img/4-chile/anaisaraya.jpg","Anais Araya"));
cuartaProm_chile.push(createImage("assets/img/4-chile/andreamiranda.jpg", "Andrea Miranda"));
cuartaProm_chile.push(createImage("assets/img/4-chile/berenisserios.jpg", "Berenisse Rios"));
cuartaProm_chile.push(createImage("assets/img/4-chile/caterinadasilva.jpg", "Caterina Da Silva"));
cuartaProm_chile.push(createImage("assets/img/4-chile/danielasanchez.jpg", "Daniela Sanchez"));
cuartaProm_chile.push(createImage("assets/img/4-chile/franciscaojeda.jpg", "Francisa Ojeda"));
cuartaProm_chile.push(createImage("assets/img/4-chile/katerinesandoval.jpg", "Katerine Sandoval"));

quintaProm_lima.push(createImage("assets/img/5-lima/andreacabrera.jpg", "Andrea Cabrera"));
quintaProm_lima.push(createImage("assets/img/5-lima/ariadnaizaguirre.jpg", "Ariadna Izaguirre"));
quintaProm_lima.push(createImage("assets/img/5-lima/caritojuarez.jpg", "Carito Juarez"));
quintaProm_lima.push(createImage("assets/img/5-lima/cristycastro.jpg", "Cristy Castro"));
quintaProm_lima.push(createImage("assets/img/5-lima/karolorrillo.jpg", "Karol Orillo"));
quintaProm_lima.push(createImage("assets/img/5-lima/paolaortiz.jpg", "Paola Ortiz"));
quintaProm_lima.push(createImage("assets/img/5-lima/teresalara.jpg", "Teresa Lara"));

sextaProm_lima.push(createImage("assets/img/6-lima/arantzaburga.jpg", "Arantza Burga"));
sextaProm_lima.push(createImage("assets/img/6-lima/daguianarevoredo.jpg", "Daguiana Revoredo"));
sextaProm_lima.push(createImage("assets/img/6-lima/elizabethcondori.jpg", "Elizabeth Condori"));
sextaProm_lima.push(createImage("assets/img/6-lima/greciarayme.jpg", "Grecia Rayme"));
sextaProm_lima.push(createImage("assets/img/6-lima/janinevega.jpg", "Janine Vega"));
sextaProm_lima.push(createImage("assets/img/6-lima/michellemore.jpg", "Michelle Mora"));
sextaProm_lima.push(createImage("assets/img/6-lima/mishelvelasquez.jpg", "Mishel Velasquez"));
sextaProm_lima.push(createImage("assets/img/6-lima/rosariofelix.jpg", "Rosario Felix"));

for(var i = 0; i<cuartaProm_chile.length; i++){
	document.getElementById("imagenes").appendChild(cuartaProm_chile[i]);
}
for(var i = 0; i<quintaProm_lima.length; i++){
	document.getElementById("imagenes").appendChild(quintaProm_lima[i]);
}
for(var i = 0; i<sextaProm_lima.length; i++){
	document.getElementById("imagenes").appendChild(sextaProm_lima[i]);
}

document.getElementById("select").addEventListener("change",function(){
	document.getElementById("imagenes").innerHTML = "";

	switch(this.value) {
    	case "cuartaChile":
        	for(var i = 0; i<cuartaProm_chile.length; i++){

    //     		var newDiv = document.createElement("div");
				// var newText = document.createElement("textArea");
    //     		newDiv.appendChild(newText);
				// newDiv.appendChild(cuartaProm_chile[i]);
				
				document.getElementById("imagenes").appendChild(cuartaProm_chile[i]);	
			}
        	break;
    	case "quintaLima":
        	for(var i = 0; i<quintaProm_lima.length; i++){
				document.getElementById("imagenes").appendChild(quintaProm_lima[i]);
			}
        	break;
   		case "sextaLima":
        	for(var i = 0; i<sextaProm_lima.length; i++){
				document.getElementById("imagenes").appendChild(sextaProm_lima[i]);
			}
        	break;
	}
});
