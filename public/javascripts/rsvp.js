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

    rsvpApp.views.mainToolbar = new Ext.Toolbar ({
      id: 'mainToolbar',
      title: 'RSVP List'
    });

    rsvpApp.views.mainContainer = new Ext.Panel({
      id: 'mainList',
      layout: 'fit',
      html: 'this is the meetup list container',
      dockedItems: [rsvpApp.views.mainToolbar]
    });

    rsvpApp.views.viewport = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      cardAnimation: 'slide',
      items: [rsvpApp.views.mainContainer]
    });
  }
});

eventStore = Ext.extend(Ext.data.JsonPStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        eventStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'Event',
            url: 'https://api.meetup.com/2/rsvps?key=387c221de2f734b2e31591d1550637d&sign=true&event_id=16336453',
            batch: true,
            autoLoad: true,
            root: 'results',
            autoSave: false,
            fields: [
                { name: 'response', type: 'string'},
                { name: 'name', type: 'string', mapping: '[\'member\'][\'name\']'},
                { name: 'member_id', type: 'string', mapping: '[\'member\'][\'member_id\']'},
                { name: 'photo thumbs', type: 'string', mapping: '[\'member_photo\'][\'thumb_link\']'},
                { name: 'answers', type: 'string'},
                { name: 'guests', type: 'int'},
                { name: 'commments', type: 'string'}
            ]
        }, cfg));
    }
});

new eventStore();
