export function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-border"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-accent border-t-white"></div>
        </div>
        <p className="text-sm text-muted-foreground">لطفا صبر کنید...</p>
      </div>
    </div>
  )
}
