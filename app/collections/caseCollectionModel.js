var app = app || {};

app.CaseCollectionModel = Backbone.Collection.extend({
    model: app.SingleCaseModel
});