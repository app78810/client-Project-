$(document).ready(function(){
	$('#order').on('click', function(){
		var items = $('table input[type="checkbox"]');
		var finalPrice = 0;
		var unCheckedItem = 0;
		//console.log("Hello");
		for(var i=0;i<items.length;i++){
			if(items[i].checked){
				var id = items[i].id;
				var qu = $('#'+id+'_quan').val();
				if(qu == ""){
					$('#errormsg').text('Please enter the quantity');
					return false;
					
				}
				qu = parseInt(qu);
				var price = parseFloat($('#'+id+'_price').text().replace('$',''));
				finalPrice += (qu*price);
			}else{
				unCheckedItem++;
			}	
		}
		if(unCheckedItem == items.length)
			$('#errormsg').text('Please select an items to continue order.');
		else
			$('#out').text('Your order has been placed succesfully. Your amout of order is: $'+finalPrice);
	});
});