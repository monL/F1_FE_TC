console.log(app.SingleCaseModel);

var case1 = new app.SingleCaseModel({
    id: "5a1edb556384ec96b71d4a98",
    username: "catc",
    type: "post",
    caption: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    image: {
        profile: "https://images.unsplash.com/profile-1532466997843-88fe931a8056?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
        post: "https://images.unsplash.com/photo-1467934466021-f2425d752934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022241431650d3ce7fbffb73431a065a&auto=format&fit=crop&w=400&q=60"
    },
    stats: {
        star: 5,
        follow: 23,
        views: 122
    }
  });
  
  var case2 = new app.SingleCaseModel({
    id: "5a5e5b1ce43c3f5076cbba41",
    username: "blyn",
    type: "post",
    caption: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    image: {
        profile: "https://images.unsplash.com/profile-1518819819358-613688503959?dpr=1&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff",
        post: "https://images.unsplash.com/photo-1516716984596-1f6e47c5e986?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0303fcb116aa42fe677673e6fe1fa3f6&auto=format&fit=crop&w=400&q=60"
    },
    stats: {
        star: 3,
        follow: 15,
        views: 86
    }
  });
  
  console.log(case1.toJSON());
  console.log(case2.toJSON());

  var collection = new app.CaseCollectionModel([
      case1, 
      case2
  ]);

  console.log(collection);