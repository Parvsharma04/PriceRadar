# PriceRadar

PriceRadar is a web application designed to help users find the best deals from various ecommerce platforms by filtering and comparing prices. With PriceRadar, users can easily navigate through multiple sites to ensure they get the best value for their purchases.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Cross-Platform Price Comparison**: Fetches and displays product prices from multiple ecommerce sites.
- **User-Friendly Interface**: Easy navigation and search functionalities.
- **Real-Time Updates**: Ensures users receive the most current pricing information.
- **Filters and Sorting Options**: Allows users to refine search results based on categories, price ranges, and more.

## Technologies Used

- **Frontend**: React+Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Web Scraping/API Integration**: Puppeteer, Axios.
- **Deployment**: AWS, Heroku, or vercel

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Parvsharma04/PriceRadar.git
   cd PriceRadar
   ```

2. Install dependencies for frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for backend:

   ```bash
   cd backend
   npm install
   ```

4. Start the development server(frontend):

   ```bash
   npm run dev
   ```

5. Start the development server(backend):
   ```bash
   nodemon src/app.js
   ```

## Usage

- Navigate to the homepage of PriceRadar.
- Use the search bar to input the product you want to find.
- Browse through the filtered results from various ecommerce sites.
- Click on any product to view more details or to purchase.

## Contributing

We welcome contributions to PriceRadar! If you have suggestions or want to report an issue, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
