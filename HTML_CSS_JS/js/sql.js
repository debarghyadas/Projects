 //document.addEventListener('deviceready', onDeviceReady, true);
function test(sel) {
	alert("created");
 var db = window.sqlitePlugin.openDatabase({name: "test.db"});
 alert("44455");

  


	
		            	  alert("entry");
		     
		            	  db.transaction(function(tx) {
		            		  alert("444");
		            		  db.executeSql("DROP TABLE IF EXISTS test_table ");
		            		  tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, selected integer)');
		            		  alert("4445555");
		            	   tx.executeSql("INSERT INTO test_table (selected) VALUES (?)", [sel], function(tx, res) {
		            		      alert("insertId: " + JSON.stringify(res) + " -- probably 1");
		            		      alert("rowsAffected: " + JSON.stringify(res) + " -- should be 1");

		            		   
		            		/*      tx.executeSql("select * from test_table;", [], function(tx, res) {
		            		    	  for(var i=0;i<res.rows.length;i++){
		            		          alert("res.rows.length: " + JSON.stringify(res) + " -- should be 1");
		            		          alert("res.rows.item(0).cnt: " + res.rows.item(0).selected + " -- should be 1");
		            		          localStorage.setItem("sel1","");
		            		          localStorage.setItem("sel1",res.rows.item(0).selected);
		            		
		            		         
		            		    	  }
		            		    	   
		            		          
		            		        });*/
		            		     
		            		  

		            		    }, function(e) {
		            		      alert("ERROR: " + e.message);
		            		    });
		            		  });
		            	  
		            	  
		            	  
}

function get(){
	var db = window.sqlitePlugin.openDatabase({name: "test.db"});
	
	  db.transaction(function(tx) {
		  
		    tx.executeSql("select * from test_table;", [], function(tx, res) {
		    	  for(var i=0;i<res.rows.length;i++){
		          alert("res.rows.length: " + JSON.stringify(res) + " -- should be 1");
		          alert("res.rows.item(0).cnt: " + res.rows.item(0).selected + " -- should be 1");
		          localStorage.setItem("sel1","");
		          localStorage.setItem("sel1",res.rows.item(0).selected);
		
		    	  }
		    	  });
		    	    
		  
	  });
	
}

