var app = new Vue ( 
    {

        el: '#root',
        data: {
            film : []
        },
        methods: {},
        mounted() {
            axios
            .get('https://api.themoviedb.org/3/search/movie?', {
                params : {
                    api_key : '9e15066d27a78ef033c5f7eaffb30058', 
                    language : 'it-IT',
                    query : 'Rambo'

                }
            })
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.film = result.response;
                
                
                
                
            });
            
            
            

            
        }
    });