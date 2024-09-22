document.addEventListener('DOMContentLoaded', function(){

document.getElementById('load').addEventListener('click', function(){

    (async () => {
            const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

            const response = await chrome.tabs.sendMessage(tab.id, {data: "hello"});
            console.log(response);
                var msg = document.createElement("p");
                var data = JSON.parse(response.data);
                var title = response.title;

                title_msg = document.createElement("h1");
                title_msg.innerHTML = title;
                document.getElementById('container').appendChild(title_msg);

                var ps = []
                for(key in data){
                    ps = data[key]["data"]["article"]["body"];
                    break;
                }

                for(n = 0; n < ps.length; n++){
                    p = ps[n]
                    if(p.hasOwnProperty("p")){
                        p = p["p"];
                        msg = document.createElement("p");
                        msg.innerHTML = p;
                        document.getElementById('container').appendChild(msg);
                    }
                }

        })();

});

});
