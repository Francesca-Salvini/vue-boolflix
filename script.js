var app = new Vue ( 
    {

        el: '#root',
        data: {
            films : [],
            userQuery : '',
            series : []
        },
        methods: {

            // Funzione per richiamare l'API (tramite keyup.enter da input / click da button)
            callingApi() {
                // FILM
                axios
                    .get('https://api.themoviedb.org/3/search/movie?', {
                        params : {
                            api_key : '9e15066d27a78ef033c5f7eaffb30058', 
                            language : 'it-IT',
                            query : this.userQuery,
                            page : 1
                            
                        }
                        
                    })
                    .then((response) => {
                        const result = response.data;
                        // console.log(result);
                        this.films = result.results;
                        console.log(this.films);
                        

                        // trasformo i numeri decimali da 1 a 10 in numeri interi da 1 a 5 (per il voto)
                        this.films.forEach((film) => {
                            film.vote_average = Math.ceil(film.vote_average / 2);
                        });
                        
                        console.log(film.vote_average);
                        
                        
                    });

                    // SERIE
                    axios
                        .get('https://api.themoviedb.org/3/search/tv?' , {
                            params : {
                                api_key : '9e15066d27a78ef033c5f7eaffb30058', 
                                language : 'it-IT',
                                query : this.userQuery,
                                page : 1
                                
                            }
                        })
                        .then((response) => {
                            const result = response.data;
                            // console.log(result);
                            this.series = result.results;
                            console.log(this.series);
                            
                            // trasformo i numeri decimali da 1 a 10 in numeri interi da 1 a 5 (per il voto)
                            this.series.forEach((serie) => {
                                serie.vote_average = Math.ceil(serie.vote_average / 2);
                            });
                            
                            console.log(serie.vote_average);
                            
                            
                            
                        });
            
            },

            
        },
        
            
            
            
            

            
        
    });