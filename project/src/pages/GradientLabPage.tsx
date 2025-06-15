import React, { useState } from 'react';
import { ArrowLeft, Copy, Eye, Palette, Sparkles, Code2, Download, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CopyButton from '../components/CopyButton';

const GradientLabPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const gradientCategories = [
    { id: 'all', name: 'All Gradients', icon: Palette },
    { id: 'linear', name: 'Linear', icon: Code2 },
    { id: 'radial', name: 'Radial', icon: Eye },
    { id: 'conic', name: 'Conic', icon: Sparkles },
    { id: 'textured', name: 'Textured', icon: Heart },
  ];

  const gradientCollection = [
    // Linear Gradients
    {
      id: 1,
      name: 'Sunset Horizon',
      category: 'linear',
      description: 'Perfect for hero sections and landing pages',
      css: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      tailwind: 'bg-gradient-to-br from-pink-300 via-purple-200 to-purple-200',
      preview: 'bg-gradient-to-br from-pink-300 via-purple-200 to-purple-200',
      tags: ['hero', 'landing', 'soft']
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      category: 'linear',
      description: 'Cool and calming for professional sites',
      css: 'linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)',
      tailwind: 'bg-gradient-to-br from-teal-200 to-pink-200',
      preview: 'bg-gradient-to-br from-teal-200 to-pink-200',
      tags: ['professional', 'calm', 'clean']
    },
    {
      id: 3,
      name: 'Fire Burst',
      category: 'linear',
      description: 'Bold and energetic for call-to-action buttons',
      css: 'linear-gradient(45deg, #ff416c 0%, #ff4b2b 100%)',
      tailwind: 'bg-gradient-to-r from-pink-500 to-red-500',
      preview: 'bg-gradient-to-r from-pink-500 to-red-500',
      tags: ['cta', 'bold', 'energy']
    },
    {
      id: 4,
      name: 'Midnight City',
      category: 'linear',
      description: 'Dark and sophisticated for premium brands',
      css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tailwind: 'bg-gradient-to-br from-blue-400 to-purple-600',
      preview: 'bg-gradient-to-br from-blue-400 to-purple-600',
      tags: ['dark', 'premium', 'sophisticated']
    },
    {
      id: 5,
      name: 'Golden Hour',
      category: 'linear',
      description: 'Warm and inviting for lifestyle brands',
      css: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      tailwind: 'bg-gradient-to-br from-yellow-300 to-orange-300',
      preview: 'bg-gradient-to-br from-yellow-300 to-orange-300',
      tags: ['warm', 'lifestyle', 'inviting']
    },
    {
      id: 6,
      name: 'Forest Mist',
      category: 'linear',
      description: 'Natural and organic for eco-friendly sites',
      css: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
      tailwind: 'bg-gradient-to-br from-green-200 to-lime-200',
      preview: 'bg-gradient-to-br from-green-200 to-lime-200',
      tags: ['natural', 'eco', 'organic']
    },

    // Radial Gradients
    {
      id: 7,
      name: 'Spotlight Effect',
      category: 'radial',
      description: 'Perfect for highlighting content areas',
      css: 'radial-gradient(circle at center, #667eea 0%, #764ba2 100%)',
      tailwind: 'bg-gradient-radial from-blue-400 to-purple-600',
      preview: 'bg-gradient-to-br from-blue-400 to-purple-600',
      tags: ['highlight', 'focus', 'center']
    },
    {
      id: 8,
      name: 'Aurora Glow',
      category: 'radial',
      description: 'Ethereal glow effect for magical themes',
      css: 'radial-gradient(ellipse at top, #a8edea 0%, #fed6e3 100%)',
      tailwind: 'bg-gradient-radial from-teal-200 to-pink-200',
      preview: 'bg-gradient-to-br from-teal-200 to-pink-200',
      tags: ['magical', 'ethereal', 'glow']
    },
    {
      id: 9,
      name: 'Solar Flare',
      category: 'radial',
      description: 'Intense center focus for impact sections',
      css: 'radial-gradient(circle at 30% 70%, #ff9a9e 0%, #fad0c4 100%)',
      tailwind: 'bg-gradient-radial from-pink-300 to-orange-200',
      preview: 'bg-gradient-to-br from-pink-300 to-orange-200',
      tags: ['intense', 'impact', 'focus']
    },

    // Conic Gradients
    {
      id: 10,
      name: 'Rainbow Wheel',
      category: 'conic',
      description: 'Vibrant rainbow for creative portfolios',
      css: 'conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff0080, #ff0000)',
      tailwind: 'bg-conic-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
      preview: 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400',
      tags: ['creative', 'vibrant', 'portfolio']
    },
    {
      id: 11,
      name: 'Sunset Spin',
      category: 'conic',
      description: 'Rotating sunset colors for dynamic effects',
      css: 'conic-gradient(from 45deg, #ff9a9e, #fecfef, #fecfef, #ff9a9e)',
      tailwind: 'bg-conic-to-r from-pink-300 via-purple-200 to-pink-300',
      preview: 'bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300',
      tags: ['dynamic', 'sunset', 'rotating']
    },
    {
      id: 12,
      name: 'Tech Radar',
      category: 'conic',
      description: 'Futuristic radar effect for tech companies',
      css: 'conic-gradient(from 0deg at 50% 50%, #667eea, #764ba2, #667eea)',
      tailwind: 'bg-conic-to-r from-blue-400 via-purple-600 to-blue-400',
      preview: 'bg-gradient-to-r from-blue-400 via-purple-600 to-blue-400',
      tags: ['tech', 'futuristic', 'radar']
    },

    // Textured/Complex Gradients
    {
      id: 13,
      name: 'Mesh Gradient',
      category: 'textured',
      description: 'Modern mesh effect popular in 2024-2025',
      css: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      tailwind: 'bg-gradient-to-br from-blue-400 via-purple-600 via-pink-400 via-red-400 to-blue-400',
      preview: 'bg-gradient-to-br from-blue-400 via-purple-600 via-pink-400 via-red-400 to-blue-400',
      tags: ['modern', 'mesh', '2024', 'trendy']
    },
    {
      id: 14,
      name: 'Glass Morphism',
      category: 'textured',
      description: 'Frosted glass effect with subtle gradients',
      css: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      tailwind: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md',
      preview: 'bg-gradient-to-br from-white/20 to-white/10 border border-white/20',
      tags: ['glass', 'frosted', 'modern', 'subtle']
    },
    {
      id: 15,
      name: 'Neon Glow',
      category: 'textured',
      description: 'Vibrant neon effect for gaming and entertainment',
      css: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)',
      tailwind: 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500',
      preview: 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500',
      tags: ['neon', 'gaming', 'entertainment', 'vibrant']
    },
    {
      id: 16,
      name: 'Holographic',
      category: 'textured',
      description: 'Iridescent holographic effect for luxury brands',
      css: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
      tailwind: 'bg-gradient-to-r from-pink-500 via-orange-400 via-cyan-400 to-pink-500',
      preview: 'bg-gradient-to-r from-pink-500 via-orange-400 via-cyan-400 to-pink-500',
      tags: ['holographic', 'luxury', 'iridescent', 'premium']
    },
    {
      id: 17,
      name: 'Gradient Noise',
      category: 'textured',
      description: 'Organic noise texture for artistic designs',
      css: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      tailwind: 'bg-gradient-to-br from-blue-400 via-purple-600 via-pink-400 via-red-400 to-blue-400',
      preview: 'bg-gradient-to-br from-blue-400 via-purple-600 via-pink-400 via-red-400 to-blue-400',
      tags: ['noise', 'organic', 'artistic', 'texture']
    },
    {
      id: 18,
      name: 'Duotone Effect',
      category: 'textured',
      description: 'Two-tone gradient for modern photography overlays',
      css: 'linear-gradient(45deg, #ff006e 0%, #8338ec 100%)',
      tailwind: 'bg-gradient-to-r from-pink-500 to-purple-600',
      preview: 'bg-gradient-to-r from-pink-500 to-purple-600',
      tags: ['duotone', 'photography', 'overlay', 'modern']
    }
  ];

  const filteredGradients = selectedCategory === 'all' 
    ? gradientCollection 
    : gradientCollection.filter(gradient => gradient.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Gradient Tool</span>
            </Link>
          </div>

          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
              <Palette className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-300">Gradient Lab</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              CSS Gradient Library
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Discover <strong className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">18+ beautiful CSS gradients</strong> with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> ready-to-use Tailwind CSS classes</span>. 
              Perfect for modern web design, from subtle textures to bold statements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Linear Gradients</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Radial Gradients</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Conic Gradients</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Textured Effects</span>
              </div>
            </div>
          </header>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {gradientCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">
                      ({category.id === 'all' ? gradientCollection.length : gradientCollection.filter(g => g.category === category.id).length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gradient Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGradients.map((gradient) => (
              <article key={gradient.id} className="bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800/50 p-6 hover:border-slate-700/50 transition-all duration-300 group">
                {/* Preview */}
                <div className="relative mb-6">
                  <div 
                    className={`w-full h-40 rounded-2xl border-2 border-slate-700/50 shadow-2xl relative overflow-hidden ${gradient.preview}`}
                    style={gradient.category === 'textured' && gradient.name === 'Glass Morphism' ? {
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(10px)'
                    } : {}}
                  >
                    {/* Overlay pattern for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Corner indicators */}
                    <div className="absolute top-3 left-3 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-white/30 rounded-full"></div>
                    
                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white/90 font-bold text-lg drop-shadow-lg">
                          {gradient.name}
                        </div>
                        <div className="text-white/70 text-sm drop-shadow">
                          {gradient.category.charAt(0).toUpperCase() + gradient.category.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className={`absolute inset-0 rounded-2xl blur-xl opacity-20 -z-10 ${gradient.preview}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <header>
                    <h3 className="text-xl font-bold text-white mb-2">{gradient.name}</h3>
                    <p className="text-slate-400 text-sm">{gradient.description}</p>
                  </header>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {gradient.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CSS Code */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-slate-300">CSS</label>
                        <CopyButton text={`background: ${gradient.css};`} />
                      </div>
                      <div className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                        <code className="text-xs text-green-400 font-mono break-all">
                          background: {gradient.css};
                        </code>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-slate-300">Tailwind</label>
                        <CopyButton text={gradient.tailwind} />
                      </div>
                      <div className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                        <code className="text-xs text-blue-400 font-mono break-all">
                          {gradient.tailwind}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SEO Content Section */}
          <section className="mt-16 bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800/50 p-8 lg:p-10">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Complete CSS Gradient Guide for Web Designers
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Master CSS gradients with our comprehensive collection of ready-to-use gradient effects. 
                From linear gradients to complex textured patterns, find the perfect gradient for your next web project.
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <article>
                  <h3 className="text-xl font-bold text-white mb-3">Linear Gradients</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Linear gradients create smooth color transitions along a straight line. Perfect for backgrounds, 
                    buttons, and hero sections. Our collection includes sunset horizons, ocean breezes, and fire bursts 
                    that work beautifully across all devices.
                  </p>
                  <div className="bg-gradient-to-r from-pink-300 via-purple-200 to-purple-200 h-16 rounded-xl border border-slate-700/50"></div>
                </article>

                <article>
                  <h3 className="text-xl font-bold text-white mb-3">Radial Gradients</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Radial gradients emanate from a central point, creating circular or elliptical color transitions. 
                    Ideal for spotlight effects, aurora glows, and solar flare designs that draw attention to specific content areas.
                  </p>
                  <div className="bg-gradient-to-br from-teal-200 to-pink-200 h-16 rounded-xl border border-slate-700/50"></div>
                </article>
              </div>

              <div className="space-y-6">
                <article>
                  <h3 className="text-xl font-bold text-white mb-3">Conic Gradients</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Conic gradients rotate around a center point, perfect for creating rainbow wheels, sunset spins, 
                    and tech radar effects. These gradients add dynamic visual interest to creative portfolios and modern interfaces.
                  </p>
                  <div className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 h-16 rounded-xl border border-slate-700/50"></div>
                </article>

                <article>
                  <h3 className="text-xl font-bold text-white mb-3">Textured Gradients</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Advanced gradient techniques including mesh gradients, glass morphism, neon glows, and holographic effects. 
                    These modern patterns are trending in 2024-2025 and perfect for cutting-edge web designs.
                  </p>
                  <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 h-16 rounded-xl border border-slate-700/50"></div>
                </article>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl">
              <h4 className="text-lg font-bold text-blue-300 mb-3">💡 Pro Tips for Using CSS Gradients</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Use subtle gradients for professional websites and bold ones for creative projects</li>
                <li>• Test gradients on different screen sizes to ensure they look good on mobile devices</li>
                <li>• Combine gradients with CSS filters for unique effects like blur and brightness</li>
                <li>• Consider accessibility - ensure text remains readable over gradient backgrounds</li>
                <li>• Use CSS custom properties to make gradients easily customizable</li>
                <li>• Optimize gradient performance by using CSS instead of background images</li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Custom Gradients?</h2>
            <p className="text-purple-100 mb-6 text-lg">
              Use our free gradient converter tool to create custom gradients and get Tailwind CSS classes instantly
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              <Palette className="w-5 h-5" />
              <span>Try Gradient Converter</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GradientLabPage;
