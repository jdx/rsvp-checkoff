rsvpBuddy.views.RsvpList = new Ext.List({
    xtype: 'list',
    store: userStore,
    itemTpl: '<img src="{member_photo.thumb_link}" /> {response} <br/> {member.name} {commments}'
});
