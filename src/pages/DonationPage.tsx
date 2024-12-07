import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, CreditCard, DollarSign, Shield, Award, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react'

const donationTiers = [
  {
    amount: 5,
    title: "Donateur Bronze",
    description: "Protégez 100m² d'océan",
    perks: ["Badge donateur", "Newsletter mensuelle"],
    color: "from-amber-600 to-amber-700"
  },
  {
    amount: 15,
    title: "Donateur Argent",
    description: "Protégez 500m² d'océan",
    perks: ["Badge donateur", "Newsletter mensuelle", "Rapport d'impact trimestriel"],
    color: "from-blue-500 to-cyan-500",
    recommended: true
  },
  {
    amount: 30,
    title: "Donateur Or",
    description: "Protégez 1000m² d'océan",
    perks: ["Badge donateur", "Newsletter mensuelle", "Rapport d'impact trimestriel", "Certificat personnalisé"],
    color: "from-yellow-500 to-orange-500"
  }
]

const impactMetrics = [
  {
    icon: Globe,
    value: "12,450",
    label: "m² d'océan protégés"
  },
  {
    icon: Users,
    value: "2,380",
    label: "Donateurs actifs"
  },
  {
    icon: Award,
    value: "45",
    label: "Projets financés"
  }
]

export function DonationPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [showPayment, setShowPayment] = useState(false)

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
            <Heart className="w-4 h-4 mr-2" />
            Faire un don
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
            Soutenez la Protection des Océans
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Votre don aide à préserver les écosystèmes marins et à soutenir la recherche océanographique.
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
            >
              <metric.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-blue-200">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {!showPayment ? (
          <>
            {/* Donation Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${selectedTier === index ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommandé
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedTier(index)}
                    className={`w-full h-full bg-white/10 backdrop-blur-md rounded-2xl p-8 text-left transition-all duration-300 hover:bg-white/20 ${
                      selectedTier === index ? 'bg-white/20' : ''
                    }`}
                  >
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-white mb-4 bg-gradient-to-r ${tier.color}`}>
                      {tier.amount}€ / mois
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                    <p className="text-blue-200 mb-6">{tier.description}</p>
                    <div className="space-y-3">
                      {tier.perks.map((perk, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-100">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="max-w-md mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Montant personnalisé</h3>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Entrez un montant"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => setShowPayment(true)}
                disabled={!selectedTier && !customAmount}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Continuer vers le paiement
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </>
        ) : (
          // Formulaire de paiement sécurisé
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Paiement sécurisé</h2>
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              
              {/* Formulaire de paiement */}
              <form className="space-y-6">
                <div>
                  <label className="block text-blue-200 mb-2">Nom du titulaire</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2">Numéro de carte</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
                    placeholder="4242 4242 4242 4242"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-200 mb-2">Date d'expiration</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 mb-2">CVC</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Faire un don de {selectedTier !== null ? `${donationTiers[selectedTier].amount}€` : `${customAmount}€`}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowPayment(false)}
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  Retour
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8">
            <Shield className="w-8 h-8 text-blue-400" />
            <CreditCard className="w-8 h-8 text-blue-400" />
            <Heart className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-blue-200 mt-4">
            Paiement 100% sécurisé • Protection des données • Impact vérifié
          </p>
        </div>
      </div>
    </motion.div>
  )
} 