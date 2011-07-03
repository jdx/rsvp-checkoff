var App = new Ext.Application({
  name: 'rsvpApp',
  useLoadMask: true,

  launch: function () {
    var access_token = document.URL.match(/access_token=.+\b/g);
    if (access_token) {
      access_token = access_token.toString().split('=')[1];
    } else {
      // User not logged in, log them in
      var client_id = '9vjs6vdesogbvnrv6uoal3ufh9';
      if (document.URL.indexOf('localhost') !== -1) {
        client_id = '5olqblvb85fcckedja4uv42cgt';
      }
      window.location = 'https://secure.meetup.com/oauth2/authorize?client_id=' + client_id + '&response_type=token&redirect_uri=' + encodeURIComponent(document.URL);
    }

    rsvpApp.views.mainToolbar = new Ext.Toolbar({
      id: 'mainToolbar',
      title: 'RSVP List'
    });

    userStore = new Ext.data.Store({
      proxy: {
        type: 'scripttag',
        url: 'https://api.meetup.com/2/rsvps?key=387c221de2f734b2e31591d1550637d&event_id=16336453',
        reader: {
          'type': 'json',
          'root': 'results'
        }
      },
      fields: [
        { name:'response', type:'string' }
      ]
    });
    userStore.load();

    rsvpApp.views.list = new Ext.List({
      xtype: 'list',
      store: userStore,
      itemTpl: '{response}'
    });

    rsvpApp.views.mainContainer = new Ext.Panel({
      id: 'mainList',
      layout: 'fit',
      dockedItems: [rsvpApp.views.mainToolbar],
      items: [rsvpApp.views.list]
    });

    rsvpApp.views.viewport = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      cardAnimation: 'slide',
      items: [rsvpApp.views.mainContainer]
    });
  }
});
