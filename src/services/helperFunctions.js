export function activeClicked(links) {
    links.forEach(filter => {
        filter.addEventListener("click", function (e) {
            links.forEach(filter => {
                filter.classList.remove("active");
            });
            filter.classList.add('active')
        });
    });
}
export function clearActiveEvents(links) {
    links.forEach(filter => {
        filter.removeEventListener("click", function (e) {
            links.forEach(filter => {
                filter.classList.remove("active");
            });
            filter.classList.add('active')
        });
    });
}