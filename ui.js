class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        // this.humidity = document.getElementById('w-humidity');
        // this.feelsLike = document.getElementById('w-feels-like');
        // this.dewpoint = document.getElementById('w-dewpoint');
        // this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.location;
        this.desc.textContent = weather.text;
        this.string.textContent = weather.last_updated;
        this.icon.setAttributes('src', weather.icon);
         
    }
}