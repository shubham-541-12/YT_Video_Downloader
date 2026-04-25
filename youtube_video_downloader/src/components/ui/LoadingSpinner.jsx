export default function LoadingSpinner({ text = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-secondary/40 p-6">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}
