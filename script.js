const byteSize = (str) => {
  // write your code here
	// let encoder = new TextEncoder();
	// return encoder.encode(str).length;

	let byteCount = 0;
	for (let i = 0; i < str.length; i++) {
	    const charCode = str.charCodeAt(i);
	    if (charCode < 128) {
	      byteCount++;
	    } else if (charCode < 2048) {
	      byteCount += 2;
	    } else if (charCode < 55296 || charCode >= 57344) {
	      byteCount += 3;
	    } else {
	      // Surrogate pair (emoji, etc.)
	      byteCount += 4;
	      i++; // Skip the next code unit
	    }
	  }
	  return byteCount;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
