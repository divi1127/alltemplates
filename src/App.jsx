import { useState, useEffect } from 'react';
import { websiteData } from './data/websiteData';
import UniversalTemplate from './templates/UniversalTemplate';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X } from 'lucide-react';
import { ScrollToTop } from './components/PremiumUI';

function App() {
  const [activeDomain, setActiveDomain] = useState('ecommerce');
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [loading, setLoading] = useState(true);

  const domains = Object.keys(websiteData);

  useEffect(() => {
    // Simulate loading for premium feel
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeDomain]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
              />
              <p className="font-bold tracking-widest uppercase text-xs opacity-50">Loading Experience</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <UniversalTemplate data={websiteData[activeDomain]} />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />

      {/* Template Switcher UI */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {showSwitcher && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-2xl shadow-2xl w-64 mb-4"
            >
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest opacity-60 dark:text-white">Templates</h4>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {domains.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => {
                      setActiveDomain(domain);
                      setShowSwitcher(false);
                      window.scrollTo(0, 0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeDomain === domain 
                        ? 'bg-primary text-white font-bold' 
                        : 'text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {domain.charAt(0).toUpperCase() + domain.slice(1).replace(/([A-Z])/g, ' $1')}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowSwitcher(!showSwitcher)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
        >
          {showSwitcher ? <X /> : <Settings className="animate-spin-slow" />}
        </motion.button>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          @apply bg-primary/20 rounded-full;
        }
      `}</style>
    </div>
  );
}

export default App;
