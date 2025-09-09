export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-soft-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to simplify subscriptions?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the future of recurring payments in India.
            </p>
            <a
              href="mailto:contact@scribr.app"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1"
            >
              Request Access
            </a>
            <p className="text-sm text-slate-400 mt-6">
              No spam, just updates on our progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
