(function() {
	$.extend({
		removeModa:function(){
			$('.myModa').fadeOut(300);
			setTimeout(function(){
				$('.myModa').remove();
			},300)
		},
		myAlert: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}or"需要提示的话"
			var option={title:"提示",message:"程序员太傻，忘记输入提示内容啦……",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox"  style="margin-top:'+top+'px"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="btn sure">确定</div></div></div>');
			$('body').css('overflow-y', 'hidden');
			$('.btn.sure').click(function(){
				$.removeModa();
				$('body').css('overflow-y', 'scroll');
				option.callback();
			})
		},
		myConfirm: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}or"需要提示的话"$.myConfrim()
			var option={title:"提示",message:"程序员太傻，忘记输入提示内容啦……",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox" style="margin-top:'+top+'px"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="col2"><div class="col" style="margin-right: 20px;"><div class="btn exit">取消</div></div><div class="col"><div class="btn sure">确定</div></div></div></div></div>');
			$('body').css('overflow-y', 'hidden');
			$('.btn.exit').click(function(){
				$.removeModa();
				$('body').css('overflow-y', 'scroll');
			})
			$('.btn.sure').click(function(){
				$.removeModa();
				$('body').css('overflow-y', 'scroll');
				option.callback();
			})
		},
		myToast:function(message){
			var top=$(window).height()*0.3;
			$('body').append('<div class="myToast">'+message+'</div>');
			var top=($(window).height()-$('.myToast').height())/2;
			var left=($('body').width()-$('.myToast').width())/2;
			$('.myToast').css({'top':top+'px','left':left+'px'});
			setTimeout(function(){
				$('.myToast').fadeOut(300);
				setTimeout(function(){
					$('.myToast').remove();
				},300)
			},1000)
		},
		myLoadding:function(message){
			var m=message||'加载中，请稍后...'
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myLoadding"><img src="data:image/gif;base64,R0lGODlhMgAyANUrAH19faqnp5CQkKakpJmYmJeWlo+Pj5iXl4+Ojn5+fp6cnIaGhoGBgZCPj5WUlJWVlauoqJaVlZ2cnKelpaqoqKSioqimppuamqKgoKGgoJybm5GQkJ+dnammpo2MjIKBgY2NjYiIiIODg4WFhYCAgI6NjYqKioKCgoqJia2qqo6Ojv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5QjNCN0FERDlERTNFNzExOTkzNURDQzYyNThDMzVGQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NkVFNTEzNEUzQTIxMUU3ODU3MUQ3MDZGMTE4RDZBOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NkVFNTEzM0UzQTIxMUU3ODU3MUQ3MDZGMTE4RDZBOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJv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"/><p>'+m+'</p></div></div>');
			var top=($(window).height()-$('.myLoadding').height())/2;
			var left=($('body').width()-$('.myLoadding').width())/2;
			$('.myLoadding').css({'top':top+'px','left':left+'px'});
		},
	});
})(jQuery)

