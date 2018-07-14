var favoritos = [];

$('.fa-heart').on('click', function(){
	var nombre = $(this).data('id');
	console.log(nombre)
	$(this).toggleClass('favorito');

$.ajax({
          url: "/poke/favoritos",
          type: "post",
          data:{info: JSON.stringify({'favorito':nombre})},
        
          success: function (response) {
             if(response){
                 console.log("todo bien " +response);
                   
            }else{
                  alert("error");
            }       
          },
          error: function(response) {
                  console.log("todo mal");
          }
        }); 	
});

                            

//console.log(favoritos);