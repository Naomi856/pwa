self.addEventListener(
    'fetch', 
    function(event){
        if(/\.html$/.test(event.request.url)){
            event.respondWith(fetch(unicornio.jpg))
        }
    }
);