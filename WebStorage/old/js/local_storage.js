/**
 * Created by xray on 7/30/2015.
 */


//save
function saveLocalStorage(id) {
    var target = document.getElementById(id);
    var value = target.value;
    localStorage.setItem("key1",value);
}

//show
function showLocalStorage(id) {
    var obj = localStorage.getItem("key1")
    var show = document.getElementById(id).innerHTML = obj;

}