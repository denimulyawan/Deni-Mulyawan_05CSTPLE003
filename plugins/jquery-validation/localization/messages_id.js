(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ID (Indonesia; Indonesian)
 */
$.extend( $.validator.messages, {
	required: "Kolom ini diperlukan.",
	remote: "Harap benarkan kolom ini.",
	email: "Silakan Input format email yang benar.",
	url: "Silakan Input format URL yang benar.",
	date: "Silakan Input format Date yang benar.",
	dateISO: "Silakan Input format Date(ISO) yang benar.",
	number: "Silakan Input angka yang benar.",
	digits: "Harap masukan angka saja.",
	creditcard: "Harap Input format kartu kredit yang benar.",
	equalTo: "Harap Input nilai yg sama dengan sebelumnya.",
	maxlength: $.validator.format( "Input dibatasi hanya {0} karakter." ),
	minlength: $.validator.format( "Input tidak kurang dari {0} karakter." ),
	rangelength: $.validator.format( "Panjang karakter yg diizinkan antara {0} dan {1} karakter." ),
	range: $.validator.format( "Harap Input nilai antara {0} dan {1}." ),
	max: $.validator.format( "Harap Input nilai lebih kecil atau sama dengan {0}." ),
	min: $.validator.format( "Harap Input nilai lebih besar atau sama dengan {0}." )
} );
return $;
}));