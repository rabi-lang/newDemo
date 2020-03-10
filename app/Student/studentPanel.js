Ext.define('newDemo.Student.studentPanel',{
    extend:'Ext.grid.Panel',
    xtype:'studentlist',
    title:'student list',
    itemId:'student-list-grid',
    requires: ['newDemo.Student.StudentStore'],
    //pageSize: itemsPerPage,
    collapsible:true,
    height:300,
    
    store:{
        type: 'studentStore',
    },
    controller:'studentController',
    dockedItems:[{

       // xtype: 'pagingtoolbar',
       // store: 'studentStore',
        //dock: 'bottom',
      
        displayInfo: true,
        xtype:'container',
        margin:10,
        items:[{
            xtype:'button',
            text:'Reload',
            iconCls:'fa fa-refresh',
            itemId:'btn-reload',
            listeners:{
                click:'onRelodButtonClick'
        }
        },
        {

            xtype:'button',
            text:'New',
            iconCls:'fa fa-plus',
            itemId:'btn-new',
            margin:'0 0 0 5',
            listeners:{
                click:'onNewButtonClick'
        }
       
        },
    {
        xtype:'button',
        text:'print',
        iconCls:'fa fa-print',
        margin:'0 0 0 5',
        itemId:'btn-print'  
    },{
        xtype:'button',
        text:'profile',
        iconCls:'fa fa-user',
        itemId:'btn-profile',
        margin:'0 0 0 5',
        listeners:{
            click:'onProfileButtonClick'

    },

    }
]
    }],

    columns:[
        {
            xtype:'actioncolumn',
            items:[{
            iconCls:'fa fa-pencil',
            tooltip:'edit',
            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                var me = this;
                var grid = me.up('grid');
                grid.controller.onEditById(record.data.id,'edit');
              }
        },
        {
            iconCls:'fa fa-eye',
            tooltip:'View'
        },
        {
            iconCls:'fa fa-trash',
            tooltip:'delete',
            handler:function(view, rowIndex,colIndex,item,e,record,row){
                var me  = this;
                var grid = me.up('grid');
                grid.controller.onDeleteById(record,'delete')
             }
        }]
    },
        
        
        {

        dataIndex:'name',
        text:'name',
        flex:1
    },{
        dataIndex:'email',
        text:'email',
        flex:1
    },{
        dataIndex:'age',
        text:'age',
        flex:1
    }]
    
});


