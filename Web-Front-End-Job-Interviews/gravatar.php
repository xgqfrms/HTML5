<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP : Gravatar</title>
</head>
<body>
	<?php  
	# Step1: Creating the Hash (https://secure.gravatar.com/site/implement/hash/)
	/**
	 * 
	 * $email = trim( "MyEmailAddress@example.com " ); 
	 * // "MyEmailAddress@example.com"
	 * $email = strtolower( $email ); 
	 * // "myemailaddress@example.com"
	 * echo md5( $email );
	 * 
	*/
	$md5String = md5( strtolower( trim( "xgqfrms@outlook.com" ) ) );
	echo $md5String;
	echo ("<br/>");
	// To URL-encode a string in PHP
	echo urlencode( 'https://raw.githubusercontent.com/xgqfrms/DataStructure/gh-pages/images/icon.png' );
	// https%3A%2F%2Fraw.githubusercontent.com%2Fxgqfrms%2FDataStructure%2Fgh-pages%2Fimages%2Ficon.png
	?> 
	<div>
		<input type="text" class="" placeholder="email->gravatar" value="" disabled="" alt="" autofocus="" autocomplete="" autosave="" 	readonly="" required="">
	</div>
	<div class="vcard">
		<a class="url fn" href="https://www.gravatar.com/3db6c24b48f7270d47f56abeb6a7cfcb">xgqfrms@outlook.com</a>
	</div>
	<div>
		<div>
			<!-- # Step2: Gravatar Image Requests (https://secure.gravatar.com/site/implement/images/)-->
			<h1>Gravatar Image Requests</h1>
			<h3>Image Default</h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt="img-gravatar" /><br/>
			<h3>Image Base Request</h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb" alt="img-gravatar" /><br/>
			<h3>Image file-type extension </h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb.jpg" alt="img-gravatar" /><br/>
			<h3>Image Size</h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb?s=100" alt="img-gravatar" /><br/>
			<h3>Image own default image <mark>URL-encoded</mark><span>00000000000000000000000000000000</span></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Fraw.githubusercontent.com%2Fxgqfrms%2FDataStructure%2Fgh-pages%2Fimages%2Ficon.png" alt="img-gravatar" /><br/>
		</div>
		<!--  -->
		<div>
			<!-- # Step3: Gravatar Profile Requests (https://secure.gravatar.com/site/implement/profiles/) -->
			<h1>Gravatar Profile Requests</h1>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb" alt="img-gravatar" /><br/>
			<h3>QR Codes(80px * 80px)</h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb.qr" alt="img-gravatar" /><br/>
			<h3>QR Codes:size</h3>
			<img src="https://www.gravatar.com/avatar/3db6c24b48f7270d47f56abeb6a7cfcb.qr?s=200" alt="img-gravatar" /><br/>
		<!-- https://secure.gravatar.com/site/implement/profiles/ -->
			<h1>QR Codes</h1>
			<h1>JSON Profile Data</h1>
			<h1>XML Profile Data</h1>
			<h1>VCF/vCard Profile Data</h1>
			<h1>PHP Profile Data</h1>
		</div>
		<div>
			<h1>SEO：Gravatar has a number of built in options which you can also use as defaults. </h1>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" alt="img-gravatar" /><br/>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y" alt="img-gravatar" /><br/>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y" alt="img-gravatar" /><br/>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y" /><br/>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=blank&f=y" /><br/>
			<h3></h3>
			<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" /><br/>
			<!-- more: https://secure.gravatar.com/site/implement/images/ -->
			<h3>Force Default</h3>
			<h3>Rating</h3>
			<h3>Combining Parameters</h3>
			<h3>Secure Requests</h3>
			<h3>Special Thanks</h3>
		</div>
	</div>
</body>
</html>