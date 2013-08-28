$(window).load(function(){
	
	$('#useraddproduct').click(function(){
		if($(this).val() == 'Product name ?')
		{
			$(this).val(null)
			$('#noticediv').text('Please type a name for your product.')
		}
			
			
	})
	
	$('#useraddproduct').keyup(function(){
		if($(this).val() === '')
		{
		$('#productbtn').fadeOut('fast', function() {});
		}
		else
		{
		$('#productbtn').fadeIn('fast', function() {});	
		}
	})
	
	
	$('#productbtn').click(function(){
		$('#noticediv').text('Please wait...')	
		
		myusefulInstance.checkproduct($('#useraddproduct').val(),userid, {  
			"onFinish": function(response){			
			if(response)
			{
				if(response == 'sorry the product already exists')
				{
					$('#noticediv').fadeOut('slow', function() {});
					$('#noticediv').text('Someone else beat you to it! Sorry.');
					$('#noticediv').fadeIn('fast', function() {});			
				}
				else
				{
					$('#noticediv').fadeOut('slow', function() {});
					$('#noticediv').html('Congrats! you have created <span style="color:green;text-transform:uppercase;">'+$('#useraddproduct').val()+'</span>, we will be in contact shortly to complete your product setup');
					$('#noticediv').fadeIn('fast', function() {});			
				}	
			}
			
			}
		})
		
		
		
		
		
	})
	
	
	
})	