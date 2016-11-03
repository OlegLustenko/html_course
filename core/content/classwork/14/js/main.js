 let flicker = {
   uri: 'https://api.flickr.com/services/rest/?',
   queryMethod: 'flickr.photos.search',
   apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
 }

 class Flicker {
   constructor(options) {
     let {
       uri,
       queryMethod,
       apiKey
     } = options;

     this.uri = uri;
     this.queryMethod = queryMethod;
     this.apiKey = apiKey;
     this.input = this.get('.form__input');
     this.searchButton = this.get('.form__button');
     this.loadMore = this.get('.button-loadmore');

     this.searchButton.addEventListener('click', this.search.bind(this));
     this.loadMore.addEventListener('click', this.morePictures.bind(this));
     this.picturesNumbers = 10;
     this.infinity = document.getElementById('checkbox_infinity').checked;
     this.cancel = true;
     this.get('.button-cancel').addEventListener('click', (e) => {
       console.log(this.cancel);
       this.cancel = !this.cancel
     })

   }

   get(selector) {
     return document.querySelector(selector)
   }

   morePictures() {
     this.picturesNumbers = +10;
     this.searchButton.click();
   }

   render(body) {
     let photos = document.getElementById('photos');
     let x = '';
     for (let photo of body.photos.photo) {
       if (!this.cancel) break;

       if (!this.infinity) {
         if (!this.picturesNumbers) break;
       }
       x += `<img src='https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg' />`
       this.picturesNumbers--
     }
     if (photos.innerHTML) {
       photos.insertAdjacentHTML('afterBegin', x);
     } else {
       photos.innerHTML = x;
     }


   }

   search(e) {
     let text = this.input.value;
     e.preventDefault();
     let value = this.input.value;
     let url = `${this.uri}method=${this.queryMethod}&
        api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`;

     this.getPhotos(url, this.render.bind(this))
   }

   getPhotos(url, cb) {
     fetch(url).then(x => x.json()).then(cb)
   }


 }

 new Flicker(flicker);