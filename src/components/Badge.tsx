export function Badge() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Developer Preview • Under construction
          </div>
        </div>
      </div>
    </div>
  )
}
