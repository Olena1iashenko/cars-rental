Car Rental App
Welcome to the Car Rental App, a web application designed to help users find the perfect car for their next adventure!

Features
Filtering: Users can filter cars by brand and price per hour to find the ideal car.
Like System: Users can like/unlike cars, and their preferences are saved using localStorage.
Modal: Detailed information about each car is displayed in a modal when clicking "Learn more".
Load More: Users can load more cars as they scroll through the list.
Technologies Used
React.js
Redux
React Router
CSS Modules for styling
Getting Started
To run this project locally, follow these steps:

Clone the repository:

```bash {cmd}
git clone https://github.com/Olena1iashenko/cars-rental
cd car-rental-app
```

Install dependencies:

```bash {cmd}
npm install
```

Start the development server:

```bash {cmd}
npm start
```

Open the app:

Open https://cars-rental-weld.vercel.app/ in your browser to view the app.

Usage
Filtering: Use the dropdowns to filter cars by brand and price per hour.
Like/Unlike: Click on the heart icon to like or unlike a car.
Modal: Click "Learn more" on a car to see detailed information.
Load More: Scroll down and click "Load More" to load additional cars.
Folder Structure
css
Копіювати код
car-rental-app/
│
├── public/
└── src/
├── components/
│ ├── CarItem/
│ ├── Filter/
│ ├── Home/
│ ├── Modal/
│ └── ...
├── redux/
│ ├── carsSlice.js
│ └── store.js
├── App.js
├── index.js
└── ...
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.
