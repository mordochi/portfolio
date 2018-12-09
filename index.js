window.onload = function() {

};

function changeTab(e, id) {
  const tabContents = document.querySelectorAll(".tab-content");
  for(let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  const showDiv = document.getElementById(id);
  showDiv.style.display = "block";

  const tabs = document.querySelectorAll("nav p");
  for(let i = 0; i < tabs.length; i++) {
    if(tabs[i].classList.contains('active')) {
      tabs[i].classList.remove('active');
    }
  }

  e.currentTarget.className = "active";
}