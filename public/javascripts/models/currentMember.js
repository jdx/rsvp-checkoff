rsvpBuddy.models.currentMember = Ext.regModel("rsvpBuddy.models.currentMember", {
    fields: [
        {name: "response", type: "string"},
        {name: "commments", type: "string"},
        {name: "member_name", type: "string", mapping: "member.name"},
        {name: "thumbnail_url", type: "string", mapping: "member_photo.thumb_link"}
    ]
});