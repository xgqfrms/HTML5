window.addEventListener('storage', function(e) {  
  document.querySelector('.my-key').textContent = e.key;
  console.log(e.key);
  console.log("\n");
  document.querySelector('.my-old').textContent = e.oldValue;
  console.log(e.oldValue);
  console.log("\n");
  document.querySelector('.my-new').textContent = e.newValue;
  console.log(e.newValue);
  console.log("\n");
  document.querySelector('.my-url').textContent = e.url;
  console.log(e.url);
  console.log("\n");
  document.querySelector('.my-storage').textContent = e.storageArea;
  console.log(e.url);
  console.log("\n");
});