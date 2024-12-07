import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DataVisualizationProps {
  activeSection: string
}

const generateData = (type: string) => {
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
  return months.map((month) => {
    let value = Math.random() * 100
    if (type === 'temperature') {
      value = 15 + Math.random() * 10 // Température entre 15 et 25°C
    } else if (type === 'pollution') {
      value = 200 + Math.random() * 100 // Pollution entre 200 et 300 ppm
    } else {
      value = 1 + Math.random() * 3 // Vitesse des courants entre 1 et 4 m/s
    }
    return {
      month,
      value: Number(value.toFixed(1))
    }
  })
}

export function DataVisualization({ activeSection }: DataVisualizationProps) {
  const data = generateData(activeSection)

  const getYAxisLabel = () => {
    switch (activeSection) {
      case 'temperature':
        return 'Température (°C)'
      case 'pollution':
        return 'Pollution (ppm)'
      case 'currents':
        return 'Vitesse (m/s)'
      default:
        return ''
    }
  }

  const getChartColor = () => {
    switch (activeSection) {
      case 'temperature':
        return '#f97316'
      case 'pollution':
        return '#d946ef'
      case 'currents':
        return '#0ea5e9'
      default:
        return '#60a5fa'
    }
  }

  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis
            dataKey="month"
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
            label={{
              value: getYAxisLabel(),
              angle: -90,
              position: 'insideLeft',
              fill: '#94a3b8'
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#fff'
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={getChartColor()}
            strokeWidth={3}
            dot={{ fill: getChartColor() }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
} 