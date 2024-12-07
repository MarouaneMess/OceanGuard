import { motion } from 'framer-motion'
import { Users, MessageCircle, Share2, Award, Target, Calendar, ArrowRight, Globe, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const communityStats = [
  { icon: Users, value: '2,450+', label: 'Membres actifs' },
  { icon: MessageCircle, value: '15,230+', label: 'Discussions' },
  { icon: Share2, value: '850+', label: 'Partages' }
]

const upcomingEvents = [
  {
    title: "Nettoyage des plages",
    date: "25 Juin 2024",
    location: "Marseille",
    participants: 45,
    image: "/images/beach-cleanup.jpg"
  },
  {
    title: "Conférence océanique",
    date: "2 Juillet 2024",
    location: "En ligne",
    participants: 120,
    image: "/images/conference.jpg"
  },
  {
    title: "Atelier de sensibilisation",
    date: "15 Juillet 2024",
    location: "Paris",
    participants: 30,
    image: "/images/workshop.jpg"
  }
]

const communityHighlights = [
  {
    title: "Groupes thématiques",
    description: "Rejoignez des groupes spécialisés selon vos intérêts",
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Événements réguliers",
    description: "Participez à nos actions et rencontres mensuelles",
    icon: Calendar,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Programme de récompenses",
    description: "Gagnez des badges et reconnaissance pour vos contributions",
    icon: Award,
    color: "from-orange-500 to-red-500"
  }
]

export function CommunityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 mb-4">
            <Users className="w-4 h-4 mr-2" />
            Notre Communauté
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Rejoignez le Mouvement Océanique
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Ensemble, créons un impact positif pour nos océans à travers des actions concrètes et le partage de connaissances.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Événements à venir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden group hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-blue-500/20 relative overflow-hidden">
                  {/* Image de l'événement */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm bg-black/50 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                      <span className="text-sm bg-black/50 px-3 py-1 rounded-full flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-blue-200 mb-4 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                  <button className="w-full py-2 px-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl text-blue-300 transition-colors flex items-center justify-center group">
                    Participer
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 group hover:bg-white/15 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} mb-6`}>
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-blue-200">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-16"
        >
          <Heart className="w-12 h-12 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à faire partie de l'aventure ?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Rejoignez une communauté passionnée et engagée pour la protection des océans.
            Ensemble, nous pouvons faire la différence.
          </p>
          <Link
            to="/community"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            <span>Rejoindre la communauté</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
} 