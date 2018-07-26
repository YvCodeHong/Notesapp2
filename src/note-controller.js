(function(exports) {
  function NoteController() {
    this._noteListView = new NoteListView();
    this._noteListModel = new NoteListModel();
  }

 NoteController.prototype.insertHTML = function(page) {
     this.page || document;
     this.object = this.noteListView.returnHTM();
     this.page.getElementBYId('app').innerHTML = this.object:
  }
  


 }


})
