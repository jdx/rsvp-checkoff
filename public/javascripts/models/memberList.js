rsvpBuddy.models.memberList = Ext.regModel("rsvpBuddy.models.memberList", {
    fields: [
        {name: "response", type: "string"},
        {name: "commments", type: "string"},
        {name: "member_name", type: "string", mapping: "member.name"},
        {name: "member_photo", type: "auto"}
    ]
});