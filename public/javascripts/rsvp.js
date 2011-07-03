var App = new Ext.Application({
	name: 'rsvpApp',
	useLoadMask: true,
	launch: function () {
	
	rsvpApp.views.meetupToolbar = new Ext.Toolbar ({
		id: 'meetupToolbar',
		title: 'RSVP List'
	});
	
	
	rsvpApp.views.meetupListContainer = new Ext.Panel({
		id: 'meetupList',
		layout: 'fit',
		html: 'this is the meetup list container'
		dockedItems: [rsvpApp.views.meetupToolbar]
	});
	
	
	rsvpApp.views.viewport = new Ext.Panel({
		fullscreen: true,
		layout: 'card',
		cardAnimation: 'slide',
		items: [rsvpApp.views.meetupListContainer]
	});
}});