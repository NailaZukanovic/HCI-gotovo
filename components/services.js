import {useState} from 'react';

const services = [{
  "rating": '5.0',
  "name": "šišanje",
  "description": "Svako će se složiti da je lijepa, njegovana kosa najljepši ukras žene, ali da bi ona izgledala sjajno, potrebno je izabrati pravu frizuru.",
  "image_link": "https://www.sredime.me/image/guide/sisanje-md.jpg",
  "video_link": "https://www.youtube.com/embed/Q28HjR2IUdk",
  "video_id": "Q28HjR2IUdk",
  "price": "3",
  "like": true
},{
  "rating": '4.8',
  "name": "Feniranje",
  "description": "Lokne su oduvek u modi, a to ne čudi jer doprinose ženstvenom izgledu, ležernosti i udobnosti. d",
  "image_link": "https://frizuromanija.com/wp-content/uploads/2018/09/feniranje-na-lokne.jpg",
  "video_link": "https://www.youtube.com/embed/K4WFFBdxfuo",
  "video_id": "K4WFFBdxfuo",
  "price": "2.88",
  "like": false
},
{
  "rating": '4.7',
  "name": "Masaža",
  "description": "Masaža je, kako se veruje, najstariji oblik lečenja. Masaža snažno deluje na zdravlje i raspoloženje i pogodna je za sve uzraste. Vršenjem pritiska na kožu stimulišu se unutrašnje tačke, čime se omogućava bolja cirkulacija, rastežu se tetive, a zglobovi postaju zdravi i gipki.",
  "image_link": "https://www.deja.rs/wp-content/uploads/2016/05/Masaza-Deja.jpg",
  "video_link": "https://www.youtube.com/embed/t3OSxSWnmbY",
  "video_id": "t3OSxSWnmbY",
  "price": "2.77",
  "like": true
},
{
  "rating": '4.6',
  "name": "Manikir",
  "description": "Manikir podrazumeva pogurivanje i seckanje zanoktica, otklanjanje naslaga kože sa nokatne ploče, skraćivanje i oblikovanje nokta i nega zanoktica biljnim uljima i masaža ruku kremom.",
  "image_link": "https://kristinatodorovic.com/wp-content/uploads/2021/02/Untitled-design-4-1-1.jpg",
  "video_link": "https://www.youtube.com/embed/99cv0WnW6vA",
  "video_id": "99cv0WnW6vA",
  "price": "1.5",
  "like": false
},
{
  "rating": '4.6',
  "name": "Pedikir",
  "description": "Pedikir je odličan način da svojim stopalima pružite osnovnu negu. Pedikir je oblast estetike koja se odnosi na negu kože stopala kao i noktiju.",
  "image_link": "https://www.deja.rs/wp-content/uploads/2018/06/Pedikir.jpg",
  "video_link": "https://www.youtube.com/embed/HLEX_fsTdaA",
  "video_id": "HLEX_fsTdaA",
  "price": "1.5",
  "like": true
}
];

function Services(){
  const [servicec, setServicec] = useState(services);

  return {servicec, setServicec};
}

export default Services;