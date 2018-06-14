class YouGuess{
    constructor() {

        this.props = {
            title: 'Guess the gender',
            subtitle: 'Try to guess some genders!',
            backgroundColor: '#c4ede5',
            questionNumber : 1,
            randomUnicode : ['🚀','🎇','🌊','😺', '🍔'],
            totalQuestions: 10,
            email: ''
        }

        this.fetch = new FetchYouAPIs(this.props.totalQuestions);

        // initializes page elements
        this.createDOMElements();
        
        // initializes DOM elements and event handlers
        this.initDOMElements();
        
        // sets title, subtitle, questions number and background color
        this.setTheme();

        this.fetch.getUsers().then(r => console.log(r));
        
    }

    createDOMElements(){
        const content = document.querySelector('#content');
        content.innerHTML = `
            
        <section class="card mb-3 card-body d-none" id="card-guess">
        <div class="d-flex">
            <h3 style="flex: 1;" id="name-country" class="border-bottom mb-5 pb-2">My name is John, I'm from Brazil</h3>
            <h3 id="current-question"><h3>
        </div>

        <div>
            <div class="btn-group-toggle mb-3">
                <label id="label-male" class="btn btn-outline-warning btn-lg" for="gender-choice-mae" style="width: 130px;">
                    <i class="zmdi zmdi-male"></i> Male
                    <input type="radio" name="gender-choice" id="gender-choice-male" value="male" autoComplete="off">

                </label>

            </div>

            <div class="btn-group-toggle mb-5">
                <label id="label-female" class="btn btn-outline-warning btn-lg" for="gender-choice-female" style="width: 130px;">
                    <i class="zmdi zmdi-female"></i>
                    Female
                    <input type="radio" name="gender-choice" id="gender-choice-female" value="male" autoComplete="off">
                </label>
            </div>

        </div>

        <div class="row justify-content-center">
            <button id="play-next" class="btn btn-success " style="font-size: 1.9rem; width: 130px">
                <i class="zmdi zmdi-forward"></i> Next
            </button>
        </div>

    </section>

    <div class="row">
        <div class="col-md-6 d-flex">
            <section class="card mb-3 card-body" id="card-info">
                <h3 class="card-title border-bottom mb-5 pb-2">Ok, so that's what we got</h3>

                <h5><span id="questions-number"></span> questions</h5>
                <h5>One Rule - Guess !</h5>
                <div class="input-group mb-3 mt-4">
                    <input type="email" class="form-control form-control-lg" id="user-email-input" placeholder="myemail@email.com">

                    <div class="input-group-append">
                        <button id="guess-button" class="btn btn-success" style="font-size: 1.9rem">
                            <i class="zmdi zmdi-play-circle-outline"></i> Play
                        </button>
                    </div>

                </div>

            </section>
        </div>
        <div class="col-md-6 d-flex">
            <section class="card mb-3 card-body" id="card-info">
                <h3 class="card-title border-bottom mb-2 pb-2 text-center">Wall of Guessers</h3>
                <div class="table-wrapper">
                    <table class="table" id="guessers-table">
                        <thead class="table-success">
                            <tr>
                                <th>Name</th>
                                <th>Points</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Nick</td>
                                <td>10 pts</td>
                            </tr>
                            <tr>
                                <td>Caio</td>
                                <td>9 pts</td>
                            </tr>
                            <tr>
                                <td>Nick</td>
                                <td>10 pts</td>
                            </tr>
                            <tr>
                                <td>Caio</td>
                                <td>9 pts</td>
                            </tr>
                            <tr>
                                <td>Nick</td>
                                <td>10 pts</td>
                            </tr>
                            <tr>
                                <td>Caio</td>
                                <td>9 pts</td>
                            </tr>
                            <tr>
                                <td>Nick</td>
                                <td>10 pts</td>
                            </tr>
                            <tr>
                                <td>Caio</td>
                                <td>9 pts</td>
                            </tr>
                            <tr>
                                <td>Nick</td>
                                <td>10 pts</td>
                            </tr>
                            <tr>
                                <td>Caio</td>
                                <td>9 pts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
        `;
    }

    initDOMElements(){
        this.mainTitle = document.querySelector('#main-title');
        this.mainSubtitle = document.querySelector('#main-subtitle');
        this.userEmailInput = document.querySelector('#user-email-input');
        this.questionsNumber = document.querySelector('#questions-number');
        this.guessersTable = document.querySelector('#guessers-table');
        this.guessButton = document.querySelector('#guess-button');
        this.cardGuess = document.querySelector('#card-guess');
        this.nameCountry = document.querySelector('#name-country');
        this.currentQuestion = document.querySelector('#current-question');
        this.genderChoiceFemale = document.querySelector('#gender-choice-female');
        this.genderChoiceMale = document.querySelector('#gender-choice-male');
        this.labelMale = document.querySelector('#label-male');
        this.labelFemale = document.querySelector('#label-female');
        this.playNextButton = document.querySelector('#play-next');

        //start handlers
        this.guessButton.addEventListener('click', this.guessHandler.bind(this));
        // this.playNextButton.addEventListener('click', this.playAgainHandler.bind(this));
    }

    setTheme(){
        
        this.mainTitle.innerHTML = this.props.title;
        this.mainSubtitle.innerHTML = this.props.subtitle;
        this.questionsNumber.innerHTML = this.props.totalQuestions;
        document.body.style.backgroundColor = this.props.backgroundColor;
        
    }

    guessHandler(){

    }
}