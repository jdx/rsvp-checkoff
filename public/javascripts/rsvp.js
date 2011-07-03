var RSVP = new Ext.Application({
	name: 'rsvp',
	useLoadMask : true,
	launch : function () {
	rsvp.views.viewport = new Ext.Panel({
	fullscreen: true,
	html:'this is a freakin viewport'
	
	});
})