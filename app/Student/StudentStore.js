Ext.define('newDemo.Student.Model', {
    extend: 'Ext.data.Model',
    alias:'model.studentModel',
    
    fields: ['name', 'email', 'age'],
    proxy: {
        type: 'rest',
        url: '/api/students',
        reader: {
            type: 'json',
        
            rootProperty: 'data'
        }
    }

});

Ext.define('newDemo.Student.StudentStore', {
    extend: 'Ext.data.Store',
    alias: 'store.studentStore',
    model: 'newDemo.Student.Model',
   // autoLoad: true
});