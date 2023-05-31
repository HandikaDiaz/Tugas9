const promise = new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/61bcb2e49fdd8e115ad7", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
        } else {
            reject("Eror Loading Data.")
        }   
    };
    xhr.onerror = () => {
        reject("Not Network Eror");
    };
    xhr.send();
});

async function getAllTestimonial() {
    const response = await promise;

    let testimonialHTML = "";
    response.forEach (function (item) {
        testimonialHTML += `<div class="testimonial-image">
                                <img class="testimonial-profile" 
                                    src="${item.image}" 
                                    alt="" />
                                <p class="quote">
                                    ${item.quote}
                                </p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating}</p>
                            </div>`;
                        });

    document.getElementById("testimonial").innerHTML = testimonialHTML
}

getAllTestimonial();

async function getFilteredTestimonial(rating) {
    const response = await promise;

    const testimonialFiltered = response.filter((item) => {
        return item.rating === rating;
    });

    let testimonialHTML = "";
    if (testimonialFiltered.length === 0) {
        testimonialHTML = "<h1>Data is Not Found</h1>";
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial-image">
                                <img class="testimonial-profile" 
                                    src="${item.image}" 
                                    alt="" />
                                <p class="quote">
                                    ${item.quote}
                                </p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating}</p>
                            </div>`
        });
    }
    document.getElementById("testimonial").innerHTML = testimonialHTML
};


