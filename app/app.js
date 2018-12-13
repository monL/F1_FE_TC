
//Fetch collection of case posts
//CaseCollectionModel calls the mock api, parses and stores the response data
var caseCollection = new app.CaseCollectionModel();
caseCollection.fetch({
    success: function() {
        console.log('Fetched the Case collection!');
    },
    error: function() {
        console.log('Something failed...');
    }
}).done(function(){
    var caseCollectionView = new app.CaseCollectionView({ collection: caseCollection});
    //Render collection information using the casecollectionView
    $("#mainContent").html(caseCollectionView.render().el);
});

var appRouter = new app.Router();

Backbone.history.start();

