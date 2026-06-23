function getExperience(startDate)
{
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    if (months < 0)
    {
        years--;
        months += 12;
    }

    return `${years}年${months}ヶ月`;
}

document.getElementById("csharp-experience").textContent =
    getExperience("2025-08-01");

document.getElementById("unity-experience").textContent =
    getExperience("2025-08-01");

document.getElementById("python-experience").textContent =
    getExperience("2026-04-01");

document.getElementById("c-experience").textContent =
    getExperience("2026-06-01");

document.getElementById("cpp-experience").textContent =
    getExperience("2025-11-01");

document.getElementById("swift-experience").textContent =
    getExperience("2025-10-01");

document.getElementById("cpp-experience").textContent =
    getExperience("2026-01-01");

document.getElementById("htmlcss-experience").textContent =
    getExperience("2026-05-01");