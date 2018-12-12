var sort=[7, 24, 2, 121, 58,65];

function Buble(sort) {
	for (var i = sort.length - 1; i > 0; i--) {
		var counter =0;
		for (var j = 0; j<i; j++) {
			if (sort[j]>sort[j+1]) {
				var tmp = sort[j];
				sort[j] = sort[j+1];
				sort[j+1] = tmp;
				counter++;
			}
		}
		if (counter==0) {
			break;
		}
	}
return sort;
}

 button.onclick = function() {
    alert( Buble(sort) );
  };