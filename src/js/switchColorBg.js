document.addEventListener("scroll", () => {
    const navigation = document.querySelector(".naviguation");
    const contact = document.querySelector(".contact");
    const jobList = document.querySelector(".job-list");
  
    let isNavigationVisible = false;
    let isContactVisible = false;
    let isJobListCentered = false;
  
    if (navigation) {
      const rectNav = navigation.getBoundingClientRect();
      isNavigationVisible =
        rectNav.top < window.innerHeight / 2 && rectNav.bottom > window.innerHeight / 3;
    }
  
    if (contact) {
      const rectContact = contact.getBoundingClientRect();
      isContactVisible =
        rectContact.top < window.innerHeight / 2 && rectContact.bottom > window.innerHeight / 3;
    }
  
    if (jobList) {
      const rectJob = jobList.getBoundingClientRect();
      isJobListCentered =
        rectJob.top <= window.innerHeight / 2 && rectJob.bottom >= window.innerHeight / 2;
    }
  
    if ((isNavigationVisible || isContactVisible) && !isJobListCentered) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
  