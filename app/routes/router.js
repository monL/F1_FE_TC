var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"5a1edb556384ec96b71d4a98" : "item1_Message",
	"5a5e5b1ce43c3f5076cbba41": "item2_Message",
},

noCopy: function() {
    $("#copy").html("");
},
  
item1_Message: function() {
    $("#copy").html("Heirloom Roses are great Mother's Day flowers");
},
  
item2_Message: function() {
    $("#copy").html("Choose Rainbow Roses for your wedding");
}

});