'use strict';
createKart(0);
createKart(1);
createKart(2);
createKart(3);


function createKart(countSuit) {
    let table = document.querySelector('.poker-tabel');
    let kart = [ 'A' , '6', '7', '8', '9','10', 'B', 'Д', 'K'];

   let kartRank = [{rank: 'Spades', url: './assets/img/k1.png' }, {rank: 'Hearts', url: './assets/img/k4.png' }, {rank: 'Clubs', url: './assets/img/k3.png' }, {rank: 'Diamonds', url: './assets/img/k2.png' }]
         //    let countSuit = 0;
    for ( let i = 0; i < kart.length; i++ ){
        // create cart conteyner
       let newKart = document.createElement('div');
       newKart.classList.add('poker-tabel__kart')

        //    create index Kart TOP + img
       let indexTop = document.createElement('div');
       indexTop.classList.add('poker-tabel__kart__index');
       indexTop.classList.add('top');

    
       let rankIndex =  document.createElement('p');
       rankIndex.classList.add('poker-tabel__kart__index__rank')
       rankIndex.innerText = kart[i];

       let suit = document.createElement('img');
       suit.classList.add('poker-tabel__kart__index__suit');

       
       suit.setAttribute('src',`${kartRank[countSuit].url}` );
       
       

       //    create index Kart BOTTOM + img
       let indexBottom = document.createElement('div');
       indexBottom.classList.add('poker-tabel__kart__index');
       indexBottom.classList.add('bottom');

       let rankIndexBottom =  document.createElement('p');
       rankIndexBottom.classList.add('poker-tabel__kart__index__rank')
       rankIndexBottom.innerText = kart[i];

       let suitBottom = document.createElement('img');
       suitBottom.classList.add('poker-tabel__kart__index__suit');

       
       suitBottom.setAttribute('src',`${kartRank[countSuit].url}` );

       indexBottom.append(suitBottom);
       indexBottom.append(rankIndexBottom);


       indexTop.append(suit);
       indexTop.append(rankIndex);
       newKart.append(indexTop);
       newKart.append(indexBottom);
       table.append(newKart);

    
    }

}