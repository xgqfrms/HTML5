<!DOCTYPE html>
<html lang="en" manifest='manifest.appcache'>
<head >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
    <meta name="MobileOptimized" content="320">
	<link rel="stylesheet" type="text/css" href="../css/assets.css"/>
    <title>appcache demo</title>
</head>
<body>
<h1>Appication cache for offline storage</h1>
<ul>
    <li><img src="../images/1.png"/></li>
	<li><img src="../images/2.png"/></li>
</ul>
<script type="text/javascript">
 window.addEventListener('load',function(e){
       window.applicationCache.addEventListener('updateready',function(e){
          console.log(window.applicationCache.status);
          if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
              window.applicationCache.swapCache();
              if(confirm('A new version of this site is avaliable.load it ?')){
                  window.location.reload();
              }
          }else{
              console.log('manifest didn\'t change ');
              
          }
       },false);
    },false);
</script>
</body>
</html>