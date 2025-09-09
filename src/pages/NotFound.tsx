import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-200 dark:text-slate-700 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
            >
              Back to Home
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                to="/privacy" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:block text-gray-300 dark:text-gray-600">•</span>
              <Link 
                to="/terms" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="hidden sm:block text-gray-300 dark:text-gray-600">•</span>
              <a
                href="mailto:contact@scribr.app"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
