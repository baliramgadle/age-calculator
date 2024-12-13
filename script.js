document.getElementById("calculate-age").addEventListener("click", () => {
    const birthDate = new Date(document.getElementById("birth-date").value);
    if (isNaN(birthDate)) {
      document.getElementById("age-result").innerText = "Please select a valid birth date.";
      return;
    }
  
    const today = new Date();
    const diff = today - birthDate;
    const ageDate = new Date(diff);
  
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const dayOfWeek = birthDate.toLocaleString("default", { weekday: "long" });
  
    document.getElementById("age-result").innerHTML = `
      <strong>Age:</strong><br>
      ${years} years, ${months} months, ${days} days<br>
      Total: ${totalWeeks} weeks, ${totalDays} days, ${totalMonths} months<br>
      Birth Day: ${dayOfWeek}
    `;
  });
  
  document.getElementById("calculate-difference").addEventListener("click", () => {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
  
    if (isNaN(startDate) || isNaN(endDate)) {
      document.getElementById("difference-result").innerText = "Please select valid dates.";
      return;
    }
  
    if (endDate < startDate) {
      document.getElementById("difference-result").innerText = "End date must be after start date.";
      return;
    }
  
    const diff = endDate - startDate;
    const diffDate = new Date(diff);
  
    const years = diffDate.getUTCFullYear() - 1970;
    const months = diffDate.getUTCMonth();
    const days = diffDate.getUTCDate() - 1;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const startDayOfWeek = startDate.toLocaleString("default", { weekday: "long" });
    const endDayOfWeek = endDate.toLocaleString("default", { weekday: "long" });
  
    document.getElementById("difference-result").innerHTML = `
      <strong>Date Difference:</strong><br>
      ${years} years, ${months} months, ${days} days<br><br>
      Total: ${totalWeeks} weeks, ${totalDays} days, ${totalMonths} months<br><br>
      Start Day: ${startDayOfWeek}, End Day: ${endDayOfWeek}
    `;
  });
  
  document.getElementById("calculate-age").addEventListener("click", () => {
    const birthDate = new Date(document.getElementById("birth-date").value);
    const today = new Date();
  
    if (isNaN(birthDate)) {
      document.getElementById("age-result").innerText = "Please select a valid birth date.";
      return;
    }
  
    if (birthDate > today) {
      document.getElementById("age-result").innerText = "Birth date cannot be in the future.";
      return;
    }
  
    const diff = today - birthDate;
    const ageDate = new Date(diff);
  
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const dayOfWeek = birthDate.toLocaleString("default", { weekday: "long" });
  
    document.getElementById("age-result").innerHTML = `
      <strong>Age:</strong><br>
      ${years} years, ${months} months, ${days} days<br><br>
      Total: ${totalWeeks} weeks, ${totalDays} days, ${totalMonths} months<br><br>
      Birth Day: ${dayOfWeek}
    `;
  });
  