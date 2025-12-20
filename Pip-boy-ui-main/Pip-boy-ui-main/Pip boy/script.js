const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

let currentTab = 0 // Default to the first tab

tabs[currentTab].classList.add("active");
pages[currentTab].classList.add("active");

document.addEventListener("keydown", (e) => {
  //remove the current active
  tabs[currentTab].classList.remove("active");
  pages[currentTab].classList.remove("active");

  if (e.key === "ArrowLeft")  {
    currentTab = (currentTab - 1 + tabs.length) % tabs.length;
  } 
  else if (e.key === "ArrowRight") {
    currentTab = (currentTab + 1) % tabs.length;
  }

  tabs[currentTab].classList.add("active");
  pages[currentTab].classList.add("active");
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs and pages
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Add active to the clicked tab
    tab.classList.add("active");

    // Show the page that matches data-page
    const pageId = tab.dataset.page;
    document.getElementById(pageId).classList.add("active");
  });
});
