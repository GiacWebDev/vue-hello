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
      messaggio: 'ciao mi chiamo Momo'
    }
  }

}).mount('#app');