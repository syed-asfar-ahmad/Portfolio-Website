'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHeart, FaUsers, FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import { basePath } from '@/utils/constants'

const Volunteer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const volunteerData = [
    {
      title: 'Social Media Manager',
      organization: 'Volunteers Leading Governance (VLG)',
      period: 'Jan 2024 - August 2024',
      location: 'Lahore',
      description: 'Managed VLG\'s Facebook and Instagram accounts. Posted content, handled inbox queries, and managed comments sections for local government services.',
      logo: '/images/logos/VLG.png'
    },
    {
      title: 'Complaints Representative',
      organization: 'Volunteers Leading Governance (VLG)',
      period: 'May 2023 - January 2024',
      location: 'Lahore',
      description: 'Served as local complaints representative for VLG - logged and forwarded public complaints (sanitation, water, municipal services), tracked resolutions, and coordinated with relevant authorities.',
      logo: '/images/logos/VLG.png'
    },
    {
      title: 'Zakat Campaign Fundraiser',
      organization: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
      period: 'Mar 2023 - May 2023',
      location: 'Lahore',
      description: 'Led university team of 20+ volunteers for Shaukat Khanum Hospital\'s Zakat campaign. Distributed flyers, raised awareness about cancer treatment, and collected funds for cancer patients.',
      logo: '/images/logos/SKMCH.png'
    },
    {
      title: 'Digital Campaign Volunteer',
      organization: 'Alkhidmat Foundation',
      period: 'Jul 2022 - Nov 2022',
      location: 'Online',
      description: 'Participated in digital campaigns for flood - affected communities and Palestine relief efforts. Helped collect funds through online platforms and social media awareness campaigns.',
      logo: '/images/logos/ALKHIDMAT.png'
    },
    {
      title: 'Zakat Campaign Fundraiser',
      organization: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
      period: 'Mar 2022 - May 2022',
      location: 'Lahore',
      description: 'Participated in Zakat fundraising campaign for Shaukat Khanum Hospital. Distributed awareness flyers and collected funds to support cancer patients\' treatment and care.',
      logo: '/images/logos/SKMCH.png'
    },
    {
      title: 'Fundraising Volunteer',
      organization: 'Kaavish Foundation',
      period: 'Nov 2021 - Apr 2022',
      location: 'Lahore',
      description: 'Organized fundraising campaigns for various causes including medical camps in Lahore. Collected funds for different causes like Iftari distribution during Ramadan, wedding assistance, school fees support, and other community needs.',
      logo: '/images/logos/KAAVISH.png'
    },
    {
      title: 'TCF Baghbaan Fundraiser',
      organization: 'The Citizens Foundation (TCF)',
      period: 'Sep 2021 - Dec 2021',
      location: 'Online',
      description: 'Collected funds from friends, relatives, and community members for TCF Baghbaan campaign. Raised money to support TCF schools so underprivileged children could receive quality education.',
      logo: '/images/logos/TCF.png'
    }
  ]

  return (
    <section id="volunteer" className="pt-6 pb-12 bg-white dark:bg-black mb-16">
      <div className="container mx-auto px-4 sm:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 dark:bg-gray-700 rounded-full mb-6 shadow-lg"
            >
              <FaHeart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Volunteer Work
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Making a positive impact through community service and social work
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-2 sm:top-3 bottom-0 w-0.5 bg-gray-600 dark:bg-gray-500"></div>
            
            {volunteerData.map((volunteer, index) => (
              <motion.div
                key={volunteer.title}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative mb-8 sm:mb-12 last:mb-0"
              >
                <div className="absolute left-3 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 dark:bg-gray-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                <div className="relative ml-8 sm:ml-20 bg-white dark:bg-dark-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-border overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600 dark:bg-gray-500"></div>
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className={`${volunteer.organization.includes('VLG') ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-12 sm:h-12'} relative flex-shrink-0`}>
                      <Image
                        src={`${basePath}${volunteer.logo}`}
                        alt={`${volunteer.organization} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                          {volunteer.title}
                        </h3>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 self-start">
                          {volunteer.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                        <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{volunteer.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                        <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{volunteer.organization}</span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {volunteer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Volunteer Impact Summary
              </h3>
              <p className="text-sm text-gray-600">
                Making a difference in the community
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-2">TOTAL HOURS</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-1">820+</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Across all campaigns and roles</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-2">ORGANIZATIONS</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-1">5</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">TCF, VLG, SKMCH&RC, Alkhidmat, Kaavish</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Volunteer
