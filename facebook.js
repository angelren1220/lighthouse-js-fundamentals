var facebookProfile = {
	name : "Joe",
	friends : 0,
	messages :[],
	addFriend(){
		facebookProfile.friends++;
	},
	removeFriend(){
		if(facebookProfile.friends > 0){
			facebookProfile.friends--;
		}
	},
	postMessage(message){
		facebookProfile.messages.push(message);
	},
	deleteMessage(index){
		if(facebookProfile.messages.length > 0){
			facebookProfile.messages.splice(index, 1);
		}
		else{
			return "";
		}
	}
}

// facebookProfile.postMessage("1");
// facebookProfile.postMessage("2");
// facebookProfile.postMessage("3");
// facebookProfile.deleteMessage(1);
// console.log(facebookProfile.messages);