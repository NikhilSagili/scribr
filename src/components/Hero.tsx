export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white text-balance">
            Subscriptions, made simple.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">
            Launch plans with UPI AutoPay. Discover, subscribe, pause, or cancel in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="mailto:contact@scribr.app"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
            >
              Request Access
            </a>
            
            <a
              href="/privacy"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Read Privacy
            </a>
          </div>

          <div className="pt-12">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Developer Preview
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Scribr is currently in developer preview. No live payment features are available. 
                    This is a sandbox environment for testing and feedback. Contact us at{' '}
                    <a 
                      href="mailto:contact@scribr.app" 
                      className="underline hover:no-underline"
                    >
                      contact@scribr.app
                    </a>{' '}
                    for early access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
