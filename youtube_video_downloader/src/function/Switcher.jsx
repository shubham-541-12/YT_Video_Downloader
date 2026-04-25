export default function Switcher({ activeTab, onTabChange }) {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => onTabChange('video')}
        className={`w-1/2 rounded-xl px-4 py-3 font-medium transition ${
          activeTab === 'video'
            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Video Downloader
      </button>
      <button
        type="button"
        onClick={() => onTabChange('playlist')}
        className={`w-1/2 rounded-xl px-4 py-3 font-medium transition ${
          activeTab === 'playlist'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Playlist Downloader
      </button>
    </div>
  )
}
