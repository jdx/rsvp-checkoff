rsvpBuddy.views.Viewport = Ext.extend(Ext.Panel, {

    fullscreen: true,
    layout: 'fit',

    initComponent: function() {

        Ext.apply(this, {
            items: [
                rsvpBuddy.views.rsvpList
            ]
        });

        rsvpBuddy.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
