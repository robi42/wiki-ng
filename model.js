include('helma/storage/dbstore/hibernate');

export('Page');

Page = new Storable('Page');

Page.byName = function(name) {
    name = name.toLowerCase();
    var pages = Page.all()
        .filter(function(page) page.name.toLowerCase() == name);
    return pages[0];
}

Page.prototype.updateFrom = function(obj) {
    this.name = obj.name;
    this.body = obj.body;    
}
