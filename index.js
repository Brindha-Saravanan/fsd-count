function count(){
    var countElement = document.getElementById("count"); // "count" should be a string
    var currentValue = parseInt(countElement.value);
    countElement.value = currentValue + 1;
}
