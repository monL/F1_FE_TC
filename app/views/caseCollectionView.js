var app = app || {};

app.CaseCollectionView = Backbone.View.extend({
    tagName: "section",

    render: function() {
        this.collection.each(this.addCase, this);
        return this;
    },

    addCase: function(caseModel) {
        var caseView = new app.singleCaseView ({ model: caseModel });
        this.$el.append(caseView.render().el);
    }
});