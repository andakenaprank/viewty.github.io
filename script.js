const menu = document.getElementsByClassName("bars")[0,1];

menu.addEventListener('click', function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "flex";
    if (sidebar.style.display = "flex") {
        const mark = document.getElementsByClassName("mark")[0]
        mark.addEventListener('click', function() {
            sidebar.style.display = "none";
        });
    }
    return;
}
);