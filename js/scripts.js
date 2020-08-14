jQuery( document ).ready( function ( $ ) {
	
		/*placeholder*/
    $.Placeholder.init( { color: "#dddddd" } );

	
	
    /*placeholder*/
    $( '.count-list, .progress-bars-list' ).viewportChecker( {
        callbackFunction: function ( elem, action ) {
            $( '.count, .percent span' ).each( function () {
                $( this ).prop( 'Counter', 0 ).animate( {
                    Counter: $( this ).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function ( now ) {
                        $( this ).text( Math.ceil( now ) );
                    }
                } );
            } );
        }
    } );


    $( '#myTab a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
    } )
    $( '#myTab2 a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
    } )
    $( '#myTab3 a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
    } )



    //Generation map google

    var mapGoogle = {
        $wrap: $( '#map-canvas' ),
        init: function () {
            var $lati = this.$wrap.attr( 'data-lat' ), //ÑˆÐ¸Ñ€Ð¾Ñ‚Ð°
                $longi = this.$wrap.attr( 'data-long' ), //Ð´Ð¾Ð»Ð³Ð¾Ñ‚Ð°
                map = { };
            map = new google.maps.Map( this.$wrap[0], this.mapOptions( $lati, $longi ) );
            this.addMarker( $lati, $longi, map );
        },
        addMarker: function ( $lati, $longi, map )
        {

        },
        mapOptions: function ( $lati, $longi ) {
            var mapCoordinates = new google.maps.LatLng( $lati, $longi );
            var mapOptions = {
                zoom: 15,
                disableDefaultUI: false,
                center: mapCoordinates,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 60
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 30
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ef8c25"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#b6c54c"
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "saturation": -40
                            }
                        ]
                    },
                    { }
                ]
            };
            return mapOptions;
        }
    }
    if ( $( '#content-box' ).hasClass( 'contacts' ) ) {
        mapGoogle.init();
    }
// End generation map google	



    $( ' a[href*=#].to-top' ).bind( "click", function ( e ) {
        var anchor = $( this );
        $( anchor ).parent().parent().find( 'li' ).removeClass( 'current' );
        $( anchor ).parent( 'li' ).addClass( 'current' );

        $( 'html, body' ).stop().animate( {
            scrollTop: $( anchor.attr( 'href' ) ).offset().top
        }, 1400 );
        e.preventDefault();
    } );


    /*Fancybox*/


    var forms = $( '.form-modal' ),
        cb_input = forms.find( 'input[type=text], input[type=email], input[type=tel] , textarea' ),
        cr_close = $.fancybox.close();

    $( "#fancybox-overlay" ).fancybox( {
        padding: [ 0, 0, 0, 0 ],
        margin: [ 120, 0, 0, 0 ],
        scrolling: 'visible',
        minWidth: 360,
        minHeight: 321,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val( '' );
        }
    } );

    $( '.btr' ).click( function () {
        $.fancybox.close();
    } );


    /*Fancybox end*/



    //   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");

    $( "a[href$='.jpg'], a[href$='.png']" ).each( function () {
        $( this ).addClass( "fancybox" );
        $( this ).attr( 'rel', 'gallery' );

    } );

    $( ".fancybox" ).fancybox( {
        padding: [ 0, 0, 0, 0 ],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
        background: 'white',
        maxWidth: 800,
        arrows: true,
        fixed: false,
        autoCenter: true,
        beforeShow: function () {
            this.title = ( this.title ? '' + this.title + '' : '' ) + 'Image ' + ( this.index + 1 ) + '/' + this.group.length;
        }
    } );


    $( ".rslides" ).responsiveSlides( {
        manualControls: '#slider-pager',
        speed: 500,
        timeout: 8000,
        nav: true,
    } );


    var $container = $( '.isotope' );
    // filter buttons
    $( '#filters button' ).click( function () {
        var $this = $( this );
        // don't proceed if already selected
        if ( !$this.hasClass( 'is-checked' ) ) {
            $this.parents( '#options' ).find( '.is-checked' ).removeClass( 'is-checked' );
            $this.addClass( 'is-checked' );
        }
        var selector = $this.attr( 'data-filter' );
        $container.isotope( { itemSelector: '.item', filter: selector } );
        return false;
    } );



    $( ".nav.navbar-nav  li.dropdown a" ).click( function () {
        $( ".nav.navbar-nav   li.dropdown a.dropdown-toogle" ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } )

    $( ".nav.navbar-nav  li.dropdown a.active + ul.dropdown-menu li.dropdown a" ).click( function ( none ) {
        $( ".nav.navbar-nav   li.dropdown a.active + ul.dropdown-menu li.dropdown a.dropdown-toogle" ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } )


    $( ".navbar-toggle" ).click( function () {
        $( '.mobileMenu' ).toggleClass( "pushed" );
    } );


    // Contact form
    if ( $( '.contacts-forms' ).size() > 0 ) {
        $( "#ajax-contact-form" ).on( "submit", function () {
            var str = $( this ).serialize();
            $.ajax( {
                type: "POST",
                url: "contact_form/contact_process.php",
                data: str,
                success: function ( msg ) {
                    // Message Sent - Show the 'Thank You' message and hide the form
                    if ( msg == 'OK' ) {
                        var result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
                        $( "#fields" ).hide();
                    } else {
                        var result = msg;
                    }
                    $( '#note' ).html( result );
                }
            } );
            return false;
        } );
    }


} );