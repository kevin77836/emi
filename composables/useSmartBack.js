export default function useSmartBack() {
  const router = useRouter()
  const smartBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/resource')
    }
  }

  return smartBack
}
