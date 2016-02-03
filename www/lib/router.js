Router.map(function() {
	this.route('home', {path: '/'});

	this.route('profiles', {
		path: '/profiles/:_id',
		template: 'profile',
		data: function(){
			console.log('this is', this, this.params, this.params._id);
			var data = Meteor.users.findOne(this.params.id);
			console.log('thedata for this page is', data )
			return data;
		}
	});
});