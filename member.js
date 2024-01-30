function skillsMember() {
    if (document.getElementById("skills-member").style.display == "none") {
        document.getElementById("skills-member").style.display = "block";
        document.getElementById("skills").style.display = "none";
        document.getElementById("skills-teacher").style.display = "none";
    } else {
        document.getElementById("skills-member").style.display = "none";
    }
}