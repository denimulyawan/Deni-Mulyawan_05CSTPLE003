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
 * Locale: MY (Malay; Melayu)
 */
$.extend( $.validator.messages, {
	required: "Medan ini diperlukan.",
	remote: "Sila betulkan medan ini.",
	email: "Sila Input Address emel yang betul.",
	url: "Sila Input URL yang betul.",
	date: "Sila Input tarikh yang betul.",
	dateISO: "Sila Input tarikh(ISO) yang betul.",
	number: "Sila Input nombor yang betul.",
	digits: "Sila Input nilai digit sahaja.",
	creditcard: "Sila Input nombor kredit kad yang betul.",
	equalTo: "Sila Input nilai yang sama semula.",
	extension: "Sila Input nilai yang telah diterima.",
	maxlength: $.validator.format( "Sila Input tidak lebih dari {0} aksara." ),
	minlength: $.validator.format( "Sila Input sekurang-kurangnya {0} aksara." ),
	rangelength: $.validator.format( "Sila Input antara {0} dan {1} panjang aksara." ),
	range: $.validator.format( "Sila Input nilai antara {0} dan {1} aksara." ),
	max: $.validator.format( "Sila Input nilai yang kurang atau sama dengan {0}." ),
	min: $.validator.format( "Sila Input nilai yang lebih atau sama dengan {0}." )
} );
return $;
}));