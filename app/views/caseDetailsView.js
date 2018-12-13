var app = app || {};

app.caseDetailsView = Backbone.View.extend({
    tagName: "div",
    template: _.template( $("#caseDetails").html() ),

    render: function() {
        this.$el.html("<h1>Case Details Coming soon...</h1>");
        return this;
      }
});