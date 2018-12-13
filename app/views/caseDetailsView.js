var app = app || {};

app.caseDetailsView = Backbone.View.extend({
    tagName: "div", // this is an html tag
    template: _.template( $("#case-details").html() ),

    render: function() {
        this.$el.html("test");
        return this;
      }
});