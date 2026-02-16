# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed with Next.js
- **SEO Optimized**: Built-in SEO optimization
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Contact Form**: Functional contact form with validation

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── sections/         # Page sections (Hero, About, Skills, etc.)
├── public/               # Static assets
│   ├── images/           # Image files
│   └── icons/            # Icon files and favicons
├── utils/                # Utility functions and constants
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

1. Update your personal information in `utils/constants.ts`:
   - Name, title, description
   - Social media links
   - Contact information

2. Update the content in each section component:
   - `components/sections/Hero.tsx` - Hero section
   - `components/sections/About.tsx` - About section
   - `components/sections/Skills.tsx` - Skills section
   - `components/sections/Projects.tsx` - Projects section
   - `components/sections/Experience.tsx` - Experience section
   - `components/sections/Contact.tsx` - Contact section

### Styling

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Update `app/globals.css` for global styles
- Each component uses Tailwind classes for styling

### Images

- Add your profile picture to `public/images/profile/`
- Add project screenshots to `public/images/projects/`
- Update image paths in the components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS/Azure/GCP**: Use their respective deployment services

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

⭐ Don't forget to give this project a star if you found it helpful!
