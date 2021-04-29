var app = new Vue ( 
    {

        el: '#root',
        data: {
            films : [],
            userQuery : '',
            series : []
        },
        methods: {

            callingApi() {
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
                        

                        
                        
                        
                    });

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
                            
    
                            
                            
                            
                        });
            
            },

            
        },
        
            
            
            
            

            
        
    });