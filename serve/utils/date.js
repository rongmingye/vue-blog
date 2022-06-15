export default { 

	currentSecond: function(){
		let date = new Date();

	    let year = date.getFullYear();
	    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
	    let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	    
	    let hour = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
	    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();
	    let second = date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds();

	    let currentTime = year + "-" + month + "-" + strDate+ " "
	                    + hour + ":" + minute + ":" + second;

	    return currentTime;
	},

	currentMinute: function(){
		let date = new Date();

	    let year = date.getFullYear();
	    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
	    let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	    
	    let hour = date.getHours() < 10 ? '0' + date.getHours(): date.getHours();
	    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes();

	    let currentTime = year + "-" + month + "-" + strDate+ " "
	                    + hour + ":" + minute ;

	    return currentTime;
	},

	currentDate: function(){
		let date = new Date();

	    let year = date.getFullYear();
	    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
	    let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	    
	    let currentTime = year + "-" + month + "-" + strDate;

	    return currentTime;
	}
}