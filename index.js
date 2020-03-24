function takeANumber(line,name){
  line.push(name);
  let message="Welcome, " + name + ". You are number " + line.length + " in line.";
  return(message);
}

function nowServing(line) {
  if (line.length===0) {
    return("There is nobody waiting to be served!");
  } else {
    let next="Currently serving " + line[0] + ".";
    line.shift();
    return(next);
  }
}

function currentLine