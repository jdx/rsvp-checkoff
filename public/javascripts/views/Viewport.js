rsvpBuddy.views.Viewport = Ext.extend(Ext.Panel, {

    fullscreen: true,
    layout: 'fit',
    

    initComponent: function() {


        rsvpBuddy.views.eventRsvpList = new rsvpBuddy.views.eventRsvpList();


        Ext.apply(this, {
            items: [
                rsvpBuddy.views.eventRsvpList
            ]
        });

        rsvpBuddy.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});