// Fetch the JSON data
fetch("https://feeds.behold.so/hnaWt62QKKXKutFCQUjJ")
  .then((response) => response.json())
  .then((data) => {
    const photoWrapper = document.getElementById("photoWrapper");

    // Loop through the JSON data and create a slide for each photo
    data.forEach((photo) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const image = document.createElement("img");
      image.src = photo.mediaUrl;
      image.alt = "Photo";

      const link = document.createElement("a");
      link.href = photo.permalink;
      link.appendChild(image);

      slide.appendChild(link);
      photoWrapper.appendChild(slide);
    });

    // Initialize the Swiper carousel
    new Swiper(".swiper-container", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 50, // Add spacing between sets

      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching or processing data:", error);
  });

// Fetch the JSON data
fetch("https://feeds.behold.so/hnaWt62QKKXKutFCQUjJ")
  .then((response) => response.json())
  .then((data) => {
    const photoWrapper = document.getElementById("photoWrapper1");

    // Loop through the JSON data and create a slide for each set of photos
    for (let i = 0; i < data.length; i += 2) {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const setContainer = document.createElement("div");
      setContainer.className = "set-container";

      for (let j = i; j < i + 2 && j < data.length; j++) {
        const photo = data[j];

        const image = document.createElement("img");
        image.src = photo.mediaUrl;
        image.alt = "Photo";

        const link = document.createElement("a");
        link.href = photo.permalink;
        link.appendChild(image);

        setContainer.appendChild(link);
      }

      slide.appendChild(setContainer);
      photoWrapper.appendChild(slide);
    }

    // Initialize the Swiper carousel
    new Swiper(".swiper-container1", {
      direction: "horizontal",
      spaceBetween: 20, // Add spacing between sets
      loop: true,
      spaceBetween: 0,

      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching or processing data:", error);
  });
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5500,
  },
});
