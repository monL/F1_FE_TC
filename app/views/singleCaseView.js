var app = app || {};

app.SingleCaseView = Backbone.View.extend({
    tagName: "div",
    className: "post-case",

    template: _.template( $("#caseElement").html() ),

    render: function() {
        var caseTemplate = this.template(this.model.toJSON());
        this.$el.html(caseTemplate);
        return this;
      }
});