import '@/styles/loading.css'

const Loading = () => {
  return (
    <div className='loading-animation text-center'>
      <span style={{animationDelay: '0s'}}>L</span>
      <span style={{animationDelay: '0.2s'}}>O</span>
      <span style={{animationDelay: '0.4s'}}>A</span>
      <span style={{animationDelay: '0.6s'}}>D</span>
      <span style={{animationDelay: '0.8s'}}>I</span>
      <span style={{animationDelay: '1s'}}>N</span>
      <span style={{animationDelay: '1.2s'}}>G</span>
    </div>
  )
}

export default Loading