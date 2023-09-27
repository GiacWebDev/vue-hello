/* 
- creo i file collegandoli con link / script a html
- preparo h1 dentro html
- creo struttura base VueJS
- creo data() con testo
- inserisco il value nell'html
*/

const { createApp } = Vue;

createApp ({

  data() {
    return {
      messaggio: 'ciao mi chiamo Momo',
      image: 'https://w7.pngwing.com/pngs/225/955/png-transparent-gumball-watterson-anais-watterson-darwin-watterson-cartoon-animated-series-barney-gumble-television-cartoon-vehicle.png'
    }
  }

}).mount('#app');