  Template.tweetList.helpers({
		'tweets': function() {
			return Tweets.find();
		}
  });

  Template.tweetBox.events({
    'click #postTweet': function () {
			if (Meteor.user()) {
				Tweets.insert({"content": $('#tweetText').val(), "user": Meteor.user(), "username": Meteor.user().username});
			} else {
				alert("Please log in first.");
			}
    }

  });

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});
