const useClickOutside = (ref, onClickOutside) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (onClickOutside) {
        onClickOutside(ref.current)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }

  return handleClickOutside
}

export default useClickOutside
