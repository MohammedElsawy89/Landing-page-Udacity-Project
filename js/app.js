const sections = document.querySelectorAll("section");
const navContainer = document.createDocumentFragment();

//creating the navbar
for (let section of sections) {
  //creating the list element
  const list = document.createElement("li");

  //creating the anchor element
  const anchor = document.createElement("a");

  //adding the anchor element to the list element
  list.appendChild(anchor);

  //getting the id of the section element
  anchor.href = "#" + section.getAttribute("id");
  anchor.textContent = section.getAttribute("data-nav");
  //styling the anchor
  anchor.setAttribute("class", "menu__link");

  //adding the list elemaent to the documentfragment
  navContainer.appendChild(list);
}
//getting the ul element by id
const getUl = document.querySelector("#navbar__list");

//adding the navcontainer to the ul element
getUl.appendChild(navContainer);

//active section element and navbar while scroll
document.addEventListener("scroll", function () {
  for (let index = 0; index < sections.length; index++) {
    let sect = sections[index];
    if (
      sect.getBoundingClientRect().top < 400 &&
      sect.getBoundingClientRect().bottom > 400
    ) {
      //adding the new background when active
      sect.classList.add("your-active-class");

      //calling the anchor element
      const getAnch = document.getElementsByClassName("menu__link")[index];

      // I added a new class in the stylesheet for active

      // making the nav cell active while scrolling
      getAnch.classList.add("active");
    } else {
      sect.classList.remove("your-active-class");

      const getAnch = document.getElementsByClassName("menu__link")[index];

      // removeing the activating
      getAnch.classList.remove("active");
    }
  }
});
//making the scrolling smooth when clich on the navbar
const navigation = document.getElementsByClassName("menu__link");
for (let index = 0; index < navigation.length; index++) {
  navigation[index].addEventListener("click", function (event) {
    event.preventDefault();
    sections[index].scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
