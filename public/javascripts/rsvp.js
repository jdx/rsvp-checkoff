var App = new Ext.Application({
	name: 'rsvp',
	useLoadMask: true,
	launch: function () {
	
	rsvp.views.meetupListContainer = new Ext.Panel({
		id: 'meetupList',
		layout: 'fit',
		html: 'this is the meetup list container'
	});
	
	
	
	rsvp.views.viewport = new Ext.Panel({
		fullscreen: true,
		layout: 'card',
		cardAnimation: 'slide',
		items: [rsvp.views.meetupListContainer]
	});
}});