(function($) {

    $(document).ready(function() {

        function plone_path(next_page) {
            path = $(next_button_selector).attr('href');
            if (path.match(/^(.*?b_start.*?$)/)) {
                // Plone Batching
                parsed_path = path.match(/^(.*?b_start:int=)\d*(.*?$)/).slice(1);
                return parsed_path[0] + (next_page-1)*batch_size + parsed_path[1] + '&b_size='+ batch_size + '&ajax_load=1';
            }
            return [''];
        }

        function calculate_batch(listingbar){
            // if we have pages, we have at least two
            var page_links = listingbar.find('> a');
            // page 1 will always have :int=0. page 2 know the batch size!
            return page_links[1].href.split(':int=')[1];
        }

        var listingbar = $('div.listingBar');
        var next_button_selector = 'div.listingBar span.next a';

        if(listingbar.length > 0){
            var batch_size = calculate_batch(listingbar);
            var last_page = $('div.listingBar a:last').attr('href');
            var last_page_paths = last_page.match(/^(.*?b_start:int=)(\d*)(.*?$)/).slice(1);
            var max_page = (last_page_paths[1]/batch_size)+1;

            $('#content-core').infinitescroll({
                //debug: true,
                navSelector:  "div.listingBar",
                nextSelector: next_button_selector,
                itemSelector: "#content-core > *",
                path: plone_path,
                maxPage: max_page
            });
        };
    });
})(jQuery);
