const assert = require('assert')

// HH:MM:SSAM
function convertTime(time){
	input = time.split(':')
	if(input[2].includes('AM')){
		if(parseInt(input[0]) >= 12 ){
			return  '00:' + input[1] + ':' + input[2].replace('AM','')
		}
		return time.replace('AM','')
	} 
	ss = input[2].replace('PM','')
	h = parseInt(input[0]) + 12
	h = h >= 24? '12' : h.toString()
	if(h.length < 2){
		h = '0'+h
	}
	return h + ':' + input[1] + ':' + ss
}


assert(convertTime('08:19:13PM') === '20:19:13')
assert(convertTime('11:59:13AM') === '11:59:13')
assert(convertTime('12:24:13AM') === '00:24:13') // <- fail
assert(convertTime('12:24:13PM') === '12:24:13')
