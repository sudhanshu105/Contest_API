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
                        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=1800&t=st=1672833870~exp=1672834470~hmac=16ffd5c3ca7acc99a436f98b5b202e8fad15ed5af99ebe7139e1754b7710df32" class="card-img-top" alt="...">
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
                        <img src="https://img.freepik.com/free-vector/digital-coding-background-with-numbers-zero-one_1017-30363.jpg?w=2000&t=st=1672834672~exp=1672835272~hmac=1813dd6002424395d4fd9a6f77f38fc529d20c1abcc069ca67e5e633ec9903ef" class="card-img-top" alt="...">
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
                        <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1800&t=st=1672834717~exp=1672835317~hmac=2edf8812a3558a154f85240a1567888d7eac56ea50831aa464b46e945427e941" class="card-img-top" alt="...">
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
                        <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1800&t=st=1672834781~exp=1672835381~hmac=01266a8966bf09aa2071c9a0a48b832895863910718d66f233a2f2f6340b34d7" class="card-img-top" alt="...">
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