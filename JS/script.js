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
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-ibspn&psig=AOvVaw0nF5bbKGGYJ8TtBuDDn_y4&ust=1695907284861000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCfwozxyoEDFQAAAAAdAAAAABAE'
    }
  }

}).mount('#app');