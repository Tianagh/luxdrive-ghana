# LuxDrive Ghana – Car Listing Website

## 1. Project Overview

LuxDrive Ghana is a simple car dealership website developed to display available vehicles and their details.

The website uses:

- HTML for the page structure
- CSS for styling and responsive design
- JavaScript for loading and displaying car data
- JSON for storing the scraped car information

The car data is stored in `cars45_bmw.json` and is dynamically loaded using JavaScript.

The website contains two main pages:

1. **Car Listing Page (`index.html`)**
2. **Car Details Page (`details.html`)**

---

## 2. Project Structure

```text
LuxDrive Ghana/
│
├── index.html
├── details.html
├── cars45_bmw.json
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── details.js
│
└── images/
    └── car images
```

### File Descriptions

**`index.html`**

The main car listing page. It contains the navigation, hero section, and the section where the available cars are displayed.

**`details.html`**

The car details page. It displays detailed information about a selected vehicle.

**`cars45_bmw.json`**

Contains the scraped BMW vehicle data used by the website.

The JSON data includes information such as:

- Title
- Price
- Make
- Model
- Year
- Trim
- Colour
- Mileage
- Transmission
- Condition
- Location
- Features
- Description
- Image count
- Image URLs
- Original listing URL

**`css/style.css`**

Contains the styling for the website, including the navigation, hero section, car cards, details page, image gallery, footer, and mobile responsive design.

**`js/script.js`**

Loads the car data from `cars45_bmw.json` and dynamically creates the car cards on the main page.

**`js/details.js`**

Loads the selected car's information from the JSON file and displays it on the car details page.

**`images/`**

Contains local images used by the website where applicable.

## 3. How to Run the Project

### Step 1 – Extract the Project

Extract the submitted ZIP file to a location on your computer.

### Step 2 – Open the Project

Open the extracted project folder in a code editor such as Visual Studio Code.

### Step 3 – Start a Local Server

Because the website loads data from a JSON file using JavaScript `fetch()`, it should be run through a local web server rather than directly opening the HTML file.

In Visual Studio Code, the recommended option is to use the **Live Server** extension.

1. Open the project in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html`.
4. Right-click inside the file.
5. Select **Open with Live Server**.

The website should then open in the browser.

## 4. How the Website Works

### Car Listing Page

When `index.html` loads, `script.js` runs.

The JavaScript fetches the data from:

```text
cars45_bmw.json
```

The JSON response is converted into JavaScript data.

The program then loops through the cars using `forEach()` and creates a car card for each vehicle.

Each car card displays:

- Car image
- Car title
- Price
- Year
- Colour
- Transmission
- Location
- View Details button

The View Details button sends the user to the details page using the car's array index.

For example:

```text
details.html?car=0
```

The number represents the position of the car in the JSON data.

## 5. How the Car Details Page Works

When a user clicks **View Details**, the browser opens:

```text
details.html?car=INDEX
```

For example:

```text
details.html?car=1
```

The `details.js` file reads the `car` value from the URL using `URLSearchParams`.

It then loads the same `cars45_bmw.json` file and selects the car at that index.

The selected vehicle's information is then displayed on the page.

The details page displays:

- Title
- Price
- Make
- Model
- Year
- Trim
- Colour
- Mileage
- Transmission
- Condition
- Location
- Features
- Number of Images
- Description
- Original Listing

## 6. Image Gallery

The details page also creates an image gallery using the image URLs stored in the JSON data.

The first image is displayed as the main image.

The remaining images are displayed as smaller gallery images.

When a user clicks a gallery image, JavaScript changes the main image to the selected image.

## 7. Original Listing

Each vehicle contains an `original_url` field in the JSON data.

On the details page, the **View Original Listing** link uses this URL.

When a buyer clicks the link, the original listing opens in a new browser tab.

This allows an interested buyer to access the original Cars45 listing.

## 8. Responsive Design

The website includes responsive CSS for smaller screen sizes.

On mobile devices:

- The car grid changes to a single-column layout.
- The details page changes from two columns to one column.
- Navigation elements adjust for smaller screens.
- Images and content are resized to fit smaller displays.

## 9. Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **JSON**
- **Visual Studio Code**
- **Live Server**

## 10. Important Note

The website loads its vehicle information from:

```text
cars45_bmw.json
```

Therefore, the JSON file must remain in the same project directory as the HTML files.

The JavaScript files also need to remain in the `js` folder and the stylesheet must remain in the `css` folder unless the file paths in the HTML are changed.

The project should be run using a local web server such as Live Server so that the JavaScript `fetch()` requests can successfully load the JSON data.

## 11. Main Features

The completed website provides:

- Dynamic car listing
- Dynamic car details
- JSON-based car data
- Dynamic image gallery
- Car specifications
- Location
- Features
- Number of images
- Full car description
- Original listing link
- Responsive mobile layout
- Two-page website structure
