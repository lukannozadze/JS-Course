try {
  console.log("start of try runs");
  unicycle; //error occures here
  console.log("end of try runs -- never reached");
} catch (err) {
  console.warn("error has occured: " + err);
} finally {
  console.log("This always runs on success or failure");
}

let json = '{"age": 30}';
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }
} catch (e) {
  console.error(`JSON Error: ${e.message}`);
}
