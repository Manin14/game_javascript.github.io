		// game suit
var tanya = true;

while ( tanya == true) {
		// tangkap pilihan player
		var p = prompt("pilih : gajah, semut, orang");

		// menangkap pilihan komputer
		// membangkitan blagan randoom
		var com = Math.random();
		//console.log(com);
		if ( com < 0.34){ 
			com = "gajah";
		}
		else if ( com >= 0.34 && com < 0.67){ 
			com = "orang";
		}
		else {
		 com = "semut";
		}	
			


		// mementukan rules
		var hasil = "";

		if ( p == com ){ hasil = "seri"}
		else if ( p == "gajah"){ hasil = (com == "orang") ? "menang" : "kalah"}
		else if ( p == "orang"){ hasil = (com = "gajah") ? "kalah" : "menang" }
		else if ( p == "semut") { hasil = (com = "orang") ? "kalah" : "menang"}
		else { hasil = " memasukan pilihan yang salah";}	

		// tampilkan hasilnya
		alert(" kamu memilih : "+ p +" dan komputer memilih : " + com + "\n maka hasilnya : kamu "+hasil);

        tanya = confirm("Main lagi");
	}

alert("terima kasih sudah bermain");