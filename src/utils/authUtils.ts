/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-spread */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// TypeScript will ignore type-checking for this entire file
function openssl_random_pseudo_bytes(len) {
	return window.crypto.getRandomValues(new Uint8Array(len));
}

function bin2hex(array) {
	return Array.from(array).map(b => b.toString(16).padStart(2, "0")).join("");
}

export function generate_state_param() {
  // a random 8 digit hex, for instance
  return bin2hex(openssl_random_pseudo_bytes(4));
}

export function generate_pkce_codes() {	
	const random = bin2hex(openssl_random_pseudo_bytes(32)); // a random 64-digit hex
	const code_verifier = base64_urlencode(hex2bin(random));
	const code_challenge = base64_urlencode(sha256bin(code_verifier));
  return {
      verifier: code_verifier,
      challenge: code_challenge
  };
}


///// More functions /////
///// SOURCE: https://www.oauth.com/wp-content/themes/oauthdotcom/js/crypto.js /////
var sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value>>>amount) | (value<<(32 - amount));
  }
  
  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length';
  var i, j; // Used as a counter across the whole file
  var result = '';

  var words = [];
  var asciiBitLength = ascii[lengthProperty]*8;
  
  //* caching results is optional - remove/add slash from front of this line to toggle
  // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
  // (we actually calculate the first 64, but extra values are just ignored)
  var hash = sha256.h = sha256.h || [];
  // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
  var k = sha256.k = sha256.k || [];
  var primeCounter = k[lengthProperty];
  /*/
  var hash = [], k = [];
  var primeCounter = 0;
  //*/

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
      k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
    }
  }
  
  ascii += '\x80'; // Append '1' bit (plus zero padding)
  while (ascii[lengthProperty]%64 - 56) ascii += '\x00'; // More zero padding
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j>>8) return; // ASCII check: only accept characters in range 0-255
    words[i>>2] |= j << ((3 - i)%4)*8;
  }
  words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
  words[words[lengthProperty]] = (asciiBitLength)
  
  // process each chunk
  for (j = 0; j < words[lengthProperty];) {
    var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
    var oldHash = hash;
    // This is now the "working hash", often labelled as variables a...g
    // (we have to truncate as well, otherwise extra entries at the end accumulate
    hash = hash.slice(0, 8);
    
    for (i = 0; i < 64; i++) {
      var i2 = i + j;
      // Expand the message into 64 words
      // Used below if 
      var w15 = w[i - 15], w2 = w[i - 2];

      // Iterate
      var a = hash[0], e = hash[4];
      var temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
        + ((e&hash[5])^((~e)&hash[6])) // ch
        + k[i]
        // Expand the message schedule if needed
        + (w[i] = (i < 16) ? w[i] : (
            w[i - 16]
            + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
            + w[i - 7]
            + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
          )|0
        );
      // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
      var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
        + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
      
      hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
      hash[4] = (hash[4] + temp1)|0;
    }
    
    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i])|0;
    }
  }
  
  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i]>>(j*8))&255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
};

function hex2bin(s) {
  //  discuss at: http://locutus.io/php/hex2bin/
  // original by: Dumitru Uzun (http://duzun.me)
  //   example 1: hex2bin('44696d61')
  //   returns 1: 'Dima'
  //   example 2: hex2bin('00')
  //   returns 2: '\x00'
  //   example 3: hex2bin('2f1q')
  //   returns 3: false

  var ret = []
  var i = 0
  var l

  s += ''

  for (l = s.length; i < l; i += 2) {
    var c = parseInt(s.substr(i, 1), 16)
    var k = parseInt(s.substr(i + 1, 1), 16)
    if (isNaN(c) || isNaN(k)) return false
    ret.push((c << 4) | k)
  }

  return String.fromCharCode.apply(String, ret)
}

function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2)
}

// Array of integers to binary data
function dec2bin(arr) {
  return hex2bin(Array.from(arr, dec2hex).join(''));
}

function sha256bin(ascii) {
  return hex2bin(sha256(ascii));
}

function base64_urlencode(str) {
  return btoa(str)
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
}

function random_string(len) {
  var arr = new Uint8Array(len);
  window.crypto.getRandomValues(arr);
  var str = base64_urlencode(dec2bin(arr));
  return str.substring(0, len);
}