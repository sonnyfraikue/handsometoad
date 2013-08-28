$('#catstrip').click(function(e){
	alert('yay');
})

function rmoveasset(tarid)
{
	myusefulInstance.removeasset(tarid, {  
		
		"onFinish": function(response){  
		if(response)
		{
			assetcall(userid);
		}
			
		}  
		});
}