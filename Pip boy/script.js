const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

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
