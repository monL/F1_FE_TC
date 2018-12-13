var app = app || {};

app.CaseCollectionView = Backbone.View.extend({
    tagName: "div",
    className: "flex-container",

    render: function() {
        this.collection.each(this.addCase, this);
        return this;
    },

    addCase: function(caseModel) {
        var caseView = new app.SingleCaseView ({ model: caseModel });
        this.$el.append(caseView.render().el);
    }
});