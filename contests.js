let url = "https://kontests.net/api/v1/all";
        let response = fetch(url);
        response.then((v) =>{
            return v.json();
        }).then((contests) =>{
            console.log(contests); 
            ihtml = " "
            for(item in contests){
                console.log(contests[item])
                let a = 1;
                let b = 4;

                let j = a +(b-a)*Math.random();
                let i = Math.round(j);
                console.log(i);

                if(i==1){
                ihtml +=`
                    <div class="card" style="width: 25%;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU2IPZ3hhm61LwsgC-7fZDPeOiYv-O-xqy6uJtLuOH508_JEt7sQ-Du7sp-sDoZGQHHg&usqp=CAU" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${contests[item].name}</h5>
                        <p class="Start_At">Start At :${contests[item].start_time}</p>
                        <p class="End_At"> End At :${contests[item].end_time}</p>
                        <p class="Site">${contests[item].site}</p>
                        <p class="In_24_Hours">In 24 Hours : ${contests[item].in_24_hours}</p>
                        <a href="${contests[item].url}">Visit</a>
                    </div>
                </div>
               `
                }


                if(i==2){
                ihtml +=`
                    <div class="card" style="width: 25%;">
                        <img src="https://www.mycplus.com/ezoimgfmt/cdn.mycplus.com/mycplus/wp-content/uploads/2011/02/challenge24-header-1080x278.jpg?ezimgfmt=ng:webp/ngcb1" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${contests[item].name}</h5>
                        <p class="Start_At">Start At :${contests[item].start_time}</p>
                        <p class="End_At"> End At :${contests[item].end_time}</p>
                        <p class="Site">${contests[item].site}</p>
                        <p class="In_24_Hours">In 24 Hours : ${contests[item].in_24_hours}</p>
                        <a href="${contests[item].url}">Visit</a>
                    </div>
                </div>
               `
                }


                if(i==3){
                ihtml +=`
                    <div class="card" style="width: 25%;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtRqqTp_IZ2h8AGNXBi9mHupCn3CiLhXjkQ&usqp=CAU" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${contests[item].name}</h5>
                        <p class="Start_At">Start At :${contests[item].start_time}</p>
                        <p class="End_At"> End At :${contests[item].end_time}</p>
                        <p class="Site">${contests[item].site}</p>
                        <p class="In_24_Hours">In 24 Hours : ${contests[item].in_24_hours}</p>
                        <a href="${contests[item].url}">Visit</a>
                    </div>
                </div>
               `
            }
            

            if(i==4){
                ihtml +=`
                    <div class="card" style="width: 25%;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRygrSWHn_YLOnviXYHcU3wqOmma6bls4TEA&usqp=CAU" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${contests[item].name}</h5>
                        <p class="Start_At">Start At :${contests[item].start_time}</p>
                        <p class="End_At"> End At :${contests[item].end_time}</p>
                        <p class="Site">${contests[item].site}</p>
                        <p class="In_24_Hours">In 24 Hours : ${contests[item].in_24_hours}</p>
                        <a href="${contests[item].url}">Visit</a>
                    </div>
                </div>
               `
            }
            }
            cardcontainer.innerHTML = ihtml;
        })
