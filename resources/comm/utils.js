
/*  Ajax function  

function $ajax ( path , callbackFn ){
 $.ajax({ url : path
		, type : POST
		, success : function(result){
      		if (callbackFn != null){
				callbackFn();
			}
		}
		, error : function(xhr,status,error){
			
			}
		}
    }});
}
*/

function $ajax ( path , jsonData , callbackFn ){
	$.ajax({
		   url : path
		, type : 'POST'
		, data : jsonData
		, success : function(result) {
			if (callbackFn != null){
				callbackFn(result);
			}
		}
		, error: function(xhr,status,errorResult) {
			if (callbackFn != null){
				callbackFn(errorResult);
			}
		} 
	});
}

//dataType: 'jsonp',