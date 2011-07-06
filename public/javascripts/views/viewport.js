rsvpBuddy.views.Viewport = Ext.extend(Ext.Panel, {

    fullscreen: true,
    layout: 'fit',

    initComponent: function() {
	
		var access_token = document.URL.match(/access_token=.+\b/g);
		if (access_token) {
			alert(access_token.toString().split('=')[1]);
        // User already logged in, for now goes to authorizeUser view, should go to loggedUserDetails view
        Ext.apply(this, {
            items: [
                rsvpBuddy.views.rsvpList
            ]
        });

        rsvpBuddy.views.Viewport.superclass.initComponent.apply(this, arguments);
    } else {
			// User not logged in, go to authorizeUser view
			var client_id = '9vjs6vdesogbvnrv6uoal3ufh9';
			if (document.URL.indexOf('localhost') !== -1) {
				client_id = '5olqblvb85fcckedja4uv42cgt';
				Ext.apply(this, {
		            items: [
		                rsvpBuddy.views.authorizeUser
		            ]
		        });

		        rsvpBuddy.views.Viewport.superclass.initComponent.apply(this, arguments);
				
				}
}

}});