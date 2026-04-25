function showToast(message, type = 'info') {
  const prefix = `[${type.toUpperCase()}]`
  console.log(prefix, message)
}

export function useToast() {
  return {
    success: (message) => showToast(message, 'success'),
    error: (message) => showToast(message, 'error'),
    loading: (message) => {
      showToast(message, 'loading')
      return Date.now().toString()
    },
    dismiss: () => {},
  }
}
