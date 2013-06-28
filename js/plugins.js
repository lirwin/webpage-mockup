// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
    //Created subnav dropdowns for main nav
	$("li.subnav").click(function() { //When nav item with a subnav is clicked...
		$(this).children("a").addClass("highlight");
		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).find("ul").show(); //Drop down the subnav on click

		$(this).hover(function() {
		}, function(){	
			$(this).find("ul").hide("fast"); //When the mouse hovers out of the subnav, move it back up
			$(this).children("a").removeClass("highlight");
		});
	});

	//Initialize tabs widget
	$(function() {
		$( "#tabs" ).tabs();
		$( "#tabs2" ).tabs();


		// Hover states on the static widgets
		$( "#dialog-link, #icons li" ).hover(
			function() {
				$( this ).addClass( "ui-state-hover" );
			},
			function() {
				$( this ).removeClass( "ui-state-hover" );
			}
		);
	});
	   	 
	//Remove dotted outline on visited links
	var links = document.getElementById('nav').getElementsByTagName('a');
	for ( var i = 0; i < links.length; i++ ) {
	    links[i].onmousedown = function () {
	        this.blur();
	        return false;
	    };
	    links[i].onclick = function() {
	        this.blur();
	    };
	}
	
	//Main search box onfocus and onblur event handlers
	$("#mainSearch input[type=text]").focus(function() {
		if (this.value == "Search here..."){
			this.value = "";
		}
	});
	$("#mainSearch input[type=text]").blur(function() {
		if (this.value == ""){
			this.value = "Search here...";
		}
	});
});
