function showColleges(course) {
  const collegeMap = {
    webdev: ["ABC Institute of Technology", "City Web Academy", "CodeBridge University"],
    datasci: ["DataLab College", "AI Research Institute", "Innovate Tech Campus"],
    marketing: ["Digital Edge Academy", "Modern Business School", "AdGuru University"],
    career: ["MentorHub College", "FuturePath Institute", "ProCareer Campus"]
  };

  const collegeItems = document.getElementById("collegeItems");
  collegeItems.innerHTML = ""; // Clear old list

  const colleges = collegeMap[course];
  colleges.forEach(college => {
    const li = document.createElement("li");
    li.textContent = college;
    collegeItems.appendChild(li);
  });
}
