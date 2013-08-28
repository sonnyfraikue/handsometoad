$(window).load(function(){
	
	var rbtn	=	document.getElementById('rotate');
	var cbtn	=	document.getElementById('crop');
	
	if(autocarousel == 0)
	{

	}
	else
	{

		 $("#clpsdiv1").slideToggle("fast");
		 $("#clpsdiv2").slideUp("slow");
		 $("#clpsdiv3").slideUp("slow");
		 switchBg(1);
		 calltemplates(jid);
	}
	
var jcrop_api;

$('#regerror').effect("pulsate", {times:3}, 500);
$('#atc').effect("pulsate", {times:3}, 1000);
$('.ptimg').click(function(e){
	alert(e.target.id)
})
$('.activate').click(function(e){
	var asnumber	=	(e.target.style.backgroundColor == 'red')?0:1;
	var newcolor	=	(e.target.style.backgroundColor == 'red')?'#eee':'red';
	var splituid	=	e.target.id.split('activate');
	//$(this).css('background-color',newcolor);
	
	myusefulInstance.togglepublish(splituid[1],asnumber, {  
		"onFinish": function(response){  
		if(response == 1)
		{
			e.target.style.backgroundColor = newcolor
		}
		else
		{
			alert('menu item has been created')
		}
	}
	})
	
})


$('#templatebox').click(function(){
	$('#picker').fadeOut('fast', function() {});
})

$('#atc').click(function(e){
	var newfile	=	$('#ulimg').attr('src').replace(/thumb/,'workfile')
	
	myusefulInstance.job_images_apply(jid,$('#upload_id').val(),parseInt($('#curpage').html()), {  
		"onFinish": function(response){  
		if(response)
		{
			alert('done')
		}
	}
	})
	
	$('#cropbox').attr('src',newfile)
})

$('#alignment').click(function(e) {
	
	disablejc();
	$('#myc').fadeOut('fast', function() {
        // Animation complete
      });
});
//
$('#logo').click(function(e) {
	document.location.href	=	httphost;
});
/*
if($('#selprod').val() != 'Select product')
{
	if(window.location.href.match(/template/))
	{
initialcall();
	}
}*/

$('#inte').click(function(e){

		$('#tmptxt').fadeIn('slow',function(e){
			$('.pop').fadeIn('slow',function(e){
				
			})
		})
		
})

//show registered alert


function initialcall()
{
	if($('#selprod').val() != 'Select product')
	{		
		if(!$('#curpage').val()){
			$('#curpage').val(1)
		}
	 $('#temprodlabel').fadeIn('fast',function(){
			$('#temprods').fadeIn('fast',function(){
				$('#inte').fadeIn('slow',function(){
					$(this).click(function(e){					
						$('#tmptxt').fadeIn('slow',function(e){
							$('.pop').fadeIn('slow',function(e){
								
							})
						})
						
					})
				})	
			})	
		})
		
		showtemplateps('selprod')
		
		
		var templatebox		=	document.createElement('div');
		
		var pid				=	$('#selprod').val()
		templatebox.setAttribute('id','templatebox');
		templatebox.style.width		=	'331px';
		templatebox.style.height	=	'468px';
		templatebox.style.position	=	'relative';
		templatebox.style.zIndex	=	'2'; 
		templatebox.style.overflow	=	'hidden';
		templatebox.style.backgroundColor	=	'#eee';
		
		$(templatebox).click(function(){
		//hiding color picker
			$('#picker').fadeOut('fast', function(){})
		})		
		$('#tarea').html(templatebox);		
		showpgnums()
	}
	else
	{
		$('#cpnotice').html('<p>Ok, choose a product to start.</p>');
		 $('#cpnotice').effect("pulsate", {times:3}, 500);
		//templatebox
		$('#templatebox').fadeOut('fast', function() {
			$('#temprods').fadeOut('fast', function() {
				$('#temprodlabel').fadeOut('fast', function() {
					$('#pgholder').fadeOut('fast', function() {
						$('#cpnotice').fadeOut('fast', function() {
							$('#inte').fadeOut('fast', function() {
								$('#instext').fadeOut('fast', function() {
									$('#insimg').fadeOut('fast', function() {
								        // Animation complete
										
								      });
							      });
						      });
					      });
						      });
			      });
		      });
	      });
	}
		
}

function showpgnums()
{
	if($('#numpages').val()){
	pgholder			=	document.getElementById('pgholder');
	pgholder.innerHTML	=	'Page(s) >>';
	$('#prholder').html(null);
				
			i = 1;
			while(i <= parseInt($('#numpages').val()))
			{
				alink	=	document.createElement('a');
				alink.setAttribute('id',i);
				alink.setAttribute('class','pgs');
				alink.setAttribute('href','#');
				alink.innerHTML	=	i;
				alink.style.marginLeft	=	'5px';
				alink.style.marginRight	=	'5px';
				alink.style.fontSize	=	'13px';				
				$(alink).click(function(e){
					setpage(e,$('#selprod').val());
				})
				
				pgholder.appendChild(alink);				
				i++;
			}			
			$('#'+$('#curpage').val()).css('border','1px solid #000000')
		
			$(pgholder).fadeIn('fast', function() {
        // Animation complete
      });
	}
}


$('#cnbtn').click(function(e){
	
$('#templates, #templatelabel').fadeIn('fast', function() {
		
	})
	initialcall()	
})
//
$('#templatedivs').click(function(e){
	//showtemplateproduct
	$('#cpnotice').fadeIn('fast', function() {
		$('#cpnotice').text('Good! now you can create new templates by clicking the "+" sign to your right or you can select already asigned templates "product-templates" located bottom right to work on.')
		$('#cpnotice').css('color','#000')
		$('#cpnotice').css('font-size','10px')
	});
	
	$('#templates, #templatelabel').fadeOut('fast', function() {		
	})
	
	initialcall()	
})


$('.roundify_smt').click(function(e){
	var tid	=	e.target.id.replace(/dt/,'');
	
	myusefulInstance.deletetemp(tid, {  
		"onFinish": function(response){  
		if(response)
		{
			window.location.reload();
		}
	}
	})
	
})

$('#rotat').click(function(e){
	var newwidth	=	$('#templatebox').css('width');
	var newheight	=	$('#templatebox').css('height');
	$('#templatebox').css('width',newheight);
	$('#templatebox').css('height',newwidth);
})


function showtemplateps(id)
{
	
	myusefulInstance.showtemplateproduct($('#'+id).val(), {  
		"onFinish": function(response){  
			
		$('#temprods').html(null);
		if(response)
			{
				var templateArray	=	response.split('&&');
				var	i	=	0;
				while(templateArray[i])
				{
					
					var templateElements		=	templateArray[i].split(',');
					var templatediv				=	document.createElement('div');
					var examplespan				=	document.createElement('span');
						examplespan.innerHTML	=	templateElements[2];
						templatediv.setAttribute('class','templatedivs1')
						templatediv.setAttribute('title','click to view or manage objects')
						templatediv.setAttribute('id','pt'+templateElements[0]+'num'+templateElements[3])
						//templatediv.style.backgroundColor	=	(($('#tempname').val()) == templateElements[0]&&parseInt(templateElements[3]) == 1)?'yellow':null;
						templatediv.innerHTML	=	templateElements[0]+'. '+templateElements[1];
						//creating pagenum div
					var	pgnumdiv				=	document.createElement('div');
						pgnumdiv.setAttribute('class','pgnmdv');
						pgnumdiv.style.width	=	'30px';
						pgnumdiv.style.height	=	'15px';
						pgnumdiv.style.backgroundColor	=	'green';
						pgnumdiv.style.position	=	'absolute';
						pgnumdiv.style.right	=	'20px';
						pgnumdiv.style.top		=	'-8px';
						pgnumdiv.style.zIndex	=	'6';
						pgnumdiv.style.color	=	'#fff';
						pgnumdiv.style.fontSize	=	'8px'
						pgnumdiv.style.textAlign	=	'center';
						
						pgnumdiv.innerHTML		=	'pg '+templateElements[3];
						
					var clst					=	document.createElement('div');
						clst.setAttribute('class','roundify_smt');
						clst.setAttribute('id','clst'+templateElements[4])
						clst.style.width		=	'15px';
						clst.style.height		=	'15px';
						clst.style.textAlign	=	'center';
						clst.style.position		=	'absolute';
						clst.style.top			=	'-8px';
						clst.style.right		=	'-5px';
						clst.style.backgroundColor	=	'red';
						clst.style.color			=	'#fff';
						clst.style.fontWeight		=	'bold';
						clst.style.fontSize			=	'12px';
						clst.innerHTML	=	'x'
						
						$(clst).click(function(e){
								did	=	e.target.id.replace(/clst/,'');
								myusefulInstance.rtp(did, {
									"onFinish": function(response){ 
									showtemplateps('selprod')									
								}
								});								
						})						
						
						$(templatediv).click(function(e){
							//unhighlighting templates	
							$('.templatedivs1').css('background-color','#A4FFCD')
							$(this).css('background-color','yellow')
							
							$('#cpnotice').css('color','#000000')
							$('#cpnotice').html('<p><b>Customize your template</b></p><p>Add text and a background image using the toolbar below.</p>');
							$('#picker').fadeOut(function(e){})
							//showtemplateps('selprod')
							$('#instext').fadeIn(function(e){
							})
							$('#insimg').fadeIn(function(e){
							})
							
							tidarray =	e.target.id.replace(/pt/, '').split('num')
							tid	=	tidarray[0];
							$('#curpage').val(tidarray[1]);
							
							
							$('#tempname').val(tid)
							
							myusefulInstance.saypages($('#'+id).val(), {  
							 "onFinish": function(response){  
							if(response)
							{
								var response	=	parseInt(response);
								$('#numpages').val(response)
								showpgnums()					
							}
								}  
							});
							shwobj(e,tid,'templatebox');							
							applytemplate(tid,'templatebox');
							templateuploader();
						})
						
						$(templatediv).append(clst);
						$(templatediv).append(pgnumdiv);
						//$(templatediv).append(examplespan);
						$('#temprods').append(templatediv);
					i++;
				}
				
				
				
			}
	}
	})
}

$('#tmptxtc,#tmptxtc1').click(function(e){
	window.location.reload();
})

function insntmp()
{	
	myusefulInstance.newtemplate($('#templatename').val(),$('#templatexample').val(),$('#curpage').val(),$('#selprod').val(), {
		"onFinish": function(response){
		if(response)
		{
			$('#chpid').css('display','none');
			$('#tempname').val(response)
			//alert(response);
			myusefulInstance.tempintoprod(response,$('#selprod').val(),$('#curpage').val(), {
				"onFinish": function(response){
				initialcall();
			}
			})
			
		}
	}
	});	
}



/*$('.templatedivs').click(function(e){
	
	if($('#curpage').val()&&$('#'+e.target.id).attr('class') == 'templatedivs')
	{
		
	$('#cpnotice').fadeIn('fast', function() {
        // Animation complete
      });
	
	var tid	=	e.target.id.replace(/te/,'');
	$('#tempname').val(tid)
	applytemplate(tid,'templatebox');
	
	myusefulInstance.pname($('#selprod').val(), {  
		"onFinish": function(response){  
			if(response)
			{
				var yesdiv	=	document.createElement('div');
				yesdiv.setAttribute('id','atp');
				yesdiv.style.width	=	'50px';
				yesdiv.style.height	=	'20px';
				yesdiv.style.backgroundColor	=	'#fff';
				yesdiv.style.color	=	'#000';
				yesdiv.style.position	=	'absolute';
				yesdiv.style.top	=	'45px';
				yesdiv.style.left	=	'20px';
				yesdiv.style.cursor	=	'pointer';
				yesdiv.style.lineHeight	=	'20px';
				yesdiv.innerHTML	=	'Add';
				
				var nodiv	=	document.createElement('div');
				nodiv.setAttribute('id','ntp');
				nodiv.style.width	=	'50px';
				nodiv.style.height	=	'20px';
				nodiv.style.backgroundColor	=	'#fff';
				nodiv.style.color	=	'#000';
				nodiv.style.position	=	'absolute';
				nodiv.style.top	=	'45px';
				nodiv.style.right	=	'20px';
				nodiv.style.cursor	=	'pointer';
				nodiv.style.lineHeight	=	'20px';
				nodiv.innerHTML	=	'Cancel';
				$(nodiv).click(function(){
					$('#cpnotice').fadeOut('fast', function() {
						$('#templatebox').html('');
				      });
				})
				
				$(yesdiv).click(function(){
					//tmptxt
					//$('#templates, #templatelabel').css('display', 'block');
					$("body").append($("#templates").css({width: '225px', right:'5px', position:'absolute', marginTop:'0px',top:'418px'}));
					$('#templatelabel').css('display','block')
					$('#chpid').css('display','none');
					initialcall();
					
					if($('#tempname').val())
					{
					$('#instext').fadeIn('fast', function() {
				        // Animation complete
				      });
					
					myusefulInstance.tempintoprod($('#tempname').val(),$('#selprod').val(),$('#curpage').val(), {  
						"onFinish": function(response){  
							if(response)
							{
								showtemplateps('selprod')		
								$('#cpnotice').fadeOut('fast', function() {
							        // Animation complete
							      });
							}
					}
					})
					}					
					
				})
				
				$('#cpnotice').html('You are about to add <br/>'+$('#'+e.target.id).html()+' to page ['+$('#curpage').val()+'] of ['+response+']<br/>');
				$('#cpnotice').append(yesdiv);
				$('#cpnotice').append(nodiv);
				$('#chpid').append($('#cpnotice').css('left','100px'))
			}
	}
	})	
	
	}
	else
	{
		if($('#'+e.target.id).attr('class') == 'templatedivs')
		{
		$('#cpnotice').css('font-size','12px');
		$('#cpnotice').css('color','red')
		$('#cpnotice').html('Choose a product please.')
		$('#cpnotice').fadeIn('fast', function() {
	        // Animation complete
	      });
		}
	}
	
})*/

function applytemplate(tid,areaid)
{
	$('#templatebox').html(null)
	myusefulInstance.timage(tid,$('#curpage').val(), {  
		"onFinish": function(response){  
			if(response)
			{
				var	responseArray	=	response.split('&&');
				var	templateImg	=	document.createElement('img');
				//templateImg.setAttribute('width',)
				var imgurl	=	responseArray[0]
				templateImg.src	=	imgurl;
				templateImg.style.position	=	'absolute';
				templateImg.style.left	=	'0px';
				templateImg.style.top	=	'0px';
				templateImg.style.zIndex	=	'3';
				$(templateImg).attr('id','templateimg')
				
				if(areaid == 'templatebox')
				{					
					var newwidth			=	parseInt(responseArray[1]);
					var newheight			=	parseInt(responseArray[2]);
					var	longerside			=	(parseInt($('#templatebox').css('width')) > parseInt($('#templatebox').css('height')))?parseInt($('#templatebox').css('width')):parseInt($('#templatebox').css('height'));
					var shorterside			=	(parseInt($('#templatebox').css('width')) < parseInt($('#templatebox').css('height')))?parseInt($('#templatebox').css('width')):parseInt($('#templatebox').css('height'));;
					
					if(newwidth > newheight)
					{
						$('#templatebox').css('width',longerside);
						$('#templatebox').css('height', shorterside);
						
						templateImg.style.width		=	longerside+'px';
						templateImg.style.height	=	shorterside+'px';
					}
					else
					{
						$('#templatebox').css('width',shorterside);
						$('#templatebox').css('height', longerside);
						
						templateImg.style.width		=	shorterside+'px';
						templateImg.style.height	=	longerside+'px';
					}
				}
				$('#'+areaid).append(templateImg);
				$(templateImg).fadeIn('slow',function(){})
				/*if(areaid == 'templatebox')
				{
                                    alert('sizecheck to be called here')
		 	          myusefulInstance.sizecheck(imgurl, {
		 				"onFinish": function(response){  
		 				if(response == 'fail')  
		 				{//here we know upload is NO GOOD
		 					//creating mask
		 					$('#cpnotice').html('Incorrect file size - check file and try again. <a target="_blank" href="http://en.wikipedia.org/wiki/File:A_size_illustration2_with_letter_and_legal.svg" style="font-size:12px;color:#ff0000;">Supported sizes range from A0 to A6</a>');
		 					
		 					$('#cpnotice').fadeIn('fast',function(){})
		 					//$('#instext').fadeOut('fast',function(){})
		 					//$('#insimg').fadeOut('fast',function(){})
		 					var maskdiv	=	document.createElement('div')
		 					$(maskdiv).css({'width':$('#templatebox').css('width'),'height':$('#templatebox').css('height'),'position':'relative','z-index':100,'display':'none'})
		 					$(maskdiv).attr('id','maskdiv')
		 					$('#templatebox').append(maskdiv);
		 					$(maskdiv).fadeIn('slow',function(){})
		 				}
		 				}  
		 				});
				}*/
			}
	}
	})
	
	
}

function setpage(e,pid)
{
	$('.pgs').css('color','#000000');
	e.target.style.color	=	'#ff0000';
	$('#curpage').val(e.target.id);
	$('.templatedivs1').css('background-color','#A4FFCD')
	$('#pt'+$('#tempname').val()+'num'+e.target.id).css('background-color','yellow')
	showpgnums()
	$('#templatebox').html(null);
	applytemplate(tid,'templatebox');
	shwobj(e,tid,'templatebox');
}

$('#next').click(function(e){	
	myusefulInstance.productid(jid, {
		"preloader":"gpr", 
		"onFinish": function(response){ 
		shwobj('',response,'cropboxholder');
	}
	});
	
})

function deleteobj(objid)
{
	//dobj
	myusefulInstance.dobj(objid, {
		"preloader":"gpr", 
		"onFinish": function(response){ 
		if(response)
		{
			var objidnew	=	objid.replace(/cl/,'tb');
			
			$('#'+objidnew).fadeOut('fast', function(){
				
			})
		}
		else
		{
			alert('fail')
		}
		
	}
	});
	
	$('#closer').fadeOut('fast', function(){
		
	})
}

function shwobj(e,tid,targetid)
{
	if(targetid == 'templatebox')
	{
		//$('#tempname').val(e.target.id)
		var pg = $('#curpage').val();
if(!pg)
{
	$('#cpnotice').html('<br/>Im displaying page objects for page 1 choose other if I am wrong!');
	$('#cpnotice').css('color','red');
	$('#cpnotice').css('font-size','12px');
	$('#cpnotice').effect("pulsate", {times:3}, 500);	
	$('#curpage').val(1);
	var pg	=	1;
}
	
	
	}
	else
	{
		var	pg	=	parseInt($('#curpage').html());
		var pg	=	pg + 1;
		$('#curpage').html(pg);
	}
	if(pg)
	{
	$('.ttbox').remove();
	
	myusefulInstance.showobj(pg,tid, {  
		"onFinish": function(response){  
					objArray	=	response.split('&&');
					i	=	0;
					while(objArray[i])
					{
												
						var objproperties	=	objArray[i].split(',');
						var txtbox			=	document.createElement('div');
						var txtp			=	document.createElement('p')
						
						$(txtp).append(objproperties[6])
						txtbox.setAttribute('class','ttbox');
						
						txtbox.setAttribute('id','tb'+objproperties[0]);
						txtbox.style.width				=	objproperties[3]+'%';
						txtbox.style.height				=	objproperties[4]+'%';
						txtbox.style.position			=	'absolute';
						txtbox.style.zIndex				=	'4';
						txtbox.style.color				=	objproperties[8];
						txtbox.style.left				=	objproperties[1]+'%';
						txtbox.style.top				=	objproperties[2]+'%';
						//txtbox.innerHTML				=	objproperties[6];
						txtbox.style.fontSize			=	objproperties[9]+'pt';
						txtbox.style.fontFamily			=	objproperties[7];
						$(txtbox).append(txtp)						
						
												
						if(targetid == 'templatebox')
						{
						//tracking txtbox size
						$(txtbox).resize(function(e){
							if($('#cpnotice').text() == 'Customize your templateAdd text and a background image using the toolbar below.'){
							createformatarea(e,'templatebox')
							}
							else{
								$('#tow'+objproperties[0]).val(parseInt(parseInt($(this).css('width'))/parseInt($('#templatebox').css('width'))*100))
								$('#toh'+objproperties[0]).val(parseInt(parseInt($(this).css('height'))/parseInt($('#templatebox').css('height'))*100))
							}				
							
						})
						
						//creating edit launcher	
						var editlaunch	=	document.createElement('div');
							//editlaunch.style.backgroundColor	=	'grey';
							editlaunch.style.width	=	'15px';
							editlaunch.style.height	=	'15px';
							editlaunch.style.position	=	'absolute';
							editlaunch.style.top		=	'0px';
							editlaunch.style.background		=	'#eee url(../images/edit-icon.png) no-repeat';
							editlaunch.style.right		=	'32px';
							editlaunch.style.cursor		=	'pointer';
							editlaunch.setAttribute('class','roundify_sm');
							editlaunch.setAttribute('id','edt'+objproperties[0]);
							editlaunch.setAttribute('title','Click to manage text object['+objproperties[0]+'] properties');
						//creating dragger
						var dragger	=	document.createElement('div');
							dragger.setAttribute('id','drg'+objproperties[0]);
							dragger.setAttribute('class','roundify_sm');
							
							dragger.style.width	=	'15px';
							dragger.style.height	=	'15px'; 
							dragger.style.position	=	'absolute';
							dragger.style.top	=	'0px';
							dragger.style.right	=	'16px';
							dragger.style.cursor	=	'pointer';
                                                        dragger.style.backgroundImage	=	'url(../images/dragicon.png)'
                                                        
							$(dragger).click(function(e){
								nomove(e.target.id)
								shwobj(e,tid,targetid)
							})
							
							if(objproperties[5] == 1)
							{
								dragger.style.backgroundColor		=	'#ff0000';
								dragger.setAttribute('title','Click to make draggable');
							}
							else
							{
								dragger.style.backgroundColor		=	'#eeeeee';
								dragger.setAttribute('title','Click to lock drag');
								$(txtbox).draggable({containment: "#templatebox", stop:function(event,ui){
                                                                $('.tox').val(parseInt($(this).css('left')));
                                                                $('.toy').val(parseInt($(this).css('top')));
                                                                createformatarea(event,'templatebox')
                                                                
                                                                adjustcoord(event.target.style.left,e.target.style.top,e.target.id)//saving cords
                                                                $('#picker').fadeOut(function(e){})							
                                                                //});
                                                                
                                                                }});
							}
							//
							$(txtbox).resizable({containment: "#templatebox", stop:function(){								
								var id	=	$(this).attr('id').replace(/tb/,'')
								myusefulInstance.adjustside(id,'w',parseInt(parseInt($(this).css('width'))/parseInt($('#templatebox').css('width'))*100), {});
								myusefulInstance.adjustside(id,'h',parseInt(parseInt($(this).css('height'))/parseInt($('#templatebox').css('height'))*100), {});
								}});				
							$(txtbox).append(dragger);
						}
						//adding close button
						var	txtclosebtn	=	document.createElement('div');
						txtclosebtn.setAttribute('id','cl'+objproperties[0]);
						txtclosebtn.style.width			=	'15px';
						txtclosebtn.style.height		=	'15px';
						txtclosebtn.style.backgroundColor	=	'#eee';
						txtclosebtn.style.position		=	'absolute';
						txtclosebtn.style.right			=	'0px';
						txtclosebtn.style.top			=	'0px';
						txtclosebtn.style.zIndex		=	'6';
						txtclosebtn.style.cursor		=	'pointer';
						txtclosebtn.style.color			=	'#ff0000';
						txtclosebtn.style.lineHeight	=	'12px';
						txtclosebtn.style.fontSize		=	'12px';
						txtclosebtn.style.fontWeight	=	'bold';
						txtclosebtn.innerHTML			=	'x';
						txtclosebtn.setAttribute('class','roundify_sm');
						 
						$(txtclosebtn).click(function(e){
							if(asload == 2)
							{
								var did	=	e.target.id.replace(/cl/,'')
								myusefulInstance.dpobj(did, {  
									"onFinish": function(response){ 
									if(response)
									{
										shwobj(e,tid,targetid)	
									}
								}
								})
							}
							else
							{
							var	objdel	=	 document.getElementById('objdel');
							
							objdel.value	=	e.target.id;
							$('#displayAreaid').append(objdel);
							
							var closer	=	document.createElement('div');
							closer.setAttribute('id','closer');
							closer.style.width				=	'120px';
							closer.style.height				=	'20px';
							closer.style.position			=	'absolute';
							closer.style.left				=	'184px';
							closer.style.top				=	'22px';
							closer.style.zIndex				=	'3';
							closer.style.color				=	'#ff0000';
							closer.style.fontSize			=	'10px';
							
							
							var confirmdel	=	document.createElement('div');
							confirmdel.style.width	=	'42px';
							confirmdel.style.height	=	'18px';
							confirmdel.style.lineHeight	=	'18px';
							confirmdel.style.backgroundColor	=	'#ff0000';
							confirmdel.style.color	=	'#fff';
							confirmdel.style.position	=	'absolute';
							confirmdel.style.fontSize	=	'10px';
							confirmdel.style.zIndex		=	'3';
							confirmdel.style.left		=	'0px';
							confirmdel.innerHTML	=	'Confirm';
							confirmdel.style.cursor		=	'pointer';
							confirmdel.setAttribute('class','roundify_sm');
							
							$(confirmdel).click(function(e){
								deleteobj($('#objdel').val());
							})
							
							var canceldel	=	document.createElement('div');
							canceldel.style.width	=	'42px';
							canceldel.style.height	=	'18px';
							canceldel.style.lineHeight	=	'18px';
							canceldel.style.backgroundColor	=	'#000000';
							canceldel.style.color	=	'#fff';
							canceldel.style.position	=	'absolute';
							canceldel.style.fontSize	=	'10px';
							canceldel.style.zIndex		=	'3';
							canceldel.style.left		=	'73px';
							canceldel.style.cursor		=	'pointer';
							canceldel.innerHTML	=	'Cancel';
							canceldel.setAttribute('title','Click to delete this object');
							canceldel.setAttribute('class','roundify_sm');
							
							$(canceldel). click(function(e){
								$(closer).fadeOut('fast', function(){
									
								})
							})
							
							$(closer).append(canceldel);
							$(closer).append(confirmdel);
							
							$('#displayAreaid').append(closer);
							}
						})
						
						//creating textarea
						var objtxtline		=	document.createElement('input');
						objtxtline.setAttribute('class','textlineb');
						objtxtline.type	=	'text';
						objtxtline.setAttribute('id','tl'+objproperties[0]);
						objtxtline.style.width	=	'100%';
						objtxtline.style.height	=	'20px';
						objtxtline.style.fontSize	=	'12px';
						objtxtline.style.zIndex	=	'5';
						objtxtline.style.position	=	'absolute';
						objtxtline.style.left	=	'0px';
						objtxtline.style.top	=	'2px';
						objtxtline.style.border	=	'none';
						objtxtline.style.backgroundColor	=	'transparent';
						objtxtline.style.display	=	'none';
						$(editlaunch).click(function(e){
							createformatarea(e,'templatebox')
						})
						
						$(objtxtline).mouseout(function(e){
							
							$('#'+e.target.id).fadeOut('slow', function() {
						       
						      });
						})
						
						
						if(targetid != 'templatebox')
						{
							txtbox.style.display				=	'none';
						}
						if('tl'+objproperties[0] == $('#acttxtobj').val())
						{
							txtbox.style.border				=	'1px dashed pink';
						}
						else
						{
						txtbox.style.border				=	'1px dashed #eee';
						}
						txtbox.style.cursor				=	'move';
						
						
						
						if(targetid == 'templatebox')
						{
						/*$(txtbox).mouseup(function(e){
							
							adjustcoord(e.target.style.left,e.target.style.top,e.target.id)//saving cords
							$('#picker').fadeOut(function(e){})							
						});*/
                                                
						}
						else
						{
							$(txtbox).mouseup(function(e){
								myusefulInstance.productid(jid, {
									"preloader":"gpr", 
									"onFinish": function(response){								
								myusefulInstance.insert_update_job_objects(e.target.id,jid,response,pg,'TEXT',e.target.style.left,e.target.style.top,e.target.style.width,e.target.style.height,$('#cropboxholder').css('width'),$('#cropboxholder').css('height'), {  
									 "onFinish": function(response){  
												if(response)
												{
													
												}
													
										}  
									});
								}
								});
								
							});
						}
						
						$(txtbox).append(editlaunch);
						$(txtbox).append(txtclosebtn);
						$(txtbox).append(objtxtline);
						$('#'+targetid).append(txtbox);
						$(txtbox).fadeIn('slow', function() {
					        // Animation complete 
					      });
						
						i++;
					}
					
					
	}
	})
	}
	else
	{
		$('#cpnotice').html('<br/>Ok now what? like i said, create a template or manipulate objects or properties on an existing template!.');
		$('#cpnotice').css('color','black'); 
		$('#cpnotice').css('font-size','12px');
		$('#cpnotice').effect("pulsate", {times:3}, 500);
	}
}

$('#picker').mouseup(function(e){
	$('.tofclass').val($('#color1').val())
	
	var	id	=	$('#acttxtobj').val().replace(/tl/,'');
	myusefulInstance.adjustside(id,'font_color',$('.tofclass').val(), {  
		 "onFinish": function(response){  
				if(response)
				{
					$('#tb'+id).css('color',$('.tofclass').val());
					$('.tofclass').css('background-color',$('.tofclass').val());
				}
			}  
		});
	
})

function createformatarea(e,targetid)
{
	
		//if($('#cpnotice').css('display') == 'none' || $('#cpnotice').text() == 'You can now customize the template, or start from scratch'){
				
		var txtlid	=	e.target.id.replace(/edt/,'tl');
		if(e.target.id.match(/edt/)){
		var	strid	=	e.target.id.replace(/edt/,'');
		}
		
		if(e.target.id.match(/tb/)){
			var	strid	=	e.target.id.replace(/tb/,'');
			}
		
		$('#cpnotice').css('display','block');
		if(targetid == 'templatebox')
		{
			
//pulling font color, font size, font family with poid and tid strid 
			$('#activefontfamily').val($('#tb'+strid).css('font-family'))
			$('#activefontsize').val($('#tb'+strid).css('font-size'))
			$('#activefontcolor').val($('#tb'+strid).css('color'))
			
			//hightlighting active obj
			$('.ttbox').css('border', '1px dashed #eee');
			$('.ttbox').css('background-color', 'transparent');
			
			$('#tb'+strid).css('border','1px solid red');
			$('#tb'+strid).css('background-color','#fff');
			
			$('#acttxtobj').val(txtlid);
			
			var trtop	=	($('#tb'+strid).css('top').match(/%/))?(parseInt($('#tb'+strid).css('top')) * parseInt($('#templatebox').css('height')))/100:parseInt($('#tb'+strid).css('top'));
			var trleft	=	($('#tb'+strid).css('left').match(/%/))?(parseInt($('#tb'+strid).css('left')) * parseInt($('#templatebox').css('width')))/100:parseInt($('#tb'+strid).css('left'));
			
			var txtobjtop	=	parseInt(trtop) + 100;
						
			var topunit	=	($('#tb'+strid).css('top').match(/%/))?'%':'px';
			var leftunit	=	($('#tb'+strid).css('left').match(/%/))?'%':'px';
			
			//slight problem here as we are comparing pixels to percentages will return to fix
		
			$('#cpnotice').css({'height':'160px'})
			$('#cpnotice').css('cursor','move');
			
			//collecting text obj width, height, font color,font size, font family
			var textObjInputwidth	=	document.createElement('input');
			textObjInputwidth.type	=	'text';
			textObjInputwidth.style.width	=	'30px';
			textObjInputwidth.style.position	=	'absolute';
			textObjInputwidth.style.top	=	'10px';
			textObjInputwidth.style.left	=	'5px';
			textObjInputwidth.setAttribute('maxlength','3');
			textObjInputwidth.setAttribute('id','tow'+strid);
			$(textObjInputwidth).val(parseInt($('#tb'+strid).css('width')))
			$(textObjInputwidth).keyup(function(e){
				setTxtObjWidthHeight($(this).attr('id'),'w');
			})
			
			var textObjInwidthlabel	=	document.createElement('span')
			textObjInwidthlabel.style.position	=	'absolute';
			textObjInwidthlabel.style.top		=	'1px';
			textObjInwidthlabel.style.left		=	'5px';
			textObjInwidthlabel.innerHTML		=	'Width (%)';
			
			var textObjInputheight				=	document.createElement('input');
			textObjInputheight.type				=	'text';
			textObjInputheight.style.width		=	'30px';
			textObjInputheight.style.position	=	'absolute';
			textObjInputheight.style.top		=	'45px';
			textObjInputheight.style.left		=	'5px';
			textObjInputheight.setAttribute('maxlength','3');
			textObjInputheight.setAttribute('id','toh'+strid);
			$(textObjInputheight).val(parseInt($('#tb'+strid).css('height')))
			$(textObjInputheight).keyup(function(e){
				setTxtObjWidthHeight($(this).attr('id'),'h');
			})				
											
			var textObjInputx				=	document.createElement('input');
			textObjInputx.type				=	'text';
			textObjInputx.style.width		=	'30px';
			textObjInputx.style.position	=	'absolute';
			textObjInputx.style.top			=	'10px';
			textObjInputx.style.left		=	'80px';
			textObjInputx.setAttribute('maxlength','3');
			textObjInputx.setAttribute('id','tox'+strid);
			textObjInputx.setAttribute('class','tox');
			$(textObjInputx).val(parseInt($('#tb'+strid).css('left')));
																			
			var textObjInputxlabel				=	document.createElement('span')
			textObjInputxlabel.style.position	=	'absolute';
			textObjInputxlabel.style.top		=	'1px';
			textObjInputxlabel.style.left		=	'82px';
			textObjInputxlabel.innerHTML		=	'x ('+leftunit+')';
											
			var textObjInputy					=	document.createElement('input');
			textObjInputy.type					=	'text';
			textObjInputy.style.width			=	'30px';
			textObjInputy.style.position		=	'absolute';
			textObjInputy.style.top				=	'45px';
			textObjInputy.style.left			=	'80px';
			textObjInputy.setAttribute('maxlength','3');
			textObjInputy.setAttribute('id','toy'+strid);
			textObjInputy.setAttribute('class','toy');
			$(textObjInputy).val(parseInt($('#tb'+strid).css('top')));
			
			var textObjInputylabel				=	document.createElement('span')
			textObjInputylabel.style.position	=	'absolute';
			textObjInputylabel.style.top		=	'32px';
			textObjInputylabel.style.left		=	'82px';
			textObjInputylabel.innerHTML		=	'y ('+topunit+')';
			
			var textObjInputText				=	document.createElement('input');
			textObjInputText.type				=	'text';
			textObjInputText.setAttribute('id','txtline'+strid);
			textObjInputText.style.position		=	'absolute';
			textObjInputText.style.top			=	'114px';
			textObjInputText.style.left			=	'80px';
			textObjInputText.style.width		=	'117px';
			textObjInputText.style.fontSize		=	'8px';
			var txtcntnt	=	$('#tb'+strid+' p').text()
			$(textObjInputText).val(txtcntnt);
                        $(textObjInputText).focus(function(e){
                            if($(this).val() == 'add some text'){
                                $(this).val('')
                            }
                        })
                        
                        $(textObjInputText).blur(function(){
                            if(!$(this).val()||$(this).val() == ' ')
                                {
                                    $(this).val('add some text');
                                }
                        })
                        
			$(textObjInputText).keyup(function(e){
				//adding text
				$('#tb'+strid+' p').text($(this).val());
				setTxtObjcontent($(this).attr('id'),$(this).val());
			})
			
			var textObjInheightlabel			=	document.createElement('span')
			textObjInheightlabel.style.position	=	'absolute';
			textObjInheightlabel.style.top		=	'34px';
			textObjInheightlabel.style.left		=	'4px';
			textObjInheightlabel.innerHTML		=	'Height (%)';
			
			var fontsizeObj				=	document.createElement('input');
			fontsizeObj.type			=	'text';
			fontsizeObj.style.width		=	'30px';
			fontsizeObj.style.position	=	'absolute';
			fontsizeObj.style.top		=	'79px';
			fontsizeObj.style.left		=	'5px';
			fontsizeObj.setAttribute('maxlength', '3');
			fontsizeObj.setAttribute('id', 'tofs'+strid);
			$(fontsizeObj).val(parseInt($('#activefontsize').val()));
			$(fontsizeObj).keyup(function(e){
				setTxtObjFontSize(e.target.id,e.target.value);
			})
			
			var fontsizeObjlabel			=	document.createElement('span')
			fontsizeObjlabel.style.position	=	'absolute';
			fontsizeObjlabel.style.top		=	'68px';
			fontsizeObjlabel.style.left		=	'4px';
			fontsizeObjlabel.innerHTML		=	'Font size (Pts)';
			
			var fontcolObj				=	document.createElement('input');
			fontcolObj.type				=	'text';
			fontcolObj.style.width		=	'45px';
			fontcolObj.style.position	=	'absolute';
			fontcolObj.style.top		=	'114px';
			fontcolObj.style.left		=	'5px';
			fontcolObj.setAttribute('maxlength', '6');
			fontcolObj.setAttribute('id', 'tofc'+strid);
			$(fontcolObj).val($('#activefontcolor').val());
			fontcolObj.setAttribute('class', 'tofclass');
			$(fontcolObj).click(function(e){
				$('#picker').fadeIn(function(e){
					
				})
				
			})
                        
                        
			
			var fontcolObjlabel			=	document.createElement('span')
			fontcolObjlabel.style.position	=	'absolute';
			fontcolObjlabel.style.top		=	'103px';
			fontcolObjlabel.style.left		=	'5px';
			fontcolObjlabel.innerHTML	=	'Font color';

			myusefulInstance.fontcsv({  
				 "onFinish": function(response){  
							if(response)
							{
							var fontcsvselect	=	document.createElement('select');
								fontcsvselect.setAttribute('name','fontf'+strid);
								fontcsvselect.setAttribute('id','fontf'+strid);
								fontcsvselect.style.width	=	'100px';
								fontcsvselect.style.height	=	'20px';
								fontcsvselect.style.position	=	'absolute';
								fontcsvselect.style.left		=	'80px';
								fontcsvselect.style.top			=	'76px';
								
							var	expresponse	=	response.split(',');
							
							i	=	0;
							while(expresponse[i])
							{
								var responseEle		=	expresponse[i].split('&');
								var fontcsvoption	=	document.createElement('option');
								fontcsvoption.setAttribute('value', responseEle[0]);
								var descript		=	document.createTextNode(responseEle[0])
								
								if(e.target.style.fontFamily == responseEle[0])
								{
									fontcsvoption.selected	=	1;
								}
								
								fontcsvoption.appendChild(descript);
								fontcsvselect.appendChild(fontcsvoption);
								i++;
							}
								$(fontcsvselect).change(function(e){
									setTxtObjFontFamily(e.target.id,e.target.value)
								})
								document.getElementById('cpnotice').appendChild(fontcsvselect);
							}
								
					}})
                                    
                var finishButton    =   document.createElement('div')
                $(finishButton).attr('class','finishbtn')
                $(finishButton).text('Done')
                $(finishButton).click(function(){
                //adding finish functionality, hiding notice box and normalising focus textobj
                $('#cpnotice,#picker').css('display','none'); 
                $('.ttbox').css({'border':'1px dashed pink','background-color':'transparent'})
                
                 })
			
		$('#cpnotice').empty();
		//textObjInputText
		$('#cpnotice').append(textObjInputText);
		$('#cpnotice').append(textObjInputylabel);
		$('#cpnotice').append(fontcolObjlabel);
		$('#cpnotice').append(fontcolObj);
		$('#cpnotice').append(textObjInputy);
		$('#cpnotice').append(textObjInputxlabel);
		$('#cpnotice').append(textObjInputx);
		$('#cpnotice').append(textObjInputwidth);
		$('#cpnotice').append(textObjInputheight);
		$('#cpnotice').append(textObjInwidthlabel);
		$('#cpnotice').append(textObjInheightlabel);
		$('#cpnotice').append(fontsizeObj);
		$('#cpnotice').append(fontsizeObjlabel);
                $('#cpnotice').append(finishButton);
		
		}
		else
		{
			$('#'+txtlid).fadeIn('slow', function() {
			     
		      });
		}
		
		
		//}
}

//setTxtObjcontent
function setTxtObjcontent(id,cntnt)
{
	var id		=	id.replace(/txtline/,'');
	myusefulInstance.adjustside(id,'content_text',cntnt, {  
		 "onFinish": function(response){  
			
			}  
		});
}


function setTxtObjFontFamily(id,fontid)
{
	var id		=	id.replace(/fontf/,'');
	myusefulInstance.adjustside(id,'font_id',fontid, {  
		 "onFinish": function(response){  
				if(response)
				{
					$('#tb'+id).css('font-family',response);
				}
			}  
		});
}

function setTxtObjFontSize(id,size)
{
	var strpid	=	id.replace(/tofs/,'tb')
	var id		=	id.replace(/tofs/,'')
	
	
	myusefulInstance.adjustside(id,'font_size',size, {  
		 "onFinish": function(response){  
				if(response)
				{
					$('#tb'+id).css('font-size',size+'pt');
				}
			}  
		});
	
}

function setTxtObjWidthHeight(id,side)
{
	var poid	=	(side == 'h')?id.replace(/toh/,''):id.replace(/tow/,'');
	myusefulInstance.adjustside(poid,side,$('#'+id).val(), {  
		 "onFinish": function(response){  
				if(response)
				{
					if(side == 'w')
					{
					$('#tb'+poid).css('width',$('#'+id).val()+'%');
					}
					
					if(side == 'h')
					{
					$('#tb'+poid).css('height',$('#'+id).val()+'%');
					}
				}
			}  
		});
}


function nomove(id)
{
	var objId	=	id.split('drg');

	myusefulInstance.lockobj(objId[1], {  
		 "onFinish": function(response){  
				if(response)
				{
					$('#'+id).css('background-color',response);
				}
			}  
		});
}

function adjustcoord(x,y,id)
{
	myusefulInstance.adjustcoordinates(x,y,id,$('#templatebox').css('width'),$('#templatebox').css('height'), {  
		 "onFinish": function(response){  
					
			}  
		});
}


function creatingtemplate(e){
	//savefield($table,$field,$value,$whereIDNAME,$whereID)
	var pgv		=	document.getElementById('numpages');
	var selprd	=	document.getElementById('selprod');
	
	myusefulInstance.savefield('products_templates','pages',pgv.value,'product_id',selprd.value, {  
		 "onFinish": function(response){  
		if(response)
		{
			
		}
			
			}  
		});
}

$('#instext').click(function(e){

	myusefulInstance.addtext($('#tempname').val(),$('#curpage').val(), {  
		 "onFinish": function(response){  
		if(response)
		{
		shwobj(e,$('#tempname').val(),'templatebox')
		}
			
			}  
		});
	
	
})


$('.pBlok').click(function(e) {
	addproduct(e.target.id);
});

if(window.location.href.match(/state/))
{
var cstate	=	window.location.href.split('?');
if(cstate[1].match(/canvas/))
{
	if(!cstate[1].match(/template/))
	{
	$("#clpsdiv2").slideToggle("fast");
	switchBg(2);
	}
}
}

function filldv_r(stg)
{
	 myusefulInstance.stepsummary(jid,stg, {  
		 "onFinish": function(response){ 
		 if(response)
		 {
			 $('#dv'+stg+'_r').html(response)
		 }
			 
			}  
		});
}

$('#dv1, #bs').click(function(e) {
	 $("#clpsdiv1").slideToggle("fast",filldv_r(1));
	 $("#clpsdiv2").slideUp("slow");
	 $("#clpsdiv3").slideUp("slow");
	 switchBg(1);
	 
	
	 
	 liArray=document.getElementById("displayAreaid").childNodes;
	 
	 i=0;
	 var f1 = 0;
		while(liArray[i]){ 
	if(liArray[i].id)
	{
			otherIds	=	liArray[i].id;
			if(otherIds == 'cah')
			{
				var f1 = '1';
			}
		
	}
	
	
	i++;
		}
	 
		
	 if(f1==0)
	 {
		
		 redisplay();
		 setTimeout(function(){
			//here i need to place carousel into display area
			/* myusefulInstance.productcarousel(jid,1, {  
					 
					"onFinish": function(response){  
				 document.getElementById("displayAreaid").innerHTML	=	'';
				// document.getElementById("displayAreaid").appendChild(carouselbuilder(response));
					}  
					});*/
			 document.getElementById("displayAreaid").innerHTML	=	'';
			 calltemplates(jid)
			 			 
		 },2500); 
	 }
	 
});

$('.szEl').click(function(e){
	
	ssave(e);
})


function ssave(e)
{
	
	myusefulInstance.savefield('jobs','paper_size',e.target.value,'job_id',jid, {  
		 "onFinish": function(response){  
			}  
		});
	
}
$('.coating').change(function(e){
	
	myusefulInstance.savefield('jobs','laminate',e.target.value,'job_id',jid, {  
		 "onFinish": function(response){
		if(response)
		{
			myusefulInstance.savefield('jobs','laminate_id',parseInt(e.target.id),'job_id',jid, {  
				 "onFinish": function(response){  
					}  
				});
		}	
			}  
		});
	
	filldv_r(2)
})

$('.textline,#country,#qnty').keyup(function(e){
	myusefulInstance.savefield('jobs',e.target.name,e.target.value,'job_id',jid, {  
		 "onFinish": function(response){  
			}  
		});
})

$('#dv2, #bs2').click(function(e) {
	$("#clpsdiv2").slideToggle("fast",filldv_r(2));
	 $("#clpsdiv1").slideUp("slow");
	 $("#clpsdiv3").slideUp("slow");
	 switchBg(2);
	 
});


$('#dv3, #bs3').click(function(e) {
	 $("#clpsdiv3").slideToggle("fast",filldv_r(3));
	 $("#clpsdiv2").slideUp("slow");
	 $("#clpsdiv1").slideUp("slow");
	 switchBg(3);
});

$('#rotate').click(function(e) {
	
	disablejc();
	$('#myc').fadeOut('fast', function() {
        // Animation complete
      });
	
	rbtn.style.backgroundColor	=	'#ffffff';
	rbtn.style.width	=	'23px';
	rbtn.style.height	=	'17px';
	rbtn.style.border	=	'3px solid #bbbbbb';
	
	cbtn.style.backgroundColor	=	'transparent';
	cbtn.style.width	=	'23px';
	cbtn.style.height	=	'17px';
	cbtn.style.border	=	'none'
	
	myusefulInstance.rotate(jid, {  
		"preloader":"gpr",  
		"onFinish": function(response){  
		 if(response) 
		 {
		var workImg	=	document.getElementById('cropbox');
		var workBox	=	document.getElementById('cropboxholder');
		var resArr	=	response.split(',');
		workImg.setAttribute('src',resArr[0]); 
		workImg.setAttribute('height',resArr[2]);
		workImg.setAttribute('width',resArr[1]);
		workBox.style.width		=	resArr[1]+'px';	
		workBox.style.height	=	resArr[2]+'px';

		 }
		}  
		});
	
});



if(userid == 0)
{
	
	if(window.location.href.match(/register/))
	{
		//showregister();
		
	}
}
else
{
	if(window.location.href.match(/register/))
	{
		var regnotice	=	document.createElement('div');
		$(regnotice).css('z-index',30);
		$(regnotice).css('background-color','pink');
		$(regnotice).css('width','100%');
		$(regnotice).css('height','30px');
		$(regnotice).css('position','absolute');
		$(regnotice).css('top','202px');
		$(regnotice).css('left','0px');
		$(regnotice).css('font-size','30px');
		$(regnotice).css('text-align','center');
		$(regnotice).css('color','red');
		
		$(regnotice).html('Already logged in.')
		$('#outercontainer').append(regnotice);
	}
}
	

function showregister(e)
{
	var liArea	=	document.getElementById('liA');
	var loginb	=	document.getElementById('login');
	var regb	=	document.getElementById('register');
	
	loginb.style.zIndex	=	'2';
	regb.style.zIndex	=	'3';
	
	liArea.style.backgroundColor	=	'#BCBDC0';
	liArea.innerHTML	=	'';
	myusefulInstance.regcontent(1, {  
		
		"onFinish": function(response){  
	//i need to create 2 input fields
	var emailfield	=	document.createElement('input');
	var captchaval	=	document.createElement('input');
	var dbtn		=	document.createElement('div');
	
	emailfield.setAttribute('id', 'loginemail');
	emailfield.setAttribute('type', 'text');
	emailfield.setAttribute('name', 'email');
	emailfield.style.paddingLeft	=	'3px';
	emailfield.style.fontSize		=	'18px';
	emailfield.style.width			=	'232px';
	emailfield.style.height			=	'20px';
	emailfield.style.position		=	'absolute';
	emailfield.style.left			=	'20px';
	emailfield.style.top			=	'60px';
	emailfield.style.color			=	'#666666';
	emailfield.style.border			=	'3px solid #bbbbbb';
	emailfield.value				=	'email';
	
	$(emailfield).focus(function(e){
		//var loginemail	=	document.getElementById('loginemail');
		if(emailfield.value == 'email')
		{
			emailfield.value	=	'';
		}
	}) 
	
	captchaval.setAttribute('id', 'captcha');
	captchaval.setAttribute('type', 'text');
	captchaval.setAttribute('name', 'captcha');
	captchaval.style.paddingLeft	=	'3px';
	captchaval.style.fontSize		=	'18px';
	captchaval.style.width			=	'150px';
	captchaval.style.height			=	'20px';
	captchaval.style.position		=	'absolute';
	captchaval.style.left			=	'20px';
	captchaval.style.top			=	'168px';
	captchaval.style.color			=	'#666666';
	captchaval.style.border			=	'3px solid #bbbbbb';
	
	dbtn.setAttribute('id', 'sdata');
	
	//dbtn.style.paddingLeft	=	'3px';
	dbtn.style.fontSize			=	'14px';
	dbtn.style.width			=	'114px';
	dbtn.style.height			=	'24px';
	dbtn.style.position			=	'absolute';
	dbtn.style.left				=	'20px';
	dbtn.style.top				=	'212px';
	dbtn.style.color			=	'#666666';
	dbtn.style.border			=	'3px solid #cccccc';
	dbtn.style.lineHeight		=	'20px';
	dbtn.innerHTML				=	'done';
	dbtn.style.backgroundImage	=	'url(../images/button2.jpg)';
	dbtn.style.cursor			=	'pointer';
	
	$(dbtn).click(function(e){
		regpost('register'); 
	})
	
	liArea.innerHTML	=	response;
	liArea.appendChild(emailfield);
	liArea.appendChild(captchaval);
	liArea.appendChild(dbtn);
		}  
		});	
}

$('#register').click(function(e){
	
	if(!document.location.href.match(/register/))
	{
		document.location.href= document.location.href+'/register';		
	}
	
})

$('#login').click(function(e){
	
	if(document.location.href.match(/register/))
	{
		//
		var newlocation	=	document.location.href.replace(/\/register/,'');
		document.location.href	= newlocation;
	}
	
	/*
	var liArea	=	document.getElementById('liA');
	var loginb	=	document.getElementById('login');
	var regb	=	document.getElementById('register');
	
	loginb.style.zIndex	=	'2';
	regb.style.zIndex	=	'3';
	
	liArea.style.backgroundColor	=	'#BCBDC0';
	liArea.innerHTML	=	'';
	myusefulInstance.regcontent(1, {  
		
		"onFinish": function(response){  
	//i need to create 2 input fields
	var emailfield	=	document.createElement('input');
	var captchaval	=	document.createElement('input');
	var dbtn		=	document.createElement('div');
	
	emailfield.setAttribute('id', 'loginemail');
	emailfield.setAttribute('type', 'text');
	emailfield.setAttribute('name', 'email');
	emailfield.style.paddingLeft	=	'3px';
	emailfield.style.fontSize		=	'18px';
	emailfield.style.width			=	'232px';
	emailfield.style.height			=	'20px';
	emailfield.style.position		=	'absolute';
	emailfield.style.left			=	'20px';
	emailfield.style.top			=	'60px';
	emailfield.style.color			=	'#666666';
	emailfield.style.border			=	'1px solid #dddddd';
	emailfield.value				=	'email';
	
	$(emailfield).focus(function(e){
		//var loginemail	=	document.getElementById('loginemail');
		if(emailfield.value == 'email')
		{
			emailfield.value	=	'';
		}
	}) 
	
	captchaval.setAttribute('id', 'captcha');
	captchaval.setAttribute('type', 'text');
	captchaval.setAttribute('name', 'captcha');
	captchaval.style.paddingLeft	=	'3px';
	captchaval.style.fontSize		=	'18px';
	captchaval.style.width			=	'150px';
	captchaval.style.height			=	'20px';
	captchaval.style.position		=	'absolute';
	captchaval.style.left			=	'20px';
	captchaval.style.top			=	'168px';
	captchaval.style.color			=	'#666666';
	captchaval.style.border			=	'1px solid #dddddd';
	
	dbtn.setAttribute('id', 'sdata');
	
	//dbtn.style.paddingLeft	=	'3px';
	dbtn.style.fontSize			=	'14px';
	dbtn.style.width			=	'114px';
	dbtn.style.height			=	'24px';
	dbtn.style.position			=	'absolute';
	dbtn.style.left				=	'20px';
	dbtn.style.top				=	'212px';
	dbtn.style.color			=	'#666666';
	dbtn.style.border			=	'3px solid #bbbbbb';
	dbtn.style.lineHeight		=	'20px';
	dbtn.innerHTML				=	'done';
	dbtn.style.backgroundImage	=	'url(../images/button2.jpg)';
	dbtn.style.cursor			=	'pointer';
	
	$(dbtn).click(function(e){
		regpost('register'); 
	})
	
	liArea.innerHTML	=	response;
	liArea.appendChild(emailfield);
	liArea.appendChild(captchaval);
	liArea.appendChild(dbtn);
		}  
		});
	*/
});

$('#loginemail').click(function(e){
	
	var loginemail	=	document.getElementById('loginemail');
	if(loginemail.value == 'email')
	{
		loginemail.value	=	'';
	}
		
})

$('#pswd').focus(function(e){
	
	//var liArea		=	document.getElementById('liA');
	var pswd		=	document.getElementById('pswd');
	var pswdfield	=	document.createElement('input');
	
	pswdfield.setAttribute('id', 'pswd');
	pswdfield.setAttribute('type', 'password');
	pswdfield.setAttribute('name', 'pswd');
	pswdfield.style.paddingLeft	=	'3px';
	pswdfield.style.fontSize		=	'18px';
	pswdfield.style.width			=	'232px';
	pswdfield.style.height			=	'20px';
	pswdfield.style.position		=	'absolute';
	pswdfield.style.left			=	'20px';
	pswdfield.style.top				=	'100px';
	pswdfield.style.color			=	'#666666';
	pswdfield.style.border			=	'1px solid #dddddd';
	
	$(this).remove();
	
	document.loginform.appendChild(pswdfield)
			
		if(pswdfield.value == 'password')
		{
			pswdfield.value	=	'';
		}		
		pswdfield.focus();
		$(pswdfield).keyup(function(e) {
			if(e.keyCode == 13) {
				//regpost('login');
				document.loginform.submit();
			}
			});	
})

/*$('#sdata').click(function(e){
	regpost('login');
})*/

function regpost(postype)
{
	
	var emailfield	=	document.getElementById('loginemail');
	var lpswd		=	document.getElementById('pswd')
	var liArea		=	document.getElementById('liA');
	var darklayer	=	document.createElement('div');
	var loadtext	=	document.createElement('div');
	var loading		=	document.createElement('img');
	
	
	loadtext.style.width		=	'120px';
	loadtext.style.color				=	'#d7df23';
	loadtext.style.marginTop			=	'90px';
	loadtext.style.textAlign			=	'center';
	loadtext.style.marginLeft			=	'auto';
	loadtext.style.marginRight			=	'auto';
	
	loadtext.innerHTML			=	'please wait.';
	loading.style.marginTop		=	'15px';
	loading.src	=	'../images/loading.gif';
	
	darklayer.style.width	=	'275px';
	darklayer.style.height	=	'318px';
	darklayer.style.backgroundColor	=	'#000000';
	darklayer.style.opacity			=	'0.8';
	darklayer.style.filter			=	'alpha(opacity=80)';
	darklayer.style.position		=	'absolute';
	darklayer.style.left			=	'0px';
	darklayer.style.top				=	'0px';
	darklayer.style.zIndex			=	'3';
	
	 //building login failure notice
		 var failnotice	=	document.createElement('div');
		 failnotice.setAttribute('id','fnotice');
		 failnotice.style.position	=	'absolute';
		 failnotice.style.top		=	'10px';
		 failnotice.style.left		=	'20px';
		 failnotice.style.fontSize	=	'12px';
		 failnotice.style.color		=	'#ff0000';
		 failnotice.style.display	=	'none';
	
	if(postype == 'login')
	{
		myusefulInstance.loginf(emailfield.value,lpswd.value, {  
	   		"onFinish": function(response){  
	   		 if(response)
	   		 {
	   			darklayer.appendChild(loadtext);
	   			darklayer.appendChild(loading);
	   			liArea.appendChild(darklayer);
	   			$('#pbh').fadeOut('slow', function() {
					$('#lrph').fadeOut('slow', function() {
				        // Animation complete
						
						if(document.location.href.match(/md=library/))
						{
						document.location.href	=	'library.php';
						}
						else
						{
						document.location.href	=	'?u='+response;
						}
						
				      }); 
			      });
	   			 
	   		 }
	   		 else
	   		 {
	   			
	   			 failnotice.innerHTML		=	'sorry, try again';
	   			 liArea.appendChild(failnotice);
	   		     $(failnotice).effect("pulsate", {times:3}, 500);
	  		 
	   		 }
	   			 
	   		}  
	   		});
		
	}
	
	if(postype == 'register')
	{
		var captchafield	=	document.getElementById('captcha');
		
		myusefulInstance.registerf(emailfield.value,captchafield.value,{
			"onFinish": function(response){
			if(isInteger(response))
			{
				
				darklayer.appendChild(loadtext);
				darklayer.appendChild(loading);
				liArea.appendChild(darklayer);
				$('#pbh').fadeOut('slow', function() {
					$('#lrph').fadeOut('slow', function() {
				        // Animation complete
						document.location.href	=	'?u='+response;
				      }); 
			      });
			}
			else
			{
				if(response.match(/captcha/))
				{
					captchafield.style.backgroundColor	=	'#ff9999';
					$(captchafield).effect("pulsate", {times:2}, 800);
				}
				else
				{
					failnotice.innerHTML		=	response;
		   			 liArea.appendChild(failnotice);
		   		     $(failnotice).effect("pulsate", {times:3}, 500);
				}
					
			}
		}	
		});
		
		
	}
}

function isInteger(s)
{
	return parseInt(s,10)===s;
} 

$('#login').click(function(e){
	var liArea		=	document.getElementById('liA');
	var loginb		=	document.getElementById('login');
	var regb		=	document.getElementById('register');
	var emailfield	=	document.createElement('input');
	var pswdfield	=	document.createElement('input');
	var remfield	=	document.createElement('input');
	var dbtn		=	document.createElement('div');
	
	loginb.style.zIndex	=	'3';
	regb.style.zIndex	=	'2';
	
	liArea.style.backgroundColor	=	'#E6E6E7';
	/*myusefulInstance.logincontent(1, {  
		
		"onFinish": function(response){  
		emailfield.setAttribute('id', 'loginemail');
		emailfield.setAttribute('type', 'text');
		emailfield.setAttribute('name', 'email');
		emailfield.style.paddingLeft	=	'3px';
		emailfield.style.fontSize		=	'18px';
		emailfield.style.width			=	'232px';
		emailfield.style.height			=	'20px';
		emailfield.style.position		=	'absolute';
		emailfield.style.left			=	'20px';
		emailfield.style.top			=	'60px';
		emailfield.style.color			=	'#666666';
		emailfield.style.border			=	'1px solid #dddddd';
		emailfield.value				=	'email';
		
		$(emailfield).click(function(e){
			//var loginemail	=	document.getElementById('loginemail');
			if(emailfield.value == 'email')
			{
				emailfield.value	=	'';
			}
			
			if(pswdfield.value == '')
			{
				pswdfield.value	=	'password';
			}
		})
		
		pswdfield.setAttribute('id', 'pswd');
		pswdfield.setAttribute('type', 'text');
		pswdfield.setAttribute('name', 'pswd');
		pswdfield.style.paddingLeft	=	'3px';
		pswdfield.style.fontSize		=	'18px';
		pswdfield.style.width			=	'232px';
		pswdfield.style.height			=	'20px';
		pswdfield.style.position		=	'absolute';
		pswdfield.style.left			=	'20px';
		pswdfield.style.top				=	'100px';
		pswdfield.style.color			=	'#666666';
		pswdfield.style.border			=	'1px solid #dddddd';
		pswdfield.value					=	'password';
		
		$(pswdfield).bind('click focus', function(e){
			//$('#foo').bind('click', function() {
			if(pswdfield.value == 'password')
			{
				pswdfield.value	=	'';
				pswdfield.setAttribute('type', 'password');
			}
			
			if(emailfield.value == '')
			{
				emailfield.value	=	'email';
			}
		})
		
	dbtn.setAttribute('id', 'cdata');	
	dbtn.style.fontSize			=	'14px';
	dbtn.style.width			=	'114px';
	dbtn.style.height			=	'24px';
	dbtn.style.position			=	'absolute';
	dbtn.style.left				=	'20px';
	dbtn.style.top				=	'212px';
	dbtn.style.color			=	'#999999';
	dbtn.style.border			=	'1px solid #dddddd';
	dbtn.style.lineHeight		=	'20px';
	dbtn.innerHTML				=	'enter';
	dbtn.style.backgroundImage	=	'url(../images/button2.jpg)';
	dbtn.style.cursor			=	'pointer';
	
	$(dbtn).click(function(e){
		regpost('login');
	})
		
		remfield.setAttribute('id', 'rembme');
		remfield.setAttribute('type', 'checkbox');
		remfield.setAttribute('name', 'rembme');
		remfield.style.height			=	'20px';
		remfield.style.position		=	'absolute';
		remfield.style.left			=	'20px';
		remfield.style.top				=	'140px';
		remfield.style.color			=	'#666666';
		
		
		liArea.innerHTML	=	response;
		liArea.appendChild(emailfield);
		liArea.appendChild(pswdfield);
		liArea.appendChild(remfield);
		liArea.appendChild(dbtn);
		
		}  
		});*/
});



function showCoords(c)
{
$('#x').val(c.x);
$('#y').val(c.y);
$('#x2').val(c.x2);
$('#y2').val(c.y2);
$('#w').val(c.w);
$('#h').val(c.h);

}

function disablejc()
{
$.Jcrop('#cropbox').destroy();
$('.jcrop-holder').hide();

}

function showSave()
{
	$('#save').fadeIn('slow', function() {
		
		      $('#save').effect("pulsate", {times:3}, 500);
		
	  });
}

$('#save').click(function() {
	var cx	=	document.getElementById('x');
	var cy	=	document.getElementById('y');
	var cx2	=	document.getElementById('x2');
	var cy2	=	document.getElementById('y2');
	var cw	=	document.getElementById('w');
	var ch	=	document.getElementById('h');
	
	myusefulInstance.cropper(jid,cx.value,cy.value,cx2.value,cy2.value,cw.value,ch.value, {  
   		"preloader":"gpr",  
   		"onFinish": function(response){  
   		 if(response){
   			var cropholder				=	document.getElementById('cropboxholder');
   				cropholder.innerHTML	=	response;
   				$('#save').fadeOut('slow', function() {
   			        // Animation complete
   			      });
   		 }
   		}  
   		});
});

$('#crop').click(function(e) {

	$('#myc').fadeIn('slow', function() {
        // Animation complete
      });
		disablejc();
		cbtn.style.backgroundColor	=	'#ffffff';
		cbtn.style.width	=	'23px';
		cbtn.style.height	=	'17px';
		cbtn.style.border	=	'1px solid #666666';
		
		rbtn.style.backgroundColor	=	'transparent';
		rbtn.style.width	=	'23px';
		rbtn.style.height	=	'17px';
		rbtn.style.border	=	'none';
	
		myusefulInstance.sizedata(jid, { 
		   "onFinish": function(response){  
			
	var	sizeArray	=	response.split(",");
	var	jratio		=	sizeArray[5]+'/'+sizeArray[6];
	
		 }
		});
	
	var jcrop_api	=	$.Jcrop('#cropbox');
	jcrop_api.setOptions(
			{ 
				onChange: showCoords,
				onSelect: showSave,
				aspectRatio: jratio,
				addClass: 'custom',
				bgColor: 'yellow',
				bgOpacity: .7,
				minSize: jratio,
				sideHandles: true
			});
});

function inicrop()
{
	var cropbox	= document.getElementById("cropboxholder");
	//finding all child elements and looping through
	liArray=cropbox.childNodes;
	i=0;
	while(liArray[i]){
	liArray[i].id="cropbox";
	i++;
	}
}

function psize(size)
{
	sendForm();
}

function switchBg(eleId)
{
	for (i=1;i<=3;i++)
	{
		var slidebar						=	document.getElementById('dv'+i);
		var slideactive						=	document.getElementById('chv'+i);
		var summaryA						=	document.getElementById('dv'+i+'_r');
		
		if(i == eleId)
		{
			if(slideactive != null){
			slidebar.style.backgroundImage		=	'url(images/button3.jpg)';
			slideactive.style.backgroundImage	=	'url(images/arrow-grey_down.png)';
			}
			if(summaryA != null && summaryA.style.display == 'none')
			{
				$(summaryA).fadeIn('fast', function() {
			        // Animation complete
			      });
			}
			else
			{
			$(summaryA).fadeOut('fast', function() {
		        // Animation complete
		      });
			}
			
		
		}
		else
		{
		if(slideactive != null){
			slideactive.style.backgroundImage	=	'url(images/arrow-grey_up.png)';
			slidebar.style.backgroundImage		=	'';
			slidebar.style.backgroundColor		=	'#dddddd';
			$(summaryA).fadeIn('fast', function() {
		        // Animation complete
		      });
		}
		}
				
	}
	
	
}

function ac(id)
{
	var cropbox	= document.getElementById("cropboxholder");
	myusefulInstance.anchor(id, {  
		"onFinish": function(response){  
		 if(response) 
		 {
			 var responseArray	=	response.split('&S&'); 
			 var postitId		=	'post'+responseArray[0];
			 //here we wish to create the postit
			 var thepostit	=	document.createElement('div');
			 thepostit.setAttribute('id',postitId);
			 thepostit.setAttribute('class','postit');
			 thepostit.setAttribute('onmouseup','tracker(\''+responseArray[0]+'\')');
			 thepostit.setAttribute('onmouseover','cascader(\''+responseArray[0]+'\')');
			 thepostit.style.position	=	'absolute';
			 thepostit.style.width		=	'30px';
			 thepostit.style.height		=	'20px';
			 thepostit.style.left		=	responseArray[1]+'px';
			 thepostit.style.top		=	responseArray[2]+'px';
			 cropbox.appendChild(thepostit);
		 }
			 
		}  
		});
}

function cascader(divid)
{
	liArray=document.getElementById("cropboxholder").childNodes;
	i=0;
	while(liArray[i]){
if(liArray[i].id)
{
	otherIds	=	liArray[i].id;
	
	if(otherIds == divid+'_holder')
	{
		document.getElementById(otherIds).style.zIndex	=	'5';
	}
	else
	{
		document.getElementById(otherIds).style.zIndex	=	'4';
	}
}
	i++;
	}
	
}

function hidecom(id)
{
	var commentbox	=	document.getElementById(id+'_holder');
	
		  $('#'+id+'_holder').fadeOut('slow', function() {
		    
		  });
}

function closecom(id)
{
		$('#'+id+'_holder').fadeOut('slow', function() {
			$('#post'+id).fadeOut('slow', function() {
			  });
		  });
}

function tracker(id)
{
	/*
	var commentobj	=	document.getElementById('post'+id);
	var workarea	=	document.getElementById('cropboxholder');
	var commentbox	= 	document.createElement('div');
	var combar		=	document.createElement('div');
	var combartext	=	document.createElement('div');
	var progressbr	=	document.createElement('div');
	var closebox	=	document.createElement('div');
	var savebox		=	document.createElement('div');
	var mytxtArea	=	document.createElement('textarea');
	var loading		=	document.createElement('img');
	var combarid		=	id+'combar';
	var combartextid	=	id+'combartext';
	var closeboxid		=	id+'close';	
	var saveid			=	id+'save';
	var commentid		=	id+'_holder';
	var mytxtAreaid		=	'comment'+id;
	var progressid		=	'progress'+id;
	var objx		=	commentobj.style.left;
	var objy		=	commentobj.style.top;
	var x_int		=	objx.split('px');
	var x_new		=	(parseInt(x_int[0]) + 50);
	var y_int		=	objy.split('px');
	var y_new		=	(parseInt(y_int[0]) - 50);

	loading.setAttribute('src','images/ajaxloader.gif');
	loading.setAttribute('alt','loading');
	progressbr.setAttribute('id',progressid);
	progressbr.setAttribute('class','prg');
	progressbr.appendChild(loading);
	mytxtArea.setAttribute('id',mytxtAreaid);
	mytxtArea.setAttribute('class','txtA');
	mytxtArea.setAttribute('onkeyup','savecomment2(\'comment'+id+'\')');
	mytxtArea.innerHTML	=	'add your comment here';
	savebox.setAttribute('id',saveid);
	savebox.setAttribute('class','svbox');
	savebox.setAttribute('title','hide');
	savebox.setAttribute('onclick','hidecom(\''+id+'\')')
	closebox.setAttribute('id',closeboxid);
	closebox.setAttribute('class','clbox');
	closebox.setAttribute('title','delete');
	closebox.setAttribute('onclick','closecom(\''+id+'\')')
	combartext.setAttribute('id',combartextid);
	combartext.setAttribute('class','cbrtext');
	combartext.appendChild(mytxtArea);
	combar.setAttribute('id',combarid);
	combar.setAttribute('class','combar')
	commentbox.setAttribute('id',commentid);
	commentbox.setAttribute('class','ancA');
	commentbox.setAttribute('onmouseover','cascader(\''+id+'\')');
	commentbox.setAttribute('onmousedown','if(jg)jg.clear();');
	
	commentbox.setAttribute('onmouseup','minitracker(\''+id+'\')');
	commentbox.style.zIndex	=	'5';
	commentbox.style.left	=	x_new+'px';
	commentbox.style.top	=	y_new+'px';
	combar.appendChild(savebox);
	combar.appendChild(closebox);
	commentbox.appendChild(progressbr);
	commentbox.appendChild(combar);
	commentbox.appendChild(combartext);
	 
	var movingcommentbox	=	document.getElementById(commentid);

	var linex	=	objx;
	var liney	=	objy;

	if(movingcommentbox)
	{
		var linex1	=	movingcommentbox.style.left;
		var liney1	=	movingcommentbox.style.top;	
	}
	else
	{
		var linex1	=	x_new+'px';
		var liney1	=	y_new+'px';
	}
	
	//alert(id+' '+objx+' '+objy);
	myUsefulInstance.savecoords(id,objx,objy, { 
	   "onFinish": function(response){  
		var cmntboxcheck	=	document.getElementById(id+'_holder');
		if(!cmntboxcheck)
		{
			workarea.appendChild(commentbox);
		}
		if(cmntboxcheck.style.display == 'none')
		{
			cmntboxcheck.style.display	=	'block';
		}
	 }
	});

	//pullcomment(id);
	*/
}



 function logout()
 {
	 window.location="logout.php";
 }

 function pay()
 {
	 alert('pay portal incomplete')
 }
 function dbcall(){  
     	          	     myusefulInstance.displayArea(jid, {  
   	          
   	          "onFinish": function(response){  
   	              if(response){ 
   	            	document.getElementById('displayAreaid').innerHTML	= response; 

   	            	myusefulInstance.paycallcheck(jid, {  
   	            		"preloader":"pr",  
   	            		"onFinish": function(response){  
   	            		 if(response){
   	            			document.getElementById('flbtns').innerHTML	= response;  
   	            		 }
   	            		}  
   	            		});

   	            	  
   	              }
   	          }  
   	      });
      	      
		  } 

 function rmasset(){  
	     myusefulInstance.removeasset(jid, {  
"preloader":"pr",  
"onFinish": function(response){  
 if(response) 
 {
	 dbcall();
 }
	 else
	 { 
		  displayAreaid.innerHTML = "Invalid response";  
	 }
}  
});

}

  
 function sendForm(form){  
     var plx = new PHPLiveX();  
     return plx.SubmitForm(form, {  
         "onFinish": function(response){  
       
         myusefulInstance.costcall(jid, {  
        		"onFinish": function(response){  
        		 
        		}  
        		});
         
     }  
     }); 

 }
 
  function sendForm(form){  
	      return PLX.Submit(form, {  
	          "preloader":"pr",  
	          "onFinish": function(response){  
	               
	          }  
	      });  
	  }  
 
 function redisplay()
 {
	 
	 
	 var sizesholder	=	document.getElementById('displayAreaid');
		var updatingdiv	=	document.createElement('div');
			updatingdiv.style.width	=	'495px';
			updatingdiv.style.height	=	'740px';
			updatingdiv.style.backgroundColor	=	'#000';
			updatingdiv.style.position	=	'absolute';
			updatingdiv.style.top		=	'0px';
			updatingdiv.style.left		=	'0px';
			updatingdiv.style.opacity	=	'0.5';
			updatingdiv.style.filter	=	'alpha(opacity=50)';
			updatingdiv.style.zIndex	=	'5';
			updatingdiv.style.display	=	'none';
			updatingdiv.style.textAlign	=	'center';
			updatingdiv.style.fontSize	=	'28px';
			updatingdiv.style.lineHeight	=	'335px';
			updatingdiv.style.color	=	'#fff';
			sizesholder.appendChild(updatingdiv);
			$(updatingdiv).fadeIn('slow', function() {
				updatingdiv.innerHTML	=	'updating...'
			  });
			return true;
 }

 function popup(mylink, windowname)
 {
 
  newwindow=window.open(mylink,'feb_popup1','height=700,width=800,scrollbars=no');
  if (window.focus) {newwindow.focus()}
  return false;
 
 }

 jid		=	(asload == 1)?'userid='+userid:jid;

$('.nofilestate').click(function(e){
	
	var tid	=	e.target.id.replace(/nfs/,'');
	$('#tempname').val(tid)
	$('.chpidsc').html('your templates >> upload')
	$("#upw").fadeIn('fast', function() {
		$('#button1').html('Upload '+tid)
      
		
      });
})

/*
 $('#button1').click(function(){
	 	 
	 
		var button 	= $('#button1'), interval;
		new AjaxUpload('#button1', {
			action: httphost+'/upload.php', 
			name: 'myfile',
			data : {
			'jid':'userid='+userid+'&md=template&fnm='+$('#tempname').val()
				},
			onSubmit : function(file , ext){
				
				if (ext && /^(png||jpg||jpeg)$/.test(ext)){
			
					button.text('Uploading');
					
				} else {
					
					// extension is not allowed
					
					button.text('File type error ('+ ext+')');
					
					return false;				
				}
		
			},
			onComplete : function(file){
				
				
				if(asload == 2)
				{
					window.location.reload();
				}
				
				button.text('Uploaded');
				//asload extra funct end
				}		
		});

	});
*/
//

 
function templateuploader()
{
	
	var button 	= $('#insimg'), interval;
	new AjaxUpload(button, {
		action: httphost+'/upload.php', 
		name: 'myfile',
		data : {
		'jid':'userid='+userid+'&md=template&fnm='+$('#tempname').val()+'&curpage='+$('#curpage').val()
			},
		onSubmit : function(file , ext){
			
			if (ext && /^(png||jpg||jpeg)$/.test(ext)){
		
				//button.text('Uploading');
				loadergif()
			} else {
				
				// extension is not allowed
				
				button.text('File type error ('+ ext+')');
				
				return false;				
			}
	
		},
		onComplete : function(file){
			//checking for product size			
			  applytemplate(tid,'templatebox');
                          $('#cpnotice').css({'display':'none'})
			//button.val('inserted background image');
			
                        //script copy start
                       
                        myusefulInstance.sizecheck(tid, {
		 				"onFinish": function(response){  
		 				if(response)  
		 				{
                                                     launchsizecheck(response)
                                                    
		 				}
		 				}  
		 				});
                        //script copy end 
			}		
	}); 
}

	 	
 
 $(document).ready(function(){	 	
	 
		var button 	= $('#button'), interval;
		new AjaxUpload('#button', {
			action: httphost+'/upload.php', 
			name: 'myfile',
			data : {
			'jid':jid
				},
			onSubmit : function(file , ext){
				
				if (ext && /^(jpg||jpeg||png)$/.test(ext)){
			
					button.text('Uploading');
					if(asload != 2)
					{
					document.getElementById('imgTr1c1').innerHTML	=	'<img src="'+httphost+'/images/ajaxloader.gif" alt="wait"/>';
					document.getElementById('imgTr1c2').innerHTML	=	'';
					}
				} else {
					
					// extension is not allowed
					
					button.text('File type error ('+ ext+')');
					
					return false;				
				}
		
			},
			onComplete : function(file){
				//
				if(asload != 2)
				{
				myusefulInstance.imgdata(jid, {
					"onFinish": function(response){  
					  if(response)
					  {
						var responseArray	=	response.split(',');

						document.getElementById('imgTr1c1').innerHTML	=	'<div style="background-color:#fff;width:114px;height:100px;position:relative;z-index:2;opacity:.5;top:0px;"><img src="'+responseArray[0]+'" alt="thumbnail"/></div>';
						document.getElementById('imgTr1c2').innerHTML	=	responseArray[1]+'<br /><br />'+responseArray[2]+'px X '+responseArray[3]+'px';
						if((asload != 1)&&(asload != 2))
						{
						$('#canvas').effect("pulsate", {times:3}, 1000);
						
						redisplay();
						setTimeout('document.location.href="?state=canvas"', 3000);
						}
						else
						{
							 $('#txtholder').css('visibility','visible');
							var ulde		=	document.getElementById('ulde');
							ulde.setAttribute('name',responseArray[4]);
							ulde.innerHTML	=	null;
							ulde.innerHTML	=	responseArray[5];
							
							$(ulde).fadeIn('fast', function() {
						        // Animation complete
						      });
						}
					  }
					}  
					});
								
				myusefulInstance.clearimgs(jid, {
					"onFinish": function(response){  
					  
					}  
					});
				
				button.text('Uploaded');
				//asload extra funct start
				if(asload == 1)
				{
					//calling gassets
				 assetcall(userid);
				}
				}
				
				if(asload == 2)
				{
					window.location.reload();
				}
				
				button.text('Uploaded');
				//asload extra funct end
				}		
		});

	});
 
 $('#ulde').keyup(function(e){
		
		myusefulInstance.uldestore(e.target.name,e.target.value, {
			"onFinish": function(response){  
			  if(response)
			  {
				  $('#saved').fadeIn('slow', function() {
				        // Animation complete
						setTimeout(function(){

							$('#saved').fadeOut('slow', function() {
						        // Animation complete
						      });
						 },5000); 
						
				      });
			  }
			}  
			});
		
	})

	
 $('.timg').click(function(e){
	
	 $('.timg').html(null);
	 
	imgclick(e);
	 
 })
 
 function loadergif(){
     var loadinggif  =   document.createElement('img')
                                var loadingtext =    document.createElement('p')
                                $(loadingtext).text('loading...')
                                $(loadingtext).attr({'class':'loadingtext'})
                                $(loadinggif).attr({'class':'loading', 'src':httphost+'/images/loadingAnimation.gif'})
                                $('#cpnotice').empty()
                                $('#cpnotice').append(loadingtext)
                                $('#cpnotice').append(loadinggif)
                                $('#cpnotice').css('display','block')
 }
 
 function launchsizecheck(responsedata)
 {
                                                    var maskdiv    =   document.createElement('div');
                                                    var maskedtitle   =   document.createElement('h1');
                                                    var usedwidthlb  =   document.createElement('span')
                                                    var usedheightlb =   document.createElement('span') 
                                                    
                                                    
                                                    $(usedwidthlb).attr({'id':'usedwidthlb'})
                                                   $(usedwidthlb).text('% width')
                                                   $(usedwidthlb).addClass('maskedcontnet')
                                                   
                                                   $(usedheightlb).attr({'id':'usedheightlb'})
                                                   $(usedheightlb).text('% height')
                                                   $(usedheightlb).addClass('maskedcontnet')
                                                    
                                                    $(maskedtitle).attr('class','maskedcontent')
                                                    $(maskedtitle).text('your file needs optimizing');
                                                    $(maskedtitle).css({'left':'0px','top':'0px'})
                                                    $(maskdiv).attr('class','templatemask');
                                                    //creating mytools2
                                                    var mytools2    =   document.createElement('div')
                                                    $(mytools2).addClass('mytools maskedcontent')
                                                    //creating individual tools
                                                    var rotproparea =   document.createElement('input')
                                                    $(rotproparea).attr({'id':'rotateprop','type':'button'})
                                                    var cropproparea    =   document.createElement('input')
                                                    $(cropproparea).attr({'id':'cropprop','type':'button'})
                                                    
                                                    
                                                    
                                                    //adding tools to tools container
                                                    $(mytools2).append(rotproparea)
                                                    $(mytools2).append(cropproparea)
                                                    
                                                    //extracting response data
                                                    var splitresponse   =   responsedata.split(',')
                                                   // var cropbox =   document.createElement('div')
                                                   // $(cropbox).addClass('templatecrop');
                                                   // $(cropbox).css({'width':'500px'});
                                                    $(rotproparea).click(function(){
                                                        rotateobject($('.proposedarea'))
                                                    })
                                                   
                                                    var proposedsize    =   document.createElement('div')
                                                    $(proposedsize).attr('class','proposedarea')
                                                    if(parseInt(splitresponse[0]) > parseInt(splitresponse[1])){
                                                        //landscape
                                                        $(proposedsize).css({'width':'450px','height':'300px'})
                                                    }
                                                    else
                                                        {
                                                            //portrait
                                                            $(proposedsize).css({'width':'300px','height':'450px'})
                                                        }
                                                    
                                                    //ading used width and used height meters
                                                   var usedwidth    =   document.createElement('input')
                                                   var usedx        =   document.createElement('input')
                                                   var usedy        =   document.createElement('input')
                                                   
                                                   $(usedwidth).attr({'type':'text','id':'usedwidth'})
                                                   $(usedwidth).addClass('maskedcontnet usemeters')
                                                   $(usedx).attr('id','usedx')
                                                   $(usedy).attr('id','usedy')
                                                   $(usedx).addClass('maskedcontnet usemeters')
                                                   $(usedy).addClass('maskedcontnet usemeters')
                                                   
                                                   $(mytools2).append(usedwidth)
                                                    
                                                   var usedheight    =   document.createElement('input')
                                                   $(usedheight).attr({'type':'text', 'id':'usedheight'})
                                                   $(usedheight).addClass('maskedcontnet usemeters')
                                                   $(mytools2).append(usedheight) 
                                                   $(mytools2).append(usedx)
                                                   $(mytools2).append(usedy)
                                                    //creating canvas 
                                                    var mycanvas    =   document.createElement('div')
                                                    $(mycanvas).addClass('templatecanvas maskedcontent')
                                                    //alert(splitresponse[0]+' -> '+splitresponse[1]) 
                                                    if(parseInt(splitresponse[0]) > parseInt(splitresponse[1])){
                                                    var calcimgwidth    =   500;
                                                    var calcimgheight    =   Math.round((parseInt(splitresponse[1]) * calcimgwidth)/parseInt(splitresponse[0]))
                                                     }
                                                     else
                                                         {
                                                             var calcimgheight   =  500;
                                                             var calcimgwidth    =   (parseInt(splitresponse[0])*calcimgheight)/splitresponse[1];
                                                         }
                                                    var templateimg =   document.createElement('img')
                                                    var templatehld =   document.createElement('div');
                                                    $(templatehld).addClass('templatehld maskedcontent')
                                                    $(templatehld).css({'width':calcimgwidth+'px', 'height':calcimgheight+'px'})
                                                    $(templateimg).css({'width':calcimgwidth+'px', 'height':calcimgheight+'px'})
                                                    $(templateimg).attr({'src':httphost+'/templates/'+splitresponse[3],'id':'tmpimg'})
                                                    
                                                    $(mycanvas).append(templateimg)
                                                    $(mycanvas).append(templatehld)
                                                    $(templatehld).append(proposedsize)
                                                   // $(mycanvas).append(cropbox)
                                                    //$(mycanvas).append(proposedsize)
                                                    
                                                    
                                                   $(mytools2).append(usedheightlb)
                                                   $(mytools2).append(usedwidthlb) 
                                                   
                                                    $('#outercontainer').append(mytools2)
                                                    $('#outercontainer').append(maskdiv);
                                                    $('#outercontainer').append(maskedtitle);
                                                    $('#outercontainer').append(mycanvas)
                                                    
                                                    //adding value to meters after dom inclusions above
                                                    $(usedwidth).val((parseInt($(proposedsize).css('width'))/parseInt($(templateimg).css('width')))*100)
                                                    $(usedheight).val((parseInt($(proposedsize).css('height'))/parseInt($(templateimg).css('height')))*100)
                                                    
                                                    var myratio =   (parseInt($(templateimg).css('width')) > parseInt($(templateimg).css('height')))?1.41379:0.70732;
                                                    var mymaxwidth    =   parseInt($(templateimg).css('width'));
                                                    var mymaxheight   =   (parseFloat($(templateimg).css('width')) > parseFloat($(templateimg).css('height')))?Math.round(parseFloat($(templateimg).css('width'))*0.70732):Math.round(parseFloat($(templateimg).css('width'))/0.70732);
                                                    $(proposedsize).draggable({ 
                                                        containment: "parent", 
                                                        drag:function(event, ui){
                                                           $(usedx).val((parseInt($(this).css('left'))/parseInt($(templateimg).css('width')))*100)
                                                           $(usedy).val((parseInt($(this).css('top'))/parseInt($(templateimg).css('height')))*100)
                                                        }
                                                    })
                                                    $(proposedsize).resizable({
                                                       maxWidth:mymaxwidth,
                                                       maxHeight:mymaxheight,
                                                       aspectRatio: myratio,
                                                       resize: function(event, ui) {
                                                         $(usedwidth).val((parseInt($(this).css('width'))/parseInt($(templateimg).css('width')))*100)
                                                         $(usedheight).val((parseInt($(this).css('height'))/parseInt($(templateimg).css('height')))*100)
                                                       }
                                                    });
                                                    
                                                    //adding crop functionality
                                                    $(cropproparea).click(function(){
                                                       // alert($(proposedsize).css('width')+' -> '+$(proposedsize).css('height')+' -> '+$(proposedsize).css('left')+$(proposedsize).css('top')) 
                                                   
                                                    //creating crop confirmation
                                                    var cropconfirm =   document.createElement('div')
                                                    $(cropconfirm).addClass('cropconfirm maskedcontent')
                                                    
                                                    var conftext    =   document.createElement('p')
                                                    $(conftext).text('Are you sure you would like to crop?')
                                                    $(cropconfirm).append(conftext)
                                                    //yes btn
                                                    var yescrop =   document.createElement('input')
                                                    $(yescrop).attr({'type':'button','class':'decisionbtns','id':'yescrop','value':'Ok'})
                                                    $(yescrop).click(function(){
                                                        loadergif()
                                                        //copystart
                                                        myusefulInstance.templatecropper($('#curpage').val(),tid,parseInt($(usedx).val()),parseInt($(usedy).val()),parseFloat($(usedwidth).val()),parseFloat($(usedheight).val()),myratio, {
                                                        "onFinish": function(response){  
                                                          if(response)
                                                          {
                                                              if($('#templateimg').attr('src').match(/\?/))
                                                                  {
                                                                    $('#templateimg').attr('src',$('#templateimg').attr('src')+'&t='+response)  
                                                                  }
                                                                  else
                                                                      {
                                                               $('#templateimg').attr('src',$('#templateimg').attr('src')+'?t='+response)
                                                               }
                                                               $('.templatemask, .maskedcontent').remove()
                                                               $('#cpnotice').css('display','none')
                                                          }
                                                        }  
                                                        });
                                                        //copyend
                                                        
                                                    })
                                                    
                                                    
                                                     //no btn
                                                    var nocrop =   document.createElement('input')
                                                    $(nocrop).attr({'type':'button','class':'decisionbtns','id':'nocrop','value':'Cancel'})
                                                    $(cropconfirm).append(yescrop);
                                                    $(cropconfirm).append(nocrop); 
                                                    
                                                    $('#outercontainer').append(cropconfirm)
                                                    })
                                                    $(maskdiv).fadeIn('slow')
                                                   
                                                   
                                                    
                                                    
                                                    
 }
 
 function rotateobject(obj)
 {
    var thiswidth   =   obj.css('width')
    var thisheight  =   obj.css('height')
    obj.css({'width':thisheight,'height':thiswidth}) 
 }
 
 function imgclick(e)
 {
	 imgid	=	e.target.id.split('img');
	 $('#txtholder').css('visibility','visible');
	 document.getElementById('ulde').setAttribute('name',imgid[1]);
	 document.getElementById('assetid').value	=	imgid[1];
	 
	 
	 $('#ulde').fadeIn('fast', function() {
	        // Animation complete udsc
		 
		 
		 myusefulInstance.udsc(imgid[1], {
				"onFinish": function(response){  
				  if(response)
				  {
					 
					  
					  var fullassetidsclean;
					  document.getElementById('ulde').innerHTML	=	response;
					  document.getElementById('ulde').value	=	response;//having to set value too due to firefox innerHTML property 
					  $('.cats').css('border','1px solid #eee');
					  $('.cats').css('opacity','0.3');
					  $('.cats').css('filter','alpha(opacity=30)');
					  
					  myusefulInstance.catsperasset(document.getElementById('assetid').value,0,{
						 "onFinish":function(response){
						 var newresponse	=	response.toString();						  
						 var catarray		=	newresponse.split(',');
						 i=0;
						 while(catarray[i])
						 {
							 
							 $('#'+catarray[i]).css('opacity','1');
							 $('#'+catarray[i]).css('filter','alpha(opacity=100)');
							 							 
							 i++;
						 }
  
					 }
						 
					 })
					 
					
				  }
				}  
				});
		 
		 
		 
	      });
	 //i need to highlight applicable products
	 var inDivs		=	document.getElementById('prodstrip').getElementsByTagName('div');
	 l=0;
	 while(inDivs[l])
	 {
		
		if(inDivs[l].style.backgroundImage.match(/_opacity/g,''))
		{
		 
		}
		else
		{
			inDivs[l].style.backgroundImage	=	inDivs[l].style.backgroundImage.replace(/.png/g,'_opacity.png');
		}
		
		 l++;
	 }
	 
	 
	 	 
	 myusefulInstance.highlightproducts(imgid[1],{
		 "onFinish":function(response){
		 
		 if(response)
		 {
			 
			 
			 var hproducts	=	response.split(',');
			 x=0;
			 while(hproducts[x])
			 {
				 if(document.getElementById(hproducts[x]+'_opacity'))
				 {
				document.getElementById(hproducts[x]+'_opacity').style.backgroundImage	=	'url(../images/'+hproducts[x]+'.png)';
				 }
				 x++;
			 }
			 
		 }
		 
		 
	 }
		 
	 })
	 
	 
	 assetcall(userid,e);
 }
 
 function showsmallcats(fullassetids)
 {
	 
	 //test
	 //var fullassetids		=	document.getElementById('fullassetids').value;
	  	// fullassetids		=	fullassetids.toString();
	  //	fullassetidsArray	=	fullassetids.replace(/brb/g,'');
	  	
	  	
	 var  fullassetidsclean	=	fullassetids.split(',');
	 var k=0;
	  while(fullassetidsclean[k])
	  {
		  myusefulInstance.catsperasset(fullassetidsclean[k],1,{
				 "onFinish":function(response){
			var response	=	response.toString();
				if(response)
				{
					
				var	trarray	=	response.split(',');
				
				
					for (j=0;j<=trarray.length;j++)
				{
						if(trarray[j])
						{
						trarray[j]	=	trarray[j].toString();
						trarraysplit	=	trarray[j].split('&&');
						tastid	=	trarraysplit[0];
						tctid	=	trarraysplit[1];
						newurl	=	document.getElementById('cat'+tctid+'cthldr'+tastid).style.backgroundImage.replace(/blocker/g,''); 
						
						document.getElementById('cat'+tctid+'cthldr'+tastid).style.backgroundImage	=	newurl;
						}
				}
					
						
				}
			 }
				 
			 })
			 
			 
		  k++;
	  }
	 
	 //test
 }
 
 $('.cats').click(function(e){
	
	 catclick(e);
	 
 })
 
 function catclick(e)
 {
	 var catid		=	e.target.id;
	 var assetid	=	document.getElementById('assetid').value;
	 
	 myusefulInstance.assettocats(assetid, catid,{
		"onFinish":function(response){
		
		 if(!response)
		 {
			 $('#'+e.target.id).css('opacity','0.3');
			 $('#'+e.target.id).css('filter','alpha(opacity=30)');
		 }
	 }
	 })
	 
	 $('#'+e.target.id).css('opacity','1');
			 $('#'+e.target.id).css('filter','alpha(opacity=100)');
			 

				$('#saved').fadeIn('slow', function() {
			        // Animation complete
					setTimeout(function(){

						$('#saved').fadeOut('slow', function() {
					        // Animation complete
					      });
					 },800); 
					
			      });
	 assetcall(userid,e)
 }
	
function assetcall(userid,e)
{
	var fullassetids	=	'';
	myusefulInstance.gassets(userid, {
		"onFinish": function(response){  
		var responsearray	=	response.split('&&&');
		if(responsearray.length > 6)
		{
			//creating scrollers here because we have more than 6
			var artscrollt	=	document.createElement('div');
			$(artscrollt).click(function(e){
				scrollitup()
			})
			artscrollt.setAttribute('id','artscrollt');
			
			var artscrollb	=	document.createElement('div');
			$(artscrollb).click(function(e){
				scrollitdown()
			})
			artscrollb.setAttribute('id','artscrollb');
			document.getElementById('gboxcontainer').appendChild(artscrollb);
			document.getElementById('gboxcontainer').appendChild(artscrollt);
		}

		var gassethld	=	document.getElementById('assetbelt');
		var artscroller	=	document.createElement('div');
			artscroller.setAttribute('id','artscroller');
			
			artscroller.style.height	=	'500px';
			artscroller.style.position	=	'absolute';
			artscroller.style.top		=	'10px';
			artscroller.style.left		=	'0px';
			artscroller.style.border	=	'none';
			
		//creating art label
		var artlabel	=	document.createElement('DIV');
			artlabel.setAttribute('class','stlabels');
			artlabel.innerHTML	=	'your art';
			artlabel.style.width	=	'150px';
			artlabel.style.height	=	'20px';
			artlabel.style.backgroundColor	=	'#fff';
			artlabel.style.position	=	'absolute';
			artlabel.style.right	=	'5px';
			artlabel.style.top	=	'-12px';
			artlabel.style.zIndex	=	'100';
			artlabel.style.textTransform	=	'capitalize';
			artlabel.style.fontSize	=	'13px';
			artlabel.style.lineHeight	=	'20px';
			gassethld.innerHTML	=	'';
			gassethld.appendChild(artlabel);
			
		for (i=0;i<=responsearray.length;i++)
		{
			if(typeof(responsearray[i]) != 'undefined'){
				responsearray[i]	=	responsearray[i].toString();
			var	mydataArray	=	responsearray[i].split(',');
//dealing with each upload here
			var uploadiv	=	document.createElement('div');
			var uploadimg	=	document.createElement('img');
			var descdiv		=	document.createElement('div');
			var closediv	=	document.createElement('div');
			
			closediv.setAttribute('id','cls'+mydataArray[0]);
			closediv.style.textAlign		=	'center';
			closediv.style.width			=	'17px';
			closediv.style.height			=	'17px';
			closediv.style.fontSize			=	'17px';
			closediv.style.position			=	'absolute';
			closediv.style.right			=	'0px';
			closediv.style.top				=	'30px';
			closediv.style.cursor			=	'pointer';
			closediv.style.color			=	'#ff0000';
			closediv.innerHTML				=	'X';
			$(closediv).click(function(e){
				
				rmoveasset(e.target.id,e);
				$('#ulde').fadeOut('fast', function() {
					
			      });
				
			})
			
			descdiv.setAttribute('id','dsc'+mydataArray[0]);
			descdiv.setAttribute('title', mydataArray[2]);
			
			descdiv.style.width				=	'110px';
			descdiv.style.height			=	'20px';
			descdiv.style.border			=	'1px solid #cccccc';
			descdiv.style.backgroundColor	=	'#ffffff';
			descdiv.style.position			=	'absolute';
			descdiv.style.bottom			=	'3px';
			descdiv.style.textAlign			=	'left';
			descdiv.style.fontSize			=	'10px';
			descdiv.innerHTML				=	mydataArray[2];
			
			uploadimg.setAttribute('id','img'+mydataArray[0]);
			uploadimg.setAttribute('class','timg');
			uploadimg.style.cursor			=	'pointer';
			//uploadimg.style.height			=	'148px';
			
			uploadimg.src					=	mydataArray[1];
			
			if($('#assetid').val() == mydataArray[0])
			{
				uploadiv.style.backgroundColor	=	'#ccc';
				descdiv.style.backgroundColor	=	'#99ff99';	 
			}
			else
			{
				uldename	=	document.getElementById('ulde');
				
				if(parseInt(uldename.name) == parseInt(mydataArray[0]))
				{
					uploadiv.style.backgroundColor	=	'#ccc';
					descdiv.style.backgroundColor	=	'#99ff99';	 
				}
			}
			uploadiv.setAttribute('id','ast'+mydataArray[0]);
			uploadiv.style.width			=	'110px';
			uploadiv.style.height			=	'148px';
			uploadiv.style.marginTop		=	'5px';
			uploadiv.style.marginBottom		=	'30px';
			uploadiv.style.marginLeft		=	'5px';
			uploadiv.style.position			=	'relative';
			uploadiv.style.cssFloat			=	'left';
			uploadiv.style.styleFloat		=	'left';
			uploadiv.style.border			=	'2px solid transparent';
			
			//creating whitebar to hold small cats
			var catsholder	=	document.createElement('DIV');
			
			catsholder.setAttribute('id','cthldr'+mydataArray[0])
			catsholder.style.width	=	'100%';
			catsholder.style.height	=	'12px';
			catsholder.style.backgroundColor	=	'#fff';
			catsholder.style.position			=	'absolute';
			catsholder.style.opacity			=	'0.8';
			catsholder.style.filter				=	'alpha(opacity=80)';
			
			var	allcats		=	document.getElementById('assetcats').value;
			allcats			=	allcats.toString();
			allcatsarray	=	allcats.split(',');
			z=0;lepx	=	10;incrpx	=	13;
			while(allcatsarray[z])
			{
				//building asset specific cats
				catcomponents	=	allcatsarray[z].split('&&');
				var smlcats	=	document.createElement('DIV');
				
				smlcats.setAttribute('id','cat'+catcomponents[0]+'cthldr'+mydataArray[0]);
				
				smlcats.style.width		=	'10px';
				smlcats.style.height	=	'10px';
				smlcats.style.backgroundImage	=	'url('+catcomponents[1]+'blocker)';
				smlcats.style.backgroundPosition	=	'20px 20px';
				smlcats.style.cssFloat			=	'left';
				smlcats.style.position			=	'absolute';
				smlcats.style.left				=	lepx+'px';
				smlcats.style.top				=	'0px';
				smlcats.style.border			=	'1px solid #ccc';
				
				catsholder.appendChild(smlcats);
					lepx	=	lepx +incrpx;
					z++;
			}
			
			
			$(uploadimg).click(function(e){
				
				imgclick(e);
				
			})
			
			uploadiv.appendChild(catsholder);
			descdiv.appendChild(closediv);
			uploadiv.appendChild(descdiv);
			uploadiv.appendChild(uploadimg);
			artscroller.appendChild(uploadiv)
			gassethld.appendChild(artscroller);
		
			//test
			
				fullassetids	+= (fullassetids)?','+mydataArray[0]:mydataArray[0];
			
			//test
			}
	}
		
		document.getElementById('fullassetids').value	=	fullassetids
		showsmallcats(fullassetids);
		
		}  
		});
	
	
}

$('.cls').click(function(e){
	
	rmoveasset(e.target.id,e);
})

function rmoveasset(tarid,e)
{
	
	myusefulInstance.removeasset(tarid, {  
		
		"onFinish": function(response){  
		if(response)
		{
			assetcall(userid,e);
		}
			
		}  
		});
	
	
}

function showpLayer()
{

	document.getElementById('pLayer').style.display	= 'block';
	setTimeout('document.getElementById("pLayer").style.display	= "none";', 30000)
}

function hidepLayer()
{
	document.getElementById("pLayer").style.display	= "none";
}

function fadeidin(thisid)
{
	
	document.getElementById(thisid).style.opacity	= '1';
	document.getElementById(thisid).style.filter	= 'alpha(opacity = 100)';
}

function fadeidout(thisid)
{
	
	document.getElementById(thisid).style.opacity	= '0.4';
	document.getElementById(thisid).style.filter	= 'alpha(opacity = 40)';
}
 

function addproduct(id)
{

	myusefulInstance.adproduct(id,jid, {  
		"onFinish": function(response){  
		 if(response)
		 {
			 
			 myusefulInstance.productcarousel(jid,1, {  
					"onFinish": function(response){  
					 if(response)
					 {
						carouselbuilder(response);
						//var ccontents1	=	carouselbuilder(response);

						
						
						
						myusefulInstance.productname(jid, {
							"onFinish": function(response){ 
							if(response)
							{
								var crt			=	 document.getElementById('crt');
								crt.innerHTML	=	'<h3>'+response+' Sizes</h3>';
								myusefulInstance.productid(jid, {
									"onFinish": function(response){  
									myusefulInstance.papersizes(response,'papersize','js', {
										"onFinish": function(response){  
										if(response)
										{
											var shol		=	 document.getElementById('sHol');
												shol.innerHTML	=	'';
											var papersizesAr	=	response.split('&&');
											var ptable			=	document.createElement('TABLE');
											ptable.style.width			=	'100%';
											ptable.style.lineHeight		=	'20px';
											
											var pbody			=	document.createElement('TBODY');
											
											
											var	a	=	0;
											var mrow	= new	Array();
											var cell	= new	Array();
											var nm		= new	Array();
											var radbtn	= new   Array();
											
											while(papersizesAr[a])
											{
												
												  mrow[a]	=	document.createElement('TR');
												  ppsAr		=	papersizesAr[a].split(',');
												  
													  cell[1]	=	document.createElement('TD');
													  cell[2]	=	document.createElement('TD');
													  cell[3]	=	document.createElement('TD');
													  nm[1]		=	document.createTextNode(ppsAr[0]);
													  nm[2]		=	document.createTextNode('('+ppsAr[2]+' X '+ppsAr[3]+')');
													  
													  cell[1].style.color	=	ppsAr[4];
													  cell[1].style.fontSize	=	'13px';
													  cell[1].style.textTransform	=	'uppercase';
													  cell[2].style.textAlign	=	'center';
													  radbtn	=	document.createElement('INPUT');
													  radbtn.setAttribute('name','papersizes');
													  radbtn.setAttribute('id',ppsAr[0]);
													  radbtn.setAttribute('value',ppsAr[1]);
													  radbtn.setAttribute('class','szEl');
													  radbtn.setAttribute('type','radio');
													  $(radbtn).click(function(e){
														  ssave(e);
														  filldv_r(1)
													  })
													  
													
													cell[1].appendChild(nm[1]);
													cell[2].appendChild(nm[2]);
													cell[3].appendChild(radbtn);
													mrow[a].appendChild(cell[1]);
													mrow[a].appendChild(cell[2]);
													mrow[a].appendChild(cell[3]);
													pbody.appendChild(mrow[a])
												
												a++;
											}
											
											ptable.appendChild(pbody);
											shol.appendChild(ptable);
										}
										
										}  
										});
									}  
									});
								
								
							}
							  
							}  
						
							});
					
						//here
						//document.getElementById("cah").innerHTML	=	'';
						//document.getElementById("cah").appendChild(ccontents)
						document.getElementById("displayAreaid").innerHTML	=	'';
						//document.getElementById("displayAreaid").appendChild(ccontents1);
						calltemplates(jid)
						
					 }
					 
					}  
					});
		 }
			 
		}  
		});
	
	

	
	filldv_r(1)
	
}


function calltemplates(jid)
{
	myusefulInstance.fullproducts(jid, {  
		
		"onFinish": function(response){  
		 if(response) 
		 {
			 
			 
			 //looping templates
			 var responseArray	=	response.split('&&');
			 var i	=	0;
			 while(responseArray[i])
			 {
				 var objvars		=	responseArray[i].split(',');
				 var templatebox	=	document.createElement('div');
				 var templatename	=	document.createElement('div');
				 
				 templatename.style.width	=	'96px';
				 templatename.style.height	=	'20px';
				 templatename.style.backgroundColor	=	'#ddd';
				 templatename.style.border	=	'1px solid #eee';
				 templatename.style.position	=	'absolute';
				 templatename.style.bottom		=	'1px';
				 templatename.style.left		=	'1px';
				 templatename.style.fontSize	=	'10px';
				 templatename.style.textTransform	=	'capitalize';
				 templatename.innerHTML	=	objvars[3];
				 
				 templatebox.setAttribute('id','tox'+objvars[0])
				 templatebox.style.width	=	'100px';
				 templatebox.style.height	=	'120px';
				 templatebox.style.background	=	'#ccc url('+objvars[4]+') no-repeat';
				 templatebox.style.cssFloat	=	'left';
				 templatebox.style.styleFloat	=	'left';
				 templatebox.style.marginTop	=	'20px';
				 templatebox.style.marginLeft	=	'15px';
				 templatebox.style.marginRight	=	'7px';
				 templatebox.style.position		=	'relative';
				 templatebox.style.display		=	'none';
				 templatebox.appendChild(templatename);
				 document.getElementById("displayAreaid").appendChild(templatebox);
				 $(templatebox).fadeIn('fast', function() {
						
			      });
				 i++;
			 }
			 
		 }
		}  
		});
}
 
function carouselbuilder(idarray)
{
	
	var thearray	=	idarray.split(',')
	//the containing div
	var containerdiv	=	document.getElementById('cah');
		//containerdiv.setAttribute('id', 'cah');
		//containerdiv.style.width	=	'100%';
		//containerdiv.style.height	=	'100px';
		//containerdiv.style.position	=	'relative';
		//containerdiv.style.cssFloat			=	'left';
		//containerdiv.style.textAlign			=	'left';
		//containerdiv.style.zIndex	=	'5';
	containerdiv.innerHTML	=	'';
	for ( var i=0, len=thearray.length; i<len; ++i ){
		
		//var	divleftp	=	(50 * i) + 5;
		eachdiv	=	document.createElement('div');
		eachdiv.setAttribute('id',thearray[i]);
		//eachdiv.setAttribute('class','pBlok');
		eachdiv.style.width			=	'46px';
		eachdiv.style.height		=	'65px';
		$(eachdiv).css('float','left')
		eachdiv.style.marginTop		=	'3px';
		eachdiv.style.marginRight		=	'5px';
		eachdiv.style.marginBottom		=	'5px';
		eachdiv.style.position		=	'relative';
		eachdiv.style.display		=	'block';
		eachdiv.style.zIndex		=	'6';
		eachdiv.style.backgroundImage	=	'url(images/'+thearray[i]+'.png)';
		eachdiv.style.backgroundRepeat	=	'no-repeat';
		eachdiv.style.cursor			=	'pointer';
		$(eachdiv).click(function(e) {
			addproduct(e.target.id);
			
		});
		containerdiv.appendChild(eachdiv);
		}
	
}


function scrl()
{

	//scrollpane parts
	var scrollPane = $('.scroll-pane');
	var scrollContent = $('.scroll-content');
	
	//build slider
	var scrollbar = $(".scroll-bar").slider({
		slide:function(e, ui){
			if( scrollContent.width() > scrollPane.width() ){scrollContent.css('margin-left', Math.round( ui.value / 100 * ( scrollPane.width() - scrollContent.width() )) + 'px');}
			else {scrollContent.css('margin-left', 0);}
		}
	});
	
	//append icon to handle
	var handleHelper = scrollbar.find('.ui-slider-handle')
	.mousedown(function(){
		scrollbar.width( handleHelper.width() );
	})
	.mouseup(function(){
		scrollbar.width( '100%' );
	})
	.append('<span class="ui-icon ui-icon-grip-dotted-vertical"></span>')
	.wrap('<div class="ui-handle-helper-parent"></div>').parent();
	
	//change overflow to hidden now that slider handles the scrolling
	scrollPane.css('overflow','hidden');
	
	//size scrollbar and handle proportionally to scroll distance
	function sizeScrollbar(){
		var remainder = scrollContent.width() - scrollPane.width();
		var proportion = remainder / scrollContent.width();
		var handleSize = scrollPane.width() - (proportion * scrollPane.width());
		scrollbar.find('.ui-slider-handle').css({
			width: handleSize,
			'margin-left': -handleSize/2
		});
		handleHelper.width('').width( scrollbar.width() - handleSize);
	}
	
	//reset slider value based on scroll content position
	function resetValue(){
		var remainder = scrollPane.width() - scrollContent.width();
		var leftVal = scrollContent.css('margin-left') == 'auto' ? 0 : parseInt(scrollContent.css('margin-left'));
		var percentage = Math.round(leftVal / remainder * 100);
		scrollbar.slider("value", percentage);
	}
	//if the slider is 100% and window gets larger, reveal content
	function reflowContent(){
			var showing = scrollContent.width() + parseInt( scrollContent.css('margin-left') );
			var gap = scrollPane.width() - showing;
			if(gap > 0){
				scrollContent.css('margin-left', parseInt( scrollContent.css('margin-left') ) + gap);
			}
	}
	
	//change handle position on window resize
	$(window)
	.resize(function(){
			resetValue();
			sizeScrollbar();
			reflowContent();
	});
	//init scrollbar size
	setTimeout(sizeScrollbar,10);//safari wants a timeout	
} 

scrl();

$('.radiobtns').click(function(e){
	var paydetail =	new Array();
	var ptail	  =	new Array();
	ptail[0]	=	'bank_name';
	ptail[1]	=	'account_name';
	ptail[2]	=	'account_number';
	ptail[3]	=	'sort_code';
	ptail[4]	=	'BIC_Code';
	ptail[5]	=	'IBAN';
	ptail[6]	=	'paypal_email';
	ptail[7]	=	'paypal_password';
	switch(parseInt(e.target.value))
	{
	case 1:
		paydetail[0]	=	'bank_name';
		paydetail[1]	=	'account_name';
		paydetail[2]	=	'account_number';
		paydetail[3]	=	'sort_code';
		paydetail[4]	=	'BIC_Code';
		paydetail[5]	=	'IBAN';
		break;
	case 2:
		paydetail[0]	=	'paypal_email';
		paydetail[1]	=	'paypal_password';
		break;
	case 3:
		paydetail[0]	=	'account_name';	
		break;
	
	}
var	i	=	0;
	
	while(ptail[i])
	{
		document.getElementById(ptail[i]).disabled	=	true;
		i++;
	}
	
	var	i	=	0;
	
	while(paydetail[i])
	{
		document.getElementById(paydetail[i]).disabled	=	false;
		i++;
	}
	
	//savefield($table,$field,$value,$whereIDNAME,$whereID)
	myusefulInstance.savefield('payment_info',e.target.name,e.target.value,'user_id',userid, {  
		 "onFinish": function(response){  
			}  
		});
	
})


$('.pinfol').keyup(function(e){
	//savefield($table,$field,$value,$whereIDNAME,$whereID)
	myusefulInstance.savefield('payment_info',e.target.name,e.target.value,'user_id',userid, {  
		 "onFinish": function(response){  
			}  
		});
	
})

$('#payfrequency').change(function(e){
	//savefield($table,$field,$value,$whereIDNAME,$whereID)
	myusefulInstance.savefield('payment_info','frequency_id',e.target.value,'user_id',userid, {  
		 "onFinish": function(response){  
			}  
		});
})

$('#artscrollt').click(function(e){
	scrollitup();
})

$('#artscrollb').click(function(e){
	scrollitdown();	
})

$('#pprev').click(function(e){
	//
	jQuery("#proler").animate({"left": "+=150px"}, "slow");
})

$('#pnext').click(function(e){
	//
	jQuery("#proler").animate({"left": "-=150px"}, "slow");
})

function scrollitdown()
{
	jQuery("#artscroller").animate({"top": "-=200px"}, "slow");
}

function scrollitup()
{
	jQuery("#artscroller").animate({"top": "+=200px"}, "slow");
}

function newtemplform(response)
{
	$('#chpidsc').append(' >> new')
	$('#cnbtn').remove();
	$('#exbtn').remove();
	
	var templname	=	document.createElement('input');
	$(templname).attr('name','templatename')
	$(templname).attr('id','templatename')
	$(templname).attr('type','text')
	$(templname).attr('value','name')
	$(templname).keyup(function(){
		checktemplate($(this).val());
	})
	
	$('#chpid').append(templname)
	//templatexample
	var templex	=	document.createElement('input');
	$(templex).attr('name','templatexample')
	$(templex).attr('id','templatexample')
	$(templex).attr('type','text')
	$(templex).attr('value','description')
	$('#chpid').append(templex)
	
	//templatsbmt
	var templsub	=	document.createElement('input');
	$(templsub).attr('name','instemplate')
	$(templsub).attr('id','instemplate')
	$(templsub).attr('type','button')
	$(templsub).attr('value','create template')
	
	$(templsub).click(function(e){
		//creatingtemplate(e)
		insntmp();
		$('#cpnotice').css('display','block');
		$('#cpnotice').text('Click on yellow highlight to continue.')
	//	$('#chpid').css('display','none')
		//initialcall();
	})
	
	
	
	//pull the default page count
	var response;
	myusefulInstance.getproductpagecount($('#selprod').val(), {  
		 "onFinish": function(response){  
		
		if(response){
		if(response != 'fail')
		{
			$('#curpage').val(response)
		}
		else
		{
			//creating number of pages
			var numpages	=	document.createElement('input');
			$(numpages).attr('id','numpages')
			$(numpages).attr('type','text')
			$(numpages).attr('name','numpages')
			$(numpages).val('no pages')
			$(numpages).bind('keyup mouseup',function(){
				if($(this).val()){
				$('#curpage').val($(this).val())
				}
			})		
			
			$('#chpid').append(numpages);		
			$(numpages).keyup(function(){
				if($(this).val().match(/[A-Za-z]/))
				{
					$(this).val(1)
				}			
			})
			
			$(numpages).blur(function(){
				if($(this).val() == '')
				{
					$(this).val('no pages')
				}
					
			})
			$(numpages).focus(function(){
				if($(this).val() == 'no pages')
				{
					$(this).val('')
				}
					
			})
		}
		
		
		
		}
		
			}  
		});
	
	$('#chpid').append(templsub)
	
	
	$(templname).focus(function(){
		if($(this).val() == 'name')
		{
			$(this).val('')
			//showing cpnotice
			$('#cpnotice').html('<p><b>Give your template a name</b></p><p>The more intuitive or self descriptive the name is the better.</p>')
			$('#cpnotice').fadeIn(function(){})
		}
			
	})
	
	$(templname).blur(function(){
		if($(this).val() == '')
		{
			$(this).val('name')
			$('#cpnotice').fadeOut(function(){})
		}
			
	})
	
	$(templex).focus(function(){
		if($(this).val() == 'description')
		{
			$(this).val('')
			$('#cpnotice').text('Users will see the desription you provide as a tooltip on hovering over the template icon.')
			$('#cpnotice').fadeIn(function(){})
		}
			
	})
	
	$(templex).blur(function(){
		if($(this).val() == '')
		{
			$(this).val('description')
			$('#cpnotice').fadeOut(function(){})
		}
			
	})

}


function checktemplate(nwtmval)
{
	//checktemplate
	myusefulInstance.checktemplate(nwtmval, {  
		 "onFinish": function(response){  
		if(response)
		{
			$('#instemplate').css('display','none')
		}
		else
		{
			$('#instemplate').css('display','block')
		}
			
			}  
		});
}

function productselected(e)
{
	$('#selprod').val(parseInt(e.target.id));
	myusefulInstance.productnamenoid(parseInt(e.target.id), {  
		 "onFinish": function(response){  
		if(response)
		{
			//alert(response)
			$('#chpidsc').append(' >> '+response)
			$('#selprod').css('display','none')
			$('#cah').remove()
			//creating create new btn
			var createnewbtn	=	document.createElement('div');
			$(createnewbtn).attr('id','cnbtn')
			$(createnewbtn).html('New template')
			$(createnewbtn).click(function(e){
				/*$('#templates, #templatelabel').fadeIn('fast', function() {
					
				})*/
				
				//$('#chpid').css('display','none')
				//initialcall()	
				//preparing new template form elements
				newtemplform(response)
				
			})
			$('#chpid').append(createnewbtn)
			
			//creating create exist btn
			var existbtn	=	document.createElement('div');
			$(existbtn).attr('id','exbtn')
			$(existbtn).html('Customize template')
			$(existbtn).click(function(e){
				$('#templates, #templatelabel').fadeOut('fast', function() {
				$('#cpnotice').html('<p>Choose a template to get  you started.</p>')
				$('#cpnotice').css({'display':'block'})
				})
				
				$('#chpid').css('display','none')
				initialcall()	
			})
			$('#chpid').append(existbtn)
		}
			
			
			
			}  
		});
}


function productselect(e)
{

	//$('#selprod').val(parseInt(e.target.id));
	myusefulInstance.productnamenoid($('#selprod').val(), {  
		 "onFinish": function(response){  
		if(response)
		{
			//alert(response)
			$('#chpidsc').append(' >> '+response)
			$('#selprod').css('display','none')
			$('#cah').remove()
			//creating create new btn
			var createnewbtn	=	document.createElement('div');
			$(createnewbtn).attr('id','cnbtn')
			$(createnewbtn).html('create new '+response)
			$(createnewbtn).click(function(e){
				/*$('#templates, #templatelabel').fadeIn('fast', function() {
					
				})*/
				
				//$('#chpid').css('display','none')
				//initialcall()	
				//preparing new template form elements
				newtemplform(response)
				
			})
			$('#chpid').append(createnewbtn)
			
			//creating create exist btn
			var existbtn	=	document.createElement('div');
			$(existbtn).attr('id','exbtn')
			$(existbtn).html('choose from template')
			$(existbtn).click(function(e){
				$('#templates, #templatelabel').fadeOut('fast', function() {
					
				})
				
				$('#chpid').css('display','none')
				initialcall()	
			})
			$('#chpid').append(existbtn)
		}
			
			
			
			}  
		});
}


$('.pBlokt').click(function(e){
	
	productselected(e)
	
})

$('#selprod').change(function(e){
	
	productselect(e)
	
})


});