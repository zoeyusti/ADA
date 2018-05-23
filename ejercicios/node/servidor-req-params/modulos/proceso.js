exports.signo = function(m,d){

	let day = parseInt(d);

	switch(m){

		case '1': 
			if( day >= 21){

				return "Acuario";
			
			}else if(day<31|| day>1){

				return "Capricornio";
			}

		break;

		case '2': 
			if( day >= 21){

				return "Piscis";
			
			}else{

				return "Acuario";
			}

		break;


		case '3': 
			if( day >= 21){

				return "Aries";
			
			}else{

				return "Piscis";
			}

		break;


		case '4': 
			if( day >= 21){

				return "Tauro";
			
			}else{

				return "Aries";
			}

		break;


		case '5': 
			if( day >= 21){

				return "Geminis";
			
			}else{

				return "Tauro";
			}

		break;


		case '6': 
			if( day >= 21){

				return "Cancer";
			
			}else{

				return "Geminis";
			}

		break;


		case '7': 
			if( day >= 21){

				return "Leo";
			
			}else{

				return "Cancer";
			}

		break;


		case '8': 
			if( day >= 21){

				return "Virgo";
			
			}else{

				return "Leo";
			}

		break;


		case '9': 
			if( day >= 21){

				return "Libra";
			
			}else{

				return "Virgo";
			}

		break;


		case '10': 
			if( day >= 21){

				return "Escorpio";
			
			}else{

				return "Libra";
			}

		break;


		case '11': 
			if( day >= 21){

				return "Sagitario";
			
			}else{

				return "Escorpio";
			}

		break;


		case '12': 
			if( day >= 21){

				return "Capricornio";
			
			}else{

				return "Sagitario";
			}

		break;

	}

}