var app = app || {};

app.singleCaseView = Backbone.View.extend({
    tagName: "div", // this is an html tag
    className: "case", //this is for styling.

    template: _.template( $("#caseElement").html() ),

    render: function() {
        var caseTemplate = this.template(this.model.toJSON());
        this.$el.html(caseTemplate);
        return this;
      }
});