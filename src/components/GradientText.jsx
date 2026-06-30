export default function GradientText({ children }) {
  return (
    <span style={{
      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {children}
    </span>
  )
}
