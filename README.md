#🛒 Jungle house — React Next.js App

A simple React + Next.js ecommerce project that displays a list of plants with their prices and dynamically calculates the total cost. It also demonstrates currency formatting using Intl.NumberFormat for Ghanaian cedis (GH₵).

##🚀 Features

🪴 Displays a list of plants with prices (Monstera, Ivy, and Flower)

💰 Calculates and displays the total price dynamically

🌍 Formats currency using Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' })

📁 Uses the public directory for static assets

⚡ Built with React and Next.js for fast rendering

##🧩 Project Structure

jungle-house/ │ ├── src/app/ │ ├── layout.js # Root layout (HTML and body wrapper) │ ├── page.js # Main entry point for the app │ └── globals.css # Global styles for the app │ ├── components/ │ ├── Banner.js # Header section with logo and title │ └── Cart.js # Cart section displaying products and total │ ├── styles/ │ ├── Banner.css # Styles for Banner component │ ├── Cart.css # Styles for Cart component │ └── globals.css # Base styles │ ├── utils/ │ └── format.js # Currency formatter utility │ └── public/ │ │ └── logo.png # App logo │ ├── package.json └── README.md

⚙️ Installation

Clone the repository git clone https://github.com/peter-adjao/jungle-house.git

Navigate into the project folder cd jungle-house

Install dependencies npm install

Run the development server npm run dev

Open in your browser

Visit http://localhost:3000

🧠 Key Concepts

Components – Reusable UI parts like the Cart component

Utils – Helper functions such as formatCurrency for formatting data

Public Folder – Used for static files (e.g., images and icons) accessible via /filename

🪴 Example Output Cart
Monstera: GH₵8.00 Ivy: GH₵10.00 Flower: GH₵15.00
Total: GH₵33.00

🧑‍💻 Technologies Used

Next.js

React

JavaScript (ES6+)

Intl.NumberFormat

🙏 Credits
This project was originally guided by OpenClassrooms(https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js).
All instructional content and starter code are credited to them.

As part of my learning journey, I Refactored, customized and extended the project to reinforce my understanding of:

🛠️ React and Next.js architecture
💱 Currency formatting with Intl.NumberFormat for Ghanaian cedis (GH₵)
🧩 Component modularity and utility abstraction
📁 Static asset handling via the public directory
📄 License

This project is open source and available under the MIT License.
