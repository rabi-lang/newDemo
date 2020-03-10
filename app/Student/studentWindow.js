Ext.define('newDemo.Student.studentWindow',{
    extend:'Ext.window.Window',
    
    title:'student Form',
    height:450,
    bodyStyle: 'background:	teal; padding:10px;',
    //controller:'studentController',
    //autoshow:true,
    width:500,
    items:[{
        xtype:'form',
        itemId: 'data-form',
        bodyStyle: 'background:white; padding:10px;',
        bodyPadding: 10,
        items:[
      
            {
            xtype:'textfield',
            fieldLabel:'Name',
            emptyText:'Enter your Name',
            name: 'name',
            allowBlank: false
        },
        { 
            xtype:'textfield',
            fieldLabel:'Email',
            emptyText:'Enter your email',
            name: 'email',
          allowBlank: false
        
        },
        {
            xtype:'numberfield',
            fieldLabel:'Age',
            emptyText:'Enter your Age',
            name:'age',
            minValue: 0,
            maxValue: 100,
            useTips: true,
            allowBlank:false

        },   
    {
        xtype:'checkbox',
            fieldLabel:'Status',
            name: 'status',
            checked:true,

    }]
    }],

    dockedItems:[{
        xtype:'container',
        dock:'bottom',
        margin:10,
        items:[{
            xtype:'button',
            itemId:'save-btn',
            text:'save',
            iconCls:'fa fa-floppy-o',
            listeners: {
                click: 'onSaveButtonClick'
              }
        },{
            xtype:'button',
            itemId:'Cancel-btn',
            text:'cancel',
            margin:'0 0 0 10',
            iconCls:'fa fa-times-circle',
            listeners: {
                click: 'onCancelButtonClick'
              }
        }
    ]

    }]
    

}); 