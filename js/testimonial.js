// class testimoniaData {
//     #quote = ""
//     #image = ""

//     constructor(quote, image) {
//         this.#quote = quote;
//         this.#image = image;
//     }

//     get quote() {
//         return this.#quote;
//     }

//     get image() {
//         return this.#image;
//     }

//     get author() {
//         throw new Error("getAuthor() must be implemented");
//     }

//     get testimonialHTML() {
//         return `<div class="testimonial-image">
//                     <img class="testimonial-profile" 
//                          src="${this.image}" 
//                          alt="" />
//                     <p class="quote">
//                         ${this.quote}
//                     </p>
//                     <p class="author">- ${this.author}</p>
//                 </div>`;
//     }
// }

// class AuthorTestimonial extends testimonial {
//     #author = ""

//     constructor(author, quote, image) {
//         super(quote, image);
//         this.#author = author;
//     }

//     get author() {
//         return this.#author;
//     }
// }

// class companyTestimonial extends testimonial {
//     #company = ""

//     constructor(company, quote, image) {
//         super(quote, image)
//         this.#company = company
//     }

//     get author() {
//         return this.#company + " Company"
//     }
// }

// const testimonialData = [ 
//     {
//     author : "Handika",
//     quote : "Good Face of Caracter",
//     image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating : 4,
//     },

//     {
//     author : "Alexandria",
//     quote : "Good Face of Caracter",
//     image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating : 5,
//     },

//     {
//     author : "Diaz",
//     quote : "Good Face of Caracter",
//     image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating : 5,
//     },

//     {
//     author : "Zidane",
//     quote : "Nice Story",
//     image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating : 2,
//     },

//     {
//     author : "Ashidiq",
//     quote : "Amazing Building",
//     image : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating : 3,
//     },
// ];

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonial").innerHTML = testimonialHTML;

// Sistem Rating
// function allTestimonial() {
//     let testimonialHTML = "";

//     testimonialData.forEach(function(item) {
//         testimonialHTML += `<div class="testimonial-image">
//                                 <img class="testimonial-profile" 
//                                     src="${item.image}" 
//                                     alt="" />
//                                 <p class="quote">
//                                     ${item.quote}
//                                 </p>
//                                 <p class="author">- ${item.author}</p>
//                                 <p class="author">${item.rating}</p>
//                             </div>`;
//     });

//     document.getElementById("testimonial").innerHTML = testimonialHTML;
// };

// allTestimonial();

// function filterTestimonial(rating) {
//     let testimonialHTML = "";

//     const testimonialFiltered = testimonialData.filter(function(item) {
//         return item.rating === rating;
//     });

//     if (testimonialFiltered.length === 0) {
//         testimonialHTML += `<h1>Data is Not Found</h1>`
//     } else {
//         testimonialFiltered.forEach(function(item) {
//             testimonialHTML += `<div class="testimonial-image">
//                                     <img class="testimonial-profile" 
//                                         src="${item.image}" 
//                                         alt="" />
//                                     <p class="quote">
//                                         ${item.quote}
//                                     </p>
//                                     <p class="author">- ${item.author}</p>
//                                     <p class="author">${item.rating}</p>
//                                 </div>`;
//         });
//     }

//     document.getElementById("testimonial").innerHTML = testimonialHTML;
// };


