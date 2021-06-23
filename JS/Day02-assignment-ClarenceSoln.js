
// parses the string manacost to get the numeric value
function getManaCostWeightedValue(manaCost){
	// remove all right open bracket
	manaCost = manaCost.replaceAll('{X}','');
	manaCost = manaCost.replaceAll('{','');

	// split by close bracket to get individual cost
	manaCost = manaCost.split('}');

	// derive the cost
	if(manaCost.length-2 == 0) {
		return 1
	}
	if (isNaN(parseInt(manaCost[0]))) {
		return manaCost.length - 2
	}
	return parseInt(manaCost[0]) + (manaCost.length - 2)
}

// will display all items to the console
function display(items) {
	// add sort field
	// color + manacost + name
	items.map(data=>{
		manaCostWeight = getManaCostWeightedValue(data['manaCost']);
		data['sk'] = data['colorIdentity'] + manaCostWeight.toString() + data['name']
	})
	// sort
	for(var i=0;i<items.length;i++){
		for(var j=i+1;j<items.length-1;j++){
			if(items[i]['sk'] > items[j]['sk']){
					var temp = items[i];
					items[i] = items[j];
					items[j] = temp;
			}
		}
	}
	items.map(data=>{
		console.log(data['name']+' '+data['manaCost'])
	});
	console.log(items);
}


// First solution
URL = 'https://api.magicthegathering.io/v1/cards'
console.log('fetching card values...')
fetch(URL).then(data=>{
	var resp = data.json().then(json=>{
		display(json.cards);
	})
})






