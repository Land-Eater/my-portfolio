console.log("script.js loaded");
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

function setExperience(id,startDate){
    const element = document.getElementById(id);

    if (element){
        element.textContent = getExperience(startDate);
    }
}


setExperience("csharp-experience","2025-08-01");

setExperience("unity-experience","2025-08-01");

setExperience("python-experience","2026-04-01");

setExperience("c-experience","2026-06-01");

setExperience("cpp-experience","2025-11-01");

setExperience("swift-experience","2025-10-01");

setExperience("blender-experience","2026-01-01");

setExperience("htmlcss-experience","2026-05-01");

