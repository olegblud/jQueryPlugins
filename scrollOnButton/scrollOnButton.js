(function($){
	$.fn.scrollOnButton = function (User_Settings){

		var Button = this;

		var Default_Settings = {
			animate:'AnimateDown',
			duration:500
		};

		var Settings = $.extend(                     /* Соединеие настроек по-умолчанию и пользовательских, если они есть */
			Default_Settings,User_Settings
		);

		Button.click(function(){
			var Height = $('body, html').height();

			switch (Settings.animate){

				case 'AnimateDown':{$('body,html').animate({
					scrollTop:Height
				},Settings.duration); break;}

				case 'AnimateUp':{$('body,html').animate({
					scrollTop:0
				},Settings.duration); break;}

				default:{$('body,html').animate({
					scrollTop:Height
				},Settings.duration); break;}
			}



		});

	}
	})(jQuery);

