export default function FormatToggle({ format, onFormatChange }) {
  return (
    <div className="inline-flex rounded-xl border border-border bg-background/60 p-1">
      <button
        type="button"
        onClick={() => onFormatChange('video')}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          format === 'video'
            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Video
      </button>
      <button
        type="button"
        onClick={() => onFormatChange('audio')}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          format === 'audio'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Audio
      </button>
    </div>
  )
}
