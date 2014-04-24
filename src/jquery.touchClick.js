/*! jQuery TouchClick. MIT License. https://github.com/easy-designs/jquery.touchClick.js */

/* touchClick() is a jQuery plugin port of http://jsbin.com/ijizat/25
 * 
 * This plugin allows you to assign events to all tap events while ensuring the 
 * events don’t fire twice
 * 
 * Usage:
 * 
 *  var $target = $('#target'),
 * 		$b = $('<b/>');
 *  $('button')
 * 		.touchClick(function( e ){
 * 			$target.append(
 * 				$b.clone()
 * 					.text(
 * 						$( e.target ).text() + ' ' + e.type
 * 					)
 *			);
 *		});
 * 
 **/
jQuery.fn.touchClick = function( callback ){
	
	return $( this ).on( 'touchstart click', function( e ){
		e.stopPropagation();
		e.preventDefault();
		if ( e.handled !== true )
		{
			callback( event );
			e.handled = true;
		}
		else
		{
			return false;
		}
	});
	
};