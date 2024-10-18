 let meyveler = [];

 function meyveEkle() {
   let yeniMeyve = prompt('Kaç adet meyve girmek istersiniz? ');

   for (let i = 0; i < yeniMeyve; i++ ) {

     let meyve = prompt('Meyve' + ' ' + (i+1) +'Giriniz');
     meyveler.push(meyve);
   
    
  }

   console.log('Meyveler: ', meyveler);
 }


meyveEkle();