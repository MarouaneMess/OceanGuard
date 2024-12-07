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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
              {/* Effet de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl animate-pulse" />

              {donationTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative pt-8 group ${
                    tier.recommended ? 'md:scale-105 z-10' : ''
                  }`}
                >
                  {tier.recommended && (
                    <>
                      {/* Badge Recommandé repositionné */}
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute -top-0  transform -translate-x-1/2 z-20 w-full flex justify-center"
                      >
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg border border-white/20 backdrop-blur-sm flex items-center gap-2 whitespace-nowrap">
                          <span className="animate-pulse">⭐</span>
                          Recommandé
                          <span className="animate-pulse">⭐</span>
                        </span>
                      </motion.div>
                      
                      {/* Effet de halo ajusté */}
                      <div className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse" />
                    </>
                  )}

                  <button
                    onClick={() => {
                      // Toggle de sélection
                      if (selectedTier === index) {
                        setSelectedTier(null)
                      } else {
                        setSelectedTier(index)
                      }
                    }}
                    className={`w-full h-full relative overflow-hidden group transition-all duration-300 ${
                      selectedTier === index
                        ? 'ring-2 ring-blue-500 bg-white/15 transform scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/15'
                    } backdrop-blur-md rounded-2xl p-8 text-left shadow-xl hover:shadow-2xl`}
                  >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Badge de prix avec gradient et animation */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-white mb-6 bg-gradient-to-r ${tier.color} shadow-lg relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 transform -translate-x-full hover:translate-x-full transition-transform duration-700" />
                      <span className="text-2xl font-bold relative z-10">{tier.amount}€</span>
                      <span className="ml-1 text-white/80 text-sm relative z-10">/mois</span>
                    </motion.div>

                    {/* Titre et description avec animations */}
                    <div className="relative">
                      <motion.h3 
                        whileHover={{ x: 5 }}
                        className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors"
                      >
                        {tier.title}
                      </motion.h3>
                      <p className="text-blue-200 mb-6 text-sm leading-relaxed">
                        {tier.description}
                      </p>

                      {/* Liste des avantages avec animations */}
                      <div className="space-y-4">
                        {tier.perks.map((perk, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-3 text-sm group/perk"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover/perk:bg-blue-500/30 transition-colors">
                              <CheckCircle className="w-4 h-4 text-blue-400 group-hover/perk:text-blue-300" />
                            </div>
                            <span className="text-blue-100 group-hover/perk:text-white transition-colors">
                              {perk}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bouton de sélection modifié */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`mt-8 py-3 px-4 rounded-xl text-center transition-all duration-300 ${
                        selectedTier === index
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-white/10 text-blue-200 group-hover:bg-white/20'
                      }`}
                    >
                      {selectedTier === index ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                         Selectionné
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Choisir cette option
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </motion.div>

                    {/* Effet de bordure brillante pour l'option recommandée */}
                    {tier.recommended && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse -z-10" />
                    )}
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