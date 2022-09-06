// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let mumble = '';
    s = s.toUpperCase().split('');
    for (let i = 0; i < s.length; i++) {
      mumble += (s[i] + s[i].toLowerCase().repeat(i) + '-');
    }
    return mumble.slice(0,-1);
  }