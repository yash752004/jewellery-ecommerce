# 💎 Luxe Jewelry - E-commerce Demo

A modern, AI-powered jewelry e-commerce platform built with Next.js, featuring beautiful product showcases, intelligent recommendations, and an interactive chatbot assistant.

![Luxe Jewelry Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![AI SDK](https://img.shields.io/badge/AI%20SDK-Latest-orange)

## ✨ Features

### 🛍️ **E-commerce Core**
- **Product Catalog** - Beautiful product cards with ratings, pricing, and availability
- **Product Detail Pages** - Comprehensive product information with image galleries
- **Collection Pages** - Curated collections (Siblings Bond, Wedding, Casual)
- **Responsive Design** - Optimized for mobile, tablet, and desktop

### 🤖 **AI-Powered Features**
- **Smart Recommendations** - AI-powered product suggestions based on user preferences
- **Interactive Chatbot** - 24/7 jewelry expert assistant with contextual help
- **Personalized Experience** - Tailored product recommendations and styling advice

### 🎨 **User Experience**
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Product Reviews** - Customer reviews with ratings and photo uploads
- **Write Reviews** - Interactive review submission with star ratings
- **Promotional Widgets** - Dynamic promotional content and featured products
- **Product Carousel** - Animated new arrivals showcase

### 🔧 **Technical Features**
- **Server Components** - Optimized performance with Next.js App Router
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first styling with custom design system
- **Responsive Images** - Optimized image loading with Next.js Image component
- **SEO Optimized** - Meta tags and structured data for better search visibility

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd luxe-jewelry-demo
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your OpenAI API key for AI features:
   \`\`\`env
   OPENAI_API_KEY=your_openai_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
luxe-jewelry-demo/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── chat/                 # AI chatbot endpoint
│   │   └── recommendations/      # AI recommendations endpoint
│   ├── collections/              # Collection pages
│   │   ├── siblings-bond/        # Siblings Bond collection
│   │   ├── wedding/              # Wedding collection
│   │   └── casual/               # Casual collection
│   ├── product/[id]/             # Dynamic product pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── ai-chatbot.tsx           # AI chatbot component
│   ├── ai-recommendations.tsx    # AI recommendations
│   ├── collections-showcase.tsx  # Collections display
│   ├── product-card.tsx         # Product card component
│   ├── product-gallery.tsx     # Product image gallery
│   ├── product-reviews.tsx     # Reviews system
│   ├── promotional-widgets.tsx  # Promotional content
│   └── write-review-dialog.tsx  # Review submission
├── lib/                         # Utilities and data
│   └── products.ts              # Product data and utilities
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── package.json                # Dependencies
└── README.md                   # This file
\`\`\`

## 🎯 Key Pages

### 🏠 **Homepage** (`/`)
- Hero section with call-to-action
- Promotional widgets with animations
- New products carousel
- Collections showcase
- Feature highlights
- Newsletter signup

### 📦 **Product Pages** (`/product/[id]`)
- High-resolution image gallery
- Detailed product information
- Customer reviews and ratings
- AI-powered recommendations
- Product specifications
- Guarantee badges

### 💍 **Collection Pages**
- **Siblings Bond** (`/collections/siblings-bond`) - Matching jewelry sets
- **Wedding Collection** (`/collections/wedding`) - Bridal and engagement pieces
- **Casual Collection** (`/collections/casual`) - Everyday elegant jewelry

## 🤖 AI Features

### **Smart Recommendations**
- Analyzes product compatibility, style, and price range
- Provides contextual reasoning for suggestions
- Fallback system when AI is unavailable

### **Chatbot Assistant**
- 24/7 jewelry expert assistance
- Product recommendations and styling advice
- Store policy information
- Responsive design with 70% viewport height
- Quick question shortcuts

## 🎨 Design System

### **Color Palette**
- **Primary**: Emerald (#059669) - Trust and luxury
- **Secondary**: Teal - Complementary accent
- **Collection Colors**:
  - Siblings Bond: Pink/Rose tones
  - Wedding: Amber/Gold tones  
  - Casual: Teal/Cyan tones

### **Typography**
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Hierarchy**: Clear heading structure with proper contrast

### **Components**
- Built with shadcn/ui for consistency
- Custom components for jewelry-specific features
- Responsive design patterns

## 🔧 Configuration

### **Environment Variables**
\`\`\`env
# AI Features (Optional)
OPENAI_API_KEY=your_openai_api_key_here

# Add other environment variables as needed
\`\`\`

### **Tailwind Configuration**
Custom color scheme and design tokens in `tailwind.config.ts`:
- Primary colors (emerald theme)
- Custom animations
- Responsive breakpoints

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Enhanced layouts for medium screens
- **Desktop Experience** - Full-featured desktop interface
- **Touch Friendly** - Optimized touch targets and interactions

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
- **Netlify**: Configure build settings for Next.js
- **Railway**: Add environment variables and deploy
- **Docker**: Use the included Dockerfile (if added)

## 🛠️ Development

### **Available Scripts**
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### **Code Quality**
- **TypeScript** - Full type safety
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting (if configured)

## 🔮 Future Enhancements

### **Planned Features**
- [ ] User authentication and accounts
- [ ] Shopping cart and checkout
- [ ] Payment processing integration
- [ ] Inventory management
- [ ] Order tracking
- [ ] Wishlist functionality
- [ ] Product comparison
- [ ] Advanced search and filtering
- [ ] Multi-language support
- [ ] Admin dashboard

### **Technical Improvements**
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Image optimization and CDN
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] Analytics integration
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and AI SDK
- **shadcn/ui** - For beautiful UI components
- **Tailwind CSS** - For utility-first styling
- **OpenAI** - For AI-powered features

## 📞 Support

For support and questions:
- 📧 Email: support@luxejewelry.demo
- 💬 Chat: Use the AI chatbot on the website
- 🐛 Issues: GitHub Issues page

---

**Built with ❤️ using Next.js, TypeScript, and AI**

*This is a demo project showcasing modern e-commerce capabilities with AI integration.*
