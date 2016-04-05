var express		=	require('express'),
		app		=	express(),
	bodyParser  =	require('body-parser'),
	memberCtrl	=	require('./server/controllers/member.js');

	var fs=require('fs');

app.use(bodyParser());

app.get('/',function(req,res){
	res.sendfile(__dirname + '/client/index.html');	
});

app.use('/js',express.static(__dirname+ '/client/js'));
app.use('/views',express.static(__dirname+ '/client/views/controllers'));

app.post('/api/member',memberCtrl.create);

/*app.post('/',function(req,res){
	res.writeHead(200,{"content-Type":"application/json"});
	var jsonObj={
	"username" : "Yogesh",
	"password" : "yogesh123",
	"email"    : "yogesh@10d.com"};
	var json=JSON.stringfy(jsonObj);
	res.end(json);
})*/

app.listen(5000,function(){

	console.log('From 10decoders');
});



