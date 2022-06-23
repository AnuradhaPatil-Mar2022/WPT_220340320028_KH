
const express = require('express');
const mysql = require('mysql2');

let parameters = {
	host: 'localhost',
	user: 'anuradha',
	password: 'cdac',
	database: 'node_exam',
	port: 3306
};

const app = express();
app.use(express.static('abc'));

let connect = mysql.createConnection(parameters);

app.listen(5500,()=>{
	console.log('Running through 5500...');
})

app.get('/book',(req,res) =>
{
	console.log('req.queery.bookid');
	let bookid = req.query.bookid;
	let result = {status:false};
	connect.query('select * from book where bookid=?',[+bookid],(err,res)=>{
		if(err){
			console.log(err);
        }
		else{
			console.log(data);
			console.log(data[0].bookid);
			console.log(data[0].bookname);
			console.log(date[0].bookprice);

			result.status = true;
			result.bookid = data[0].bookid;
			result.bookname = data[0].bookname;
			result.bookprice = data[0].bookprice;

		}
		res.send(result);
	})

	
})

app.get('/update',(req,res)=>{

	console.log(req.query.bookprice);
	let bookprice = req.query.bookprice;
	let bookid = req.query.bookid;
	let result = {status: false};

	if(bookprice){
		console.log('price already exists');
		connect.query('update book set price =? where bookid =?',[price,bookid],
		(err,data) =>{
			if (err){
				console.log(err);
			}else{
				if(data.affectedRows ==1){
					result.status = true;
				}
			}
			res.send(result);
		
		})
	}else{
		console.log('No existing price');
		res.send(result);
	}
})
app.get('/',(req,res) => {
	res.send('Root');
});
