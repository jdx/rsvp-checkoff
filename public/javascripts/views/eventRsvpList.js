rsvpBuddy.views.mainToolbar = new Ext.Toolbar({
      id: 'mainToolbar',
      title: 'RSVP List'
    });

    rsvpBuddy.views.list = new Ext.List({
      xtype: 'list',
      store: userStore,
      itemTpl: '{response} {commments}'
    });

    rsvpBuddy.views.mainContainer = new Ext.Panel({
      id: 'mainList',
      layout: 'fit',
      dockedItems: [rsvpBuddy.views.mainToolbar],
      items: [rsvpBuddy.views.list]
    });

    rsvpBuddy.views.viewport = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      cardAnimation: 'slide',
      items: [rsvpBuddy.views.mainContainer]
    });
  }
});
