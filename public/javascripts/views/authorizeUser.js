rsvpBuddy.views.authorizeUserList = Ext.extend(Ext.List, {

    itemTpl: '<img src="{member_photo.thumb_link}" /> {response} <br/> {member_name} {commments}',
    itemCls: 'rsvp'

});



rsvpBuddy.views.authorizeUser = new Ext.Panel({
    layout: {
	type: 'vbox',
	pack: 'center', 
	align: 'center'
	},
	
    dockedItems: [
	{
		dock : 'top',
		xtype: 'toolbar',
		title: 'RSVP Buddy'
    }],

	items: [
	new Ext.Button(
	                {
		ui  : 'decline-round',
		text: 'Touch this button to connect with Meetup.com',
		handler : function(){
					// User not logged in, log them in
					var client_id = '9vjs6vdesogbvnrv6uoal3ufh9';
					if (document.URL.indexOf('localhost') !== -1) {
						client_id = '5olqblvb85fcckedja4uv42cgt';
						}
						window.location = 'https://secure.meetup.com/oauth2/authorize?client_id=' + client_id + '&response_type=token&redirect_uri=' + encodeURIComponent(document.URL);
						}	
					}
					)]
});