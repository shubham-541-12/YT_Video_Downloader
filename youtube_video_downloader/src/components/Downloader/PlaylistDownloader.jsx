
'use client'

import { useState } from 'react'
import { Link2, Search, ListVideo, Hash, HardDrive, FileText } from 'lucide-react'
import FormatToggle from '../ui/FormatToggle'
import QualityCard from '../ui/QualityCard'
import LoadingSpinner from '../ui/LoadingSpinner'
import { useToast } from '../ui/Toast'
import { validateYouTubeURL, fetchPlaylistInfo, downloadPlaylist } from '../../lib/api'

export default function PlaylistDownloader() {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('video')
  const [isLoading, setIsLoading] = useState(false)
  const [qualities, setQualities] = useState([])
  const [playlistInfo, setPlaylistInfo] = useState(null)
  const [downloadingId, setDownloadingId] = useState(null)
  const toast = useToast()

  const handleFetch = async () => {
    if (!url.trim()) {
      toast.error('Please enter a YouTube playlist URL')
      return
    }

    const validation = validateYouTubeURL(url)
    if (!validation.isValid || !validation.isPlaylist) {
      toast.error('Invalid YouTube playlist URL')
      return
    }

    setIsLoading(true)
    setQualities([])
    setPlaylistInfo(null)

    const loadingToastId = toast.loading('Fetching playlist info...')

    try {
      const result = await fetchPlaylistInfo(url, format)
      
      toast.dismiss(loadingToastId)
      
      if (result.success) {
        setQualities(result.qualities)
        setPlaylistInfo({
          title: result.title,
          totalVideos: result.totalVideos,
          estimatedSize: result.estimatedSize
        })
        toast.success('Playlist info fetched successfully!')
      }
    } catch (error) {
      toast.dismiss(loadingToastId)
      toast.error('Failed to fetch playlist info. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async (quality) => {
    setDownloadingId(quality.id)
    toast.loading('Preparing playlist download...')
    
    try {
      const result = await downloadPlaylist('playlist-id', quality.id)
      if (result.success) {
        toast.success('Playlist download started!')
      }
    } catch (error) {
      toast.error('Download failed. Please try again.')
    } finally {
      setDownloadingId(null)
    }
  }

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat)
    setQualities([])
    setPlaylistInfo(null)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="glass rounded-3xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
            <ListVideo className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Playlist Downloader</h2>
            <p className="text-sm text-muted-foreground">Download entire YouTube playlists</p>
          </div>
        </div>

        {/* URL Input */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Link2 className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube Playlist URL here"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
          />
        </div>

        {/* Format Toggle and Fetch Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <FormatToggle format={format} onFormatChange={handleFormatChange} />
          <button
            onClick={handleFetch}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50 w-full sm:w-auto justify-center"
          >
            <Search className="w-5 h-5" />
            Fetch Playlist
          </button>
        </div>

        {/* Playlist Info */}
        {playlistInfo && (
          <div className="mb-6 p-4 rounded-2xl bg-secondary/50">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-muted-foreground mt-0.5" />
              <h3 className="font-semibold text-foreground line-clamp-2">{playlistInfo.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/50">
                <Hash className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Videos</p>
                  <p className="font-semibold text-foreground">{playlistInfo.totalVideos}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/50">
                <HardDrive className="w-4 h-4 text-green-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Estimated Size</p>
                  <p className="font-semibold text-foreground">{playlistInfo.estimatedSize}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <LoadingSpinner text="Fetching playlist information..." />
        )}

        {/* Available Qualities */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            Available Qualities
          </h3>

          {qualities.length === 0 && !isLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              <ListVideo className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Enter a YouTube playlist URL and click &quot;Fetch Playlist&quot; to see available options</p>
            </div>
          ) : (
            <div className="grid gap-3">
              {qualities.map(quality => (
                <QualityCard
                  key={quality.id}
                  quality={quality}
                  onDownload={handleDownload}
                  isDownloading={downloadingId === quality.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
