//gets port information
const port = process.env.PORT || 3000;

//server setup
app.listen(port, function(){
    console.log('Listening on port ' + port)
});