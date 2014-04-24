jquery.touchClick.js
====================

This plugin allows you to assign events to all tap events while ensuring the 
events don’t fire twice. touchClick() is a jQuery plugin port of http://jsbin.com/ijizat/25

Usage
-----

	var $target = $('#target'),
		$b = $('<b/>');
	
	$('button')
		.touchClick(function( e ){
			$target.append(
				$b.clone()
					.text(
						$( e.target ).text() + ' ' + e.type
					)
			);
		});