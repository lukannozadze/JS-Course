try {
  console.log("start of try runs");
  unicycle; //error occures here
  console.log("end of try runs -- never reached");
} catch (err) {
  console.warn("error has occured: " + err);
} finally {
  console.log("This always runs on success or failure");
}
