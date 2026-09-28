const params = new URLSearchParams(window.location.search);

const carIndex = params.get("car");

console.log(carIndex);

fetch("cars45_bmw.json")
  .then((response) => response.json())
  .then((cars) => {
    const car = cars[carIndex];

    console.log(car);

    // Title
    document.getElementById("car-title").textContent = car.title;

    // Price
    document.getElementById("car-price").textContent = car.price;

    // Image
    document.getElementById("car-image").src = car.image_urls[0];

    // IMAGE GALLERY

    const gallery = document.getElementById("car-gallery");

    car.image_urls.forEach((imageUrl, index) => {
      const image = document.createElement("img");

      image.src = imageUrl;

      image.alt = `${car.title} image ${index + 1}`;

      image.addEventListener("click", () => {
        document.getElementById("car-image").src = imageUrl;
      });

      gallery.appendChild(image);
    });

    // Make
    document.getElementById("car-make").textContent = car.make;

    // Model
    document.getElementById("car-model").textContent = car.model;

    // Year
    document.getElementById("car-year").textContent = car.year;

    document.getElementById("car-trim").textContent =
      car.trim || "Not available";

    document.getElementById("car-colour").textContent =
      car.colour || "Not available";

    document.getElementById("car-mileage").textContent =
      car.mileage || "Not available";

    // Transmission
    document.getElementById("car-transmission").textContent = car.transmission;

    // Condition
    document.getElementById("car-condition").textContent = car.condition;

    // Location
    document.getElementById("car-location").textContent =
      car.location || "Not available";

    // Features
    if (car.features) {
      document.getElementById("car-features").textContent = car.features;
    } else {
      document.getElementById("car-features").textContent =
        "No features available.";
    }

    // Image Count
    document.getElementById("car-image-count").textContent =
      car.image_count || "Not available";

    // Original Listing URL
    const originalUrl = document.getElementById("car-original-url");

    if (car.original_url) {
      originalUrl.href = car.original_url;
    } else {
      originalUrl.style.display = "none";
    }

    // Description
    document.getElementById("car-description").textContent =
      car.description || "No description available.";
  })

  .catch((error) => {
    console.error("Error loading car details:", error);
  });
