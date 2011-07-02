rsvp.Main = {
    init : function() {
        this.connectButton = new Ext.Button({
            text: 'Connect with Meetup.com',
            ui: 'action',
            //hidden: true,
            handler: this.onAuthorizeButtonTap,
            scope: this
        });

        this.ui = new Ext.ux.UniversalUI({
            title: Ext.is.Phone ? 'RSVP' : 'RSVP Checkoff List',
            useTitleAsBackText: false,
            //navigationItems: sink.Structure,
            buttons: [{xtype: 'spacer'}, this.sourceButton],
        });
    },

    onAuthorizeButtonTap : function() {
        window.location = "/auth/meetup";
};


Ext.setup({
    tabletStartupScreen: '/img/tablet_startup.png',
    phoneStartupScreen: '/img/phone_startup.png',
    icon: '/img/icon.png',
    glossOnIcon: true,

    onReady: function() {
        rsvp.Main.init();
    }
});