rsvpBuddy.views.rsvpInnerList = Ext.extend(Ext.List, {

    itemTpl: '<img src="{member_photo.thumb_link}" /> {response} <br/> {member_name} {commments}',
    itemCls: 'rsvp'

});

rsvpBuddy.views.rsvpList = new Ext.Panel({
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'RSVP List'
    }],
    items: [new rsvpBuddy.views.rsvpInnerList({
        store: new Ext.data.Store({
            id: 'store_tp',
            model: 'rsvpBuddy.models.memberList',
            autoLoad: true,
            proxy: {
                
                type: 'scripttag',
                url: 'https://api.meetup.com/2/rsvps?key=387c221de2f734b2e31591d1550637d&event_id=16336453',
				//type: 'ajax',
				//url:'/javascripts/models/rsvp_list_from_meetup.json',

                reader: {
                    type: 'json',
                    root: 'results'
                }
            }
        })
    })]
});