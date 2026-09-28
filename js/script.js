fetch("cars45_bmw.json")
  .then((response) => response.json())
  .then((cars) => {
    const carList = document.getElementById("car-list");

    cars.forEach((car, index) => {
      const card = document.createElement("div");

      card.classList.add("car-card");

      card.innerHTML = `
                <img src="${car.image_urls[0]}" alt="${car.title}">

                <div class="car-info">

                    <h3>${car.title}</h3>

                    <p class="car-price">
                        ${car.price}
                    </p>

                    <p>
                        ${car.year} | ${car.colour} | ${car.transmission}
                    </p>

                    <p>
                        ${car.location}
                    </p>

                    <a href="details.html?car=${index}" class="details-button">
                          View Details
                    </a>

                </div>
            `;

      carList.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading cars:", error);
  });
