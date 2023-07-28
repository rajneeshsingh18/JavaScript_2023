'use strict';

//Project Planning

// 1. User Stories --> 2. Features --> 3.FlowChart --> 4. Architecture --> Development step


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Class architecture implementation

class Workout {
    date = new Date();

    //in real production app we use library
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id =....
        this.coords = coords; //[lat , lng]
        this.distance = distance; //in km
        this.duration = duration; //in minute
    }

    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }

    _setDesciption() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]
            } ${this.date.getDate()}`;
    }
}

class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.type = 'running';
        this.calcPace();
        this._setDesciption();
    }

    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elvationGain) {
        super(coords, distance, duration);
        this.elvationGain = elvationGain;
        this.calcSpeed();
        this._setDesciption();
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}


// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1, cycling1);

class App {
    #map;
    #mapEvent;
    #mapZoomLevel=13;
    #workouts = [];

    constructor() {

        //get user position
        this._getPosition();
        //Attach event handles

        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click',this._moveToPopup.bind(this));

        //get data from loacl storage
        this._getLoaclStorage();
    }

    _getPosition() {
        //Using the Geoloaction API
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert('Could not get your position');
                }
            );
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(position.coords);

        console.log(latitude, longitude);

        console.log(` https://www.google.com/maps/@${latitude},${longitude}`);

        //Display a Map Using Leaflet Library

        const coords = [latitude, longitude];

        // https://leafletjs.com/index.html

        console.log(this);
        this.#map = L.map('map').setView(coords,this.#mapZoomLevel);
        // console.log(map);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        //Handling clicks on map
        this.#map.on('click', this._showForm.bind(this));

        this.#workouts.forEach(work =>{
            this._renderWorkoutMarker(work)
        });
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideform() {
        //CLEAR input fields
        inputDistance.value =
            inputDuration.value =
            inputElevation.value =
            inputCadence.value =
            ' ';

            form.style.display= 'none';
            form.classList.add('hidden');
            setTimeout(()=>form.style.display = 'grid',1000)
        
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();

        //get data from from

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        //if workout running , create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            //check if data is valid
            if (
                // !Number.isFinite(distance) ||
                // !Number.isFinite(duration) ||
                // !Number.isFinite(cadence)

                !validInput(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            )
                return alert('Input have to be positive numbers');

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        //if workout cycling create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            //check if data is valid

            if (
                !validInput(distance, duration, elevation) ||
                !allPositive(distance, duration)
            )
                return alert('Input have to be positive numbers');

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        //add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);

        //Render workout on map as marker

        this._renderWorkoutMarker(workout);

        //Render workout on list
        this._renderWorkout(workout);

        //Hide form + clear input fields

        this._hideform();


        //Set loacal storage to all workouts
        this._setLocalStorage();
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    //see docs in leaflet library
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴'
        } ${workout.description}`)
            .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴'
            } </span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        `;

        if (workout.type === 'running')
            html += `
        <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;


        if (workout.type === 'cycling')
            html += `

            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elvationGain}</span>
            <span class="workout__unit">m</span>
          </div>
          </li>
            `;

        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout');
        console.log(workoutEl);

        if(!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id)

        console.log(workout);

        this.#map.setView(workout.coords ,this.#mapZoomLevel,{
            animate :true ,
            pan : { 
                duration : 1
            },

        })
    }

    //Using Local Storage API
    _setLocalStorage(){
        localStorage.setItem('workouts' , JSON.stringify(this.#workouts))
    }

    _getLoaclStorage(){
        const data = JSON.parse(localStorage.getItem('workouts'))
        console.log(data);

        if(!data) return ;

        this.#workouts = data ;

        this.#workouts.forEach(work =>{
            this._renderWorkout(work);
        })

    }

    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
}

const app = new App();
