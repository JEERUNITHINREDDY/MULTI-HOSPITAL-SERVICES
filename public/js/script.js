(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit", 
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault(); 
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false 
        );
    });
})();


const searchInp = document.querySelector(".search-inp");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const searchedText = searchInp.value;
  window.location.href = `/listings/search/${searchedText}`;
});

//for filter location

// const filter = document.querySelector(".filters");

// filter.addEventListener("click", function(e){
//     e.preventDefault();
//     const filtertext = this.value;
//     window.location.href = `/listings/filter/${filtertext}`
// });