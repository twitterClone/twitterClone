if (Meteor.isClient) {

  Template.tweetList.helpers({
		'tweets': function() {
			return Tweets.find();
		}
  });

  Template.tweetBox.events({
    'click #postTweet': function () {
			if (Meteor.user()) {
				Tweets.insert({"content": $('#tweetText').val(), "user": Meteor.user(), "userEmail": Meteor.user().emails[0].address});
			} else {
				alert("Please log in first.");
			}
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
