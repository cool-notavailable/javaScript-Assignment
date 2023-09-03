const arr = [1, 2, 3, "Hello", 4, 5, "Lol"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "string") {
    console.log("Found the first string:", arr[i]);
    break;
  }
}
