import { motion } from 'framer-motion';

export default function WeldedBlock({ words, color = '#0070f3', fontSize = 14 }) {
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0,
        background: `${color}10`,
        border: `2px solid ${color}`,
        borderRadius: 8,
        padding: '4px 2px',
        position: 'relative',
      }}
    >
      {/* welded indicator brackets */}
      <div style={{
        position: 'absolute', top: -1, left: -1, bottom: -1, width: 6,
        borderLeft: `3px solid ${color}`, borderTop: `3px solid ${color}`, borderBottom: `3px solid ${color}`,
        borderRadius: '8px 0 0 8px',
      }} />
      <div style={{
        position: 'absolute', top: -1, right: -1, bottom: -1, width: 6,
        borderRight: `3px solid ${color}`, borderTop: `3px solid ${color}`, borderBottom: `3px solid ${color}`,
        borderRadius: '0 8px 8px 0',
      }} />

      {words.map((word, i) => (
        <span key={i} style={{
          padding: '2px 5px',
          fontSize,
          fontWeight: 700,
          color,
          letterSpacing: '0.5px',
          borderRight: i < words.length - 1 ? `1px dashed ${color}40` : 'none',
        }}>
          {word}
        </span>
      ))}

      {/* lock icon */}
      <span style={{
        position: 'absolute', top: -8, right: -6,
        fontSize: 10, opacity: 0.7,
      }}>
        🔗
      </span>
    </motion.div>
  );
}

export function AdverbWeldedBlock({ phrase, color = '#7b1fa2' }) {
  const words = phrase.split(' ');
  return <WeldedBlock words={words} color={color} fontSize={12} />;
}

export function ThreeWordPhrasalBlock({ verb, particle, preposition, color = '#0070f3' }) {
  return <WeldedBlock words={[verb, particle, preposition]} color={color} />;
}
