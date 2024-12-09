# Philippine Holiday Calendar

A dynamic web application that displays and tracks Philippine holidays throughout the year. The calendar features an interactive interface with color-coded holiday types, detailed holiday information, and real-time date tracking.

## 🌟 Features

- **Dynamic Calendar Display**
  - Interactive month navigation
  - Real-time clock (UTC+8/Philippine Time)
  - Current date highlighting
  - Color-coded holiday types

- **Holiday Information**
  - Detailed holiday pages
  - Color-coded categories
  - Comprehensive descriptions
  - Easy navigation back to calendar

- **Responsive Design**
  - Mobile-friendly layout
  - Adaptive grid system
  - Readable on all devices

## 🎨 Holiday Types & Color Coding

- 🔴 Regular Holiday (Red)
- 🟡 Special Non-working Holiday (Yellow)
- 🔵 Special Working Day (Blue)
- 🟢 Common Local Holiday (Green)
- 🟣 Observance (Purple)
- 🔷 Season (Teal)

## 🛠️ Technologies Used

- **Frontend Framework**
  - Alpine.js - Lightweight JavaScript framework
  - TailwindCSS - Utility-first CSS framework
  - DaisyUI - Tailwind CSS component library

- **Styling**
  - Theme: DaisyUI "night" theme
  - Font: Poppins (Google Fonts)
  - Responsive grid layout

- **Development**
  - Python SimpleHTTPServer for local development
  - JSON for holiday data storage

## 📦 Project Structure

```
├── index.html          # Main calendar page
├── holiday.html        # Holiday details page
├── calendar.js         # Calendar logic and functionality
├── holidays.json       # Holiday data
├── server.py           # Local development server
├── LICENSE             # License Information 
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/egg-lou/Web-deve-midterm.git
   cd Web-deve-midterm 
   ```

2. **Start the local server**
   ```bash
   python server.py
   ```

3. **Access the application**
   - Open your browser
   - Navigate to `http://localhost:8000`

## 💻 Development

To modify or extend the application:

1. **Holiday Data**
   - Edit `holidays.json` to update holiday information
   - Follow the existing JSON structure for new entries

2. **Styling**
   - Calendar styling can be modified in `index.html`
   - Holiday page styling in `holiday.html`
   - Custom styles are applied through Tailwind classes

3. **Functionality**
   - Calendar logic is in `calendar.js`
   - Alpine.js handles the reactive UI updates

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📱 Mobile Support

The application is fully responsive and works on:
- Smartphones
- Tablets
- Desktop computers

## 🤝 Contributing

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- DaisyUI for the beautiful components
- Alpine.js for the reactive functionality
- TailwindCSS for the utility classes
- Google Fonts for Poppins font
