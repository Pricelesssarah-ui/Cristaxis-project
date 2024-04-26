CRISTAXIS (A TAXI BOOKING WEBSITE)

Cristaxi is an online taxi booking platform that lets users reserve a taxi instantly or schedule one for later. This convenience saves people the hassle of waiting on the street for a taxi. Users can quickly book a ride from their device, making transportation easier and more efficient.

The platform consist of several key interfaces:

- Home Page: A welcoming, user-friendly interface that provides essential information to users.
- About Page: Provides details about the service, including navigation, content, and footer.
- Blog Page: Offers posts with tips and updates on using a taxi service.
- Contact Us Page: Allows users to easily reach the company via email or phone for assistance.
- Booking Page: Enables users to input their details (name, phone, email), choose pick-up and drop-off locations, select a vehicle type, set date and time, and add notes.
- Responsive Design: The platform adapts to different screen sizes for optimal user experience.
  
FUNCTIONALITIES

When a user fills out the booking form and clicks submit, they receive a success notification, and their information is sent to the company's email. Similarly, when a user fills out the contact form, their information is also sent to the company. For more information, users can contact the company via email or phone.

The website uses framer-motion for smooth page transitions, react-router-dom for page navigation, and react-icons for icons.

API CONSUMPTION

- The API endpoint is stored in a .env file in the base folder.
- The config folder contains fetcher.js for fetching data from the API and handling errors.
- Each page (booking and contact us) has its own API integration for handling form submissions.

  
TECHNOLOGIES USED
  
  - Design: figma
  - Frontend: Reactjs and Tailwind CSS
  - Backend: Nodejs
  - Hosted: CPanel and Vercel

CONCLUSION

React was choosen for this project because it helps build modern web applications using reusable components, making development modular and maintainable. React is versatile and can integrate with other libraries and frameworks.

In hindsight, I might have used Next.js instead because it has built-in routing for easier navigation setup and provides built-in image optimization for better performance. Next.js also allows for creating API routes within the application, making it simpler to handle backend functionality.
  
