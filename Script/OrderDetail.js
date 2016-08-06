var p = ""; 

var errormsg = ""; 

function calculate()


			{
				
				if(document.getElementById('pakora').checked==true)
				{
				
					if(document.getElementById('quant1').value== null)
					{
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var x=document.getElementById("quant1").value;
						
						//var p = "";
						p += 5*x;
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
						
					}
				}
				else if(document.getElementById('nan').checked==true)
				{
					
					if(document.getElementById('quant2').value== null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var y =document.getElementById("quant2").value;
						
						p += 2*y;
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
				
					}
				}
				else if(document.getElementById('paneer').checked==true)
				{	
				
					if(document.getElementById('quant3').value== null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var z =document.getElementById("quant3").value;
					
						p += 10*z;
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;	
					}
				}
				else if(document.getElementById('korma').checked==true)
				{	
					
					if(document.getElementById('quant4').value== null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var a =document.getElementById("quant4").value;
						
						p += 15*a;
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
				
					}
				}
				else if(document.getElementById('raita').checked==true)
				{	
				
					if(document.getElementById('quant5').value== null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var b =document.getElementById("quant5").value;
						
					 p += 4*b;
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					
					}
				}
				else if(document.getElementById('rice').checked==true)
				{	
					
					if(document.getElementById('quant6').value == null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var c = document.getElementById("quant6").value;
						
						p += 4*c;
						
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					}
				}
				else if(document.getElementById('samosa').checked==true)
				{	
					
					if(document.getElementById('quant7').value == null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var d = document.getElementById("quant7").value;
						
						p += 4*d;
						
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					}
				}
				else if(document.getElementById('garlic').checked==true)
				{	
					
					if(document.getElementById('quant8').value == null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var e = document.getElementById("quant8").value;
						
						p += 4*e;
						
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					}
				}
				else if(document.getElementById('tikka').checked==true)
				{	
					
					if(document.getElementById('quant9').value == null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var f = document.getElementById("quant9").value;
						
						p += 4*f;
						
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					}
				}
				else if(document.getElementById('tandoori').checked==true)
				{	
					
					if(document.getElementById('quant10').value == null)
					{
						
						alert("Please enter the Quantity");
						return false;
					}
					else
					{
						var g = document.getElementById("quant10").value;
						
						p += 4*g;
						
						document.getElementById("out").innerHTML += "Your Order has been placed Successfully. The Price of the Order is : " + p;
					}
				}
				
					
}
				


