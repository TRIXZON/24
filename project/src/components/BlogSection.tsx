import React from 'react';
import { BookOpen, Zap, Target, Settings, Gauge, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 lg:p-8">
      <header className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Complete Guide to CSS & Tailwind Gradients
          </h2>
        </div>
        <p className="text-gray-300">
          Everything you need to know about creating and converting gradients between CSS and Tailwind CSS
        </p>
      </header>

      <div className="space-y-8">
        {/* Section 1: What is a CSS Gradient */}
        <article className="border-l-4 border-blue-500 pl-6">
          <header className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full" aria-hidden="true"></div>
            <h3 className="text-xl font-bold text-white">1. What is a CSS Gradient?</h3>
          </header>
          <p className="text-gray-300 mb-4 leading-relaxed">
            A CSS gradient is a smooth transition between two or more colors that can be applied to backgrounds. Instead of using an image, you can create visually attractive color transitions directly using CSS like:
          </p>
          <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
            <code className="text-green-400 font-mono text-sm">
              background: linear-gradient(to right, #34d399, #3b82f6);
            </code>
          </div>
          <p className="text-gray-300 leading-relaxed">
            CSS gradients support linear, radial, and conic types, giving you full control over direction, angle, and color stops. Gradients are widely used for buttons, backgrounds, overlays, and even text effects. They help create depth and visual interest in modern web design. You can also animate gradients for dynamic effects, making your UI more engaging.
          </p>
          <p className="text-gray-300 leading-relaxed">
            For example, a linear gradient can be used to create a smooth color transition from left to right, while a radial gradient radiates from the center outward. Conic gradients, on the other hand, create a circular color sweep, which is perfect for pie charts or unique backgrounds. By combining different types of gradients, you can achieve a wide range of visual effects that enhance the user experience and make your website stand out.
          </p>
        </article>

        {/* Section 2: How to Convert */}
        <article className="border-l-4 border-emerald-500 pl-6">
          <header className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" aria-hidden="true"></div>
            <h3 className="text-xl font-bold text-white">2. How to Convert a CSS Gradient to Tailwind?</h3>
          </header>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tailwind CSS doesn't use traditional CSS syntax — instead, it uses utility classes. So to convert a normal CSS gradient like:
          </p>
          <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
            <code className="text-green-400 font-mono text-sm">
              background: linear-gradient(to right, #34d399, #3b82f6);
            </code>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">Into Tailwind, you would write:</p>
          <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-700">
            <code className="text-blue-400 font-mono text-sm">
              &lt;div class="bg-gradient-to-r from-emerald-400 to-blue-500"&gt;&lt;/div&gt;
            </code>
          </div>
          <div className="bg-blue-900/30 border-2 border-blue-500/50 rounded-xl p-4 mb-4">
            <p className="text-blue-300 font-medium">
              💡 Our tool automates this conversion for you — just paste your CSS, and get the Tailwind class instantly!
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed">
            When converting, pay attention to the direction (to right, to left, etc.) and color stops. Tailwind uses a set of predefined color tokens, so you may need to pick the closest match to your original CSS colors. For more complex gradients, you can extend Tailwind’s config or use custom utilities. This approach keeps your codebase consistent and easy to maintain.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you are working on a large project, using Tailwind’s utility classes for gradients can help you maintain a consistent design language across all your components. You can also combine gradient classes with other Tailwind utilities, such as opacity, hover states, and responsive breakpoints, to create interactive and adaptive designs. This flexibility is one of the reasons why Tailwind is so popular among modern frontend developers.
          </p>
        </article>

        {/* Section 3: Common Classes */}
        <article className="border-l-4 border-purple-500 pl-6">
          <header className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full" aria-hidden="true"></div>
            <h3 className="text-xl font-bold text-white">3. Common Tailwind Gradient Classes</h3>
          </header>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tailwind provides several utilities to build gradients:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-gray-700 border-2 border-gray-600 rounded-xl p-4">
              <code className="text-purple-400 font-mono text-sm font-bold">bg-gradient-to-r</code>
              <p className="text-gray-300 text-sm mt-1">Linear gradient to the right</p>
            </div>
            <div className="bg-gray-700 border-2 border-gray-600 rounded-xl p-4">
              <code className="text-purple-400 font-mono text-sm font-bold">bg-gradient-to-l</code>
              <p className="text-gray-300 text-sm mt-1">Linear gradient to the left</p>
            </div>
            <div className="bg-gray-700 border-2 border-gray-600 rounded-xl p-4">
              <code className="text-purple-400 font-mono text-sm font-bold">from-blue-500</code>
              <p className="text-gray-300 text-sm mt-1">Start color</p>
            </div>
            <div className="bg-gray-700 border-2 border-gray-600 rounded-xl p-4">
              <code className="text-purple-400 font-mono text-sm font-bold">via-pink-400</code>
              <p className="text-gray-300 text-sm mt-1">Mid color (optional)</p>
            </div>
            <div className="bg-gray-700 border-2 border-gray-600 rounded-xl p-4 sm:col-span-2">
              <code className="text-purple-400 font-mono text-sm font-bold">to-purple-600</code>
              <p className="text-gray-300 text-sm mt-1">End color</p>
            </div>
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            You can mix these to build any gradient combination you want. For best results, use Tailwind’s color palette for consistency across your project. If you need more control, you can add custom colors or directions in your Tailwind config. Gradients can be combined with opacity, hover, and responsive classes for even more flexibility. Experiment with different combinations to create unique effects that match your brand or design system.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Remember, gradients are not just for backgrounds. You can apply them to text, borders, and even icons using Tailwind’s utilities. Try using <code className="text-purple-400 font-mono text-sm font-bold">bg-clip-text</code> and <code className="text-purple-400 font-mono text-sm font-bold">text-transparent</code> to create beautiful gradient text effects. With a little creativity, gradients can help your site look modern and professional while remaining lightweight and fast.
          </p>
        </article>

        {/* Section 4: Why Use Tailwind */}
        <article className="border-l-4 border-orange-500 pl-6">
          <header className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full" aria-hidden="true"></div>
            <h3 className="text-xl font-bold text-white">4. Why Use Tailwind Gradient Classes?</h3>
          </header>
          <p className="text-gray-300 mb-4 leading-relaxed">Using Tailwind gradient classes helps you:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start space-x-3 bg-green-900/30 border-2 border-green-500/50 rounded-xl p-4">
              <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-green-300">Write faster code</p>
                <p className="text-green-400 text-sm">No need to write raw CSS</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-blue-900/30 border-2 border-blue-500/50 rounded-xl p-4">
              <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-blue-300">Maintain design consistency</p>
                <p className="text-blue-400 text-sm">Across your UI</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-4">
              <Settings className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-purple-300">Easily customize</p>
                <p className="text-purple-400 text-sm">With Tailwind config</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-indigo-900/30 border-2 border-indigo-500/50 rounded-xl p-4">
              <Gauge className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-indigo-300">Responsive, utility-first UIs</p>
                <p className="text-indigo-400 text-sm">That work everywhere</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-900/30 border-2 border-orange-500/50 rounded-xl p-4 mt-4">
            <p className="text-orange-300 font-medium">
              🎯 It's ideal for devs who love structure but want creativity too.
            </p>
          </div>
        </article>

        {/* Section 5: Comparison Table */}
        <article className="border-l-4 border-red-500 pl-6">
          <header className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true"></div>
            <h3 className="text-xl font-bold text-white">5. Tailwind vs CSS for Gradients</h3>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-gray-600 rounded-xl overflow-hidden">
              <caption className="sr-only">Comparison between Tailwind and CSS for gradients</caption>
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-bold text-gray-200 border-b-2 border-gray-600">Feature</th>
                  <th scope="col" className="px-4 py-3 text-center font-bold text-gray-200 border-b-2 border-gray-600">Tailwind</th>
                  <th scope="col" className="px-4 py-3 text-center font-bold text-gray-200 border-b-2 border-gray-600">Plain CSS</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                <tr className="border-b border-gray-600">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-200 text-left">Easy to use</th>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Yes</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 font-medium">Requires writing rules</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-200 text-left">Design consistency</th>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Predefined tokens</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 font-medium">Manual color picking</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-200 text-left">Flexibility</th>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-300 font-medium">Limited by config</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Total freedom</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-200 text-left">Speed</th>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Utility-first</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 font-medium">Slower setup</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-200 text-left">Customization</th>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Via Tailwind config</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">Unlimited via CSS</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 border-2 border-gray-600 rounded-xl p-4 mt-4">
            <p className="text-gray-200 font-bold text-center">
              🧠 Verdict: Use Tailwind for fast development and CSS for full control.
            </p>
          </div>
        </article>
      </div>
      {/* Tool Info Section: Added at the bottom of the blog */}
      <div className="mt-12 p-6 bg-slate-900/80 rounded-2xl border border-slate-700/60">
        <h3 className="text-xl font-bold text-white mb-4 text-center">About the Gradient Converter Tool</h3>
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-base text-slate-200">
            Tailwind CSS is one of the most popular utility-first CSS frameworks used by developers today. If you work with gradients in raw CSS, converting them manually to Tailwind can be tricky. That’s why this tool exists—to help you instantly convert CSS gradients into Tailwind-compatible classes.
          </p>
          <p className="text-base text-slate-200">
            Whether you're designing with linear, radial, or conic gradients, this tool makes it simple. Just paste your CSS, and you get production-ready Tailwind code with no setup, no login, and completely free.
          </p>
          <p className="text-base text-slate-200">
            Perfect for frontend developers, Tailwind users, and designers who want speed and consistency in their projects. It's ideal for quickly testing styles or generating classes for production apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
