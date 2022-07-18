function count(val){
			var num = document.getElementById("num");
			switch(val){
				case "=":
				num.value = eval(num.value);
				break;
				
				case "C":
				num.value = "";
				break;
				
				default:
				num.value = num.value+val;
				break;
			}
		}