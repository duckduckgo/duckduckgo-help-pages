(async function () {
    const geoRestrictions = ["DE"];
    try {
        const res = await fetch("https://duckduckgo.com/country.json");

        if (!res.ok) throw new Error(res.statusText);

        const result = await res.json();

        if (geoRestrictions.includes(result.country)) {
            let link = document.createElement("link");
            link.href = `/css/show-${result.country}-content.css`;
            link.rel = "stylesheet";

            document.head.append(link);
        }
    } catch (error) {
        // do nothing
    }
})();
