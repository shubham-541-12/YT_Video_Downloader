export default function QualityCard({ quality, onDownload, isDownloading }) {
  const label = quality?.label || quality?.quality || quality?.id || 'Unknown'
  const size = quality?.size || 'N/A'

  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4 py-3">
      <div>
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">Estimated size: {size}</p>
      </div>
      <button
        type="button"
        onClick={() => onDownload(quality)}
        disabled={isDownloading}
        className="rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isDownloading ? 'Downloading...' : 'Download'}
      </button>
    </div>
  )
}
