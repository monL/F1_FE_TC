var app = app || {};

app.Router = Backbone.Router.extend({

    routes :{
        "": "noCopy",
        "post/:id": "postDetails"
    },

    noCopy: function() {
    },

    postDetails: function(id) {
        console.log('navigate to view post with id ', id);
        //TODO: fetch or get post model with id=id
        const testModel = new app.CaseDetailsModel({
            id: "5a1edb556384ec96b71d4a98",
            username: "catc",
            caption: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
            image: {
                profile: "https://images.unsplash.com/profile-1532466997843-88fe931a8056?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
                post: "https://images.unsplash.com/photo-1467934466021-f2425d752934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022241431650d3ce7fbffb73431a065a&auto=format&fit=crop&w=400&q=60"
            },
            stats: {
                star: 5,
                follow: 23,
                views: 122
            },
            comments: [{content: 'hkjsiubf'}, {content: 'hkanvuire'}]
          }
          );
        var caseDetailView = new app.caseDetailsView({ model: testModel });
        $("#mainContent").html(caseDetailView.render().el);
    }
});