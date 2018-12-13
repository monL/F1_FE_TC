var app = app || {};

app.CaseCollectionModel = Backbone.Collection.extend({
    url: "https://staging-app.figure1.com/mock/feed",
    model: app.SingleCaseModel,
    parse: function(response) {

        if (response.feed.length === 0) return [];
        
        //extract comments and posts from feed
        const posts = [];
        const comments = [];

        response.feed.forEach(function(element) {
           if (element.type === 'post') {
               posts.push(element);
           } else if (element.type === 'comment') {
               comments.push(element);
           } else {
               //Ignore all other cases for the moment
               return;
           }
        });

        //attach comments to their corresponding post
        comments.forEach(function(comment) {
            const postIndex = posts.findIndex(post => post.id === comment.postID);
            if (postIndex >= 0) {
                if (!posts[postIndex].comments) {
                    posts[postIndex].comments = [];
                }
                posts[postIndex].comments.push(comment);
            } else {
                console.log(`comment with id: ${comment.id} is not attached to a post`);
            }
        });

        return posts;
    }
});