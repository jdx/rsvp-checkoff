Ext.setup({
  onReady: function() {
    var form = new Ext.form.FormPanel({
      fullscreen:true,
      items: [
        {
          xtype: 'textfield',
          name: 'first',
          label: 'First name'
        }
      ]
    });
  }
});
