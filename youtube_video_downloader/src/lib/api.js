export function validateYouTubeURL(url) {
  const value = (url || '').trim()
  const isValid = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(value)
  const isPlaylist = /[?&]list=/.test(value)
  const isVideo = isValid && !isPlaylist

  return { isValid, isVideo, isPlaylist }
}

export async function fetchVideoQualities() {
  return Promise.resolve({
    success: true,
    title: 'Sample Video Title',
    duration: '05:12',
    thumbnail: '',
    qualities: [
      { id: '1080p', label: '1080p MP4', size: '120 MB' },
      { id: '720p', label: '720p MP4', size: '70 MB' },
      { id: 'audio', label: 'Audio MP3', size: '8 MB' },
    ],
  })
}

export async function fetchPlaylistInfo() {
  return Promise.resolve({
    success: true,
    title: 'Sample Playlist',
    totalVideos: 12,
    estimatedSize: '1.8 GB',
    qualities: [
      { id: '1080p', label: '1080p MP4', size: '1.8 GB' },
      { id: '720p', label: '720p MP4', size: '980 MB' },
      { id: 'audio', label: 'Audio MP3', size: '140 MB' },
    ],
  })
}

export async function downloadVideo() {
  return Promise.resolve({ success: true })
}

export async function downloadPlaylist() {
  return Promise.resolve({ success: true })
}
