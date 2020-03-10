Ext.define('newDemo.Student.studentController',{
    extend:'Ext.app.ViewController',
    alias:'controller.studentController',
    requires: ['newDemo.Student.studentWindow'],
    gridPanelSelector:'#student-list-grid',
    getGridPanel:function(){
        var me= this;
        var grid =me.getView();
        if(grid)
        {
            return grid;
        }else{
            return null;
        }
    },



    updateModelData: function(form) {
      var model = form.getRecord();
      if (!model) {
          model = me.createModel();
          model.set('id', null);

      }
      form.updateRecord(model);
      return model;
  },
  onReloadButtonClick: function (btn, e, eOpts) {
      var me = this;
      var grid = me.getGridPanel();
      grid.store.load();

  },


  createModel: function () {
      var model = new new newDemo.Student.Model();
      return model;
  },
  openFormWindow: function (model, formMode) {
      var me = this;
      var win = me.createFormWindow();
      if (formMode == 'edit') {
          model.load({
              success: function (record) {
                  var form = win.query('form')[0];
                  form.loadRecord(record);
              },
              failure: function (record) {
                  console.log('failed', record);
              }
          })
      }
      else if (formMode == 'view') {

      }
      win.show();
  },

  createFormWindow: function (opts) {
      var me = this;
      var opts = opts || {};
      opts.controller = new newDemo.Student.studentController();
      return new newDemo.Student.studentWindow(opts);
      return win;


  },
  onNewButtonClick: function (btn, e, eOpts) {
      var me = this;


      var win = me.createFormWindow();
      win.show();



  },
  onSaveButtonClick: function (btn, e, eOpts) {
      var win = btn.up('window');
      var me = this;
      var form = win.query('#data-form')[0];
      if (!form.isValid()) {
          Ext.Msg.alert('Student Form', 'Please fill valid data');
          return;

      }
    var model = me.updateModelData(form);
      model.save({
          success: function (record, operation) {
              Ext.Msg.alert('Student Form', 'Successfully saved record');
              win.close();
          },
          failure: function (record, operation) {
              Ext.Msg.alert('Student Form', 'Failed to save record');
          }

      })

  },
  onEditById: function (id, formMode) {
      var me = this;
      var model = me.createModel();
      model.id = id;
      me.openFormWindow(model, formMode)
  },


  onDeleteById: function (model, formMode) {
      var me = this;
      Ext.Msg.confirm('Employee','Are you sure want to delete this record?', function(btn) {
         if(btn === 'yes') {
              model.erase({
                  failure: function(record, operation) {
                      // do something if the erase failed
                  },
                  success: function(record, operation) {
                      // do something if the erase succeeded
                      Ext.Msg.alert('Employee','Deleted data');
                      return;
                  },
                  callback: function(record, operation, success) {
                      // do something if the erase succeeded or failed
                  }
              });
         }
         else {

         }
      });
  }


})