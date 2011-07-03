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

    rsvpApp.views.meetupToolbar = new Ext.Toolbar ({
      id: 'meetupToolbar',
      title: 'RSVP List'
    });

    rsvpApp.views.meetupListContainer = new Ext.Panel({
      id: 'meetupList',
      layout: 'fit',
      html: 'this is the meetup list container',
      dockedItems: [rsvpApp.views.meetupToolbar]
    });

    rsvpApp.views.viewport = new Ext.Panel({
      fullscreen: true,
      layout: 'card',
      cardAnimation: 'slide',
      items: [rsvpApp.views.meetupListContainer]
    });
  }

});
