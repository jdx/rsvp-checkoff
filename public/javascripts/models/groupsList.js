rsvpBuddy.models.memberList = Ext.regModel("rsvpBuddy.models.memberList", {
    fields: [
        {name: "response", type: "string"},
        {name: "commments", type: "string"},
        {name: "member_name", type: "string", mapping: "member.name"},
        {name: "thumbnail_url", type: "string", mapping: "member_photo.thumb_link"}
    ]
});
userStore = new Ext.data.Store({
    sorters: 'response',
    proxy: {
        type: 'scripttag',
        url: 'https://api.meetup.com/2/rsvps?key=387c221de2f734b2e31591d1550637d&event_id=16336453',
            reader: {
            'type': 'json',
            'root': 'results'
        }
    },
    fields: ['response', 'member', 'member_photo', 'commments']
});
userStore.load();
