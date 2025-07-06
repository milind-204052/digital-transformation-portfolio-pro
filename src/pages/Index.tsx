
import { Mail, Phone, MapPin, Download, ExternalLink, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const keyMetrics = [
    { label: "Portfolio Managed", value: "$500M", icon: "💼" },
    { label: "Years Experience", value: "10+", icon: "📈" },
    { label: "Cost Savings", value: "$540K+", icon: "💰" },
    { label: "Global Reach", value: "90+ Cities", icon: "🌍" },
    { label: "TESTTTT", value: "TEST", icon: "OOOOO" },
  ];

  const experiences = [
    {
      company: "Dover Corporation VSG",
      period: "January'22 – April'25",
      role: "Program Manager – Digital Transformation, Central PMO",
      roleDescription: "Led digital transformation initiatives across Fortune 500 multinational divisions, managing complex ERP implementations, automation projects, and strategic technology adoptions. Collaborated with C-suite executives, cross-functional teams, and external vendors to deliver scalable solutions impacting $500M+ portfolio operations.",
      achievements: [
        {
          title: "Saved 240k USD by automating billing system",
          description: "Automated the billing process using SaaS based RPA tool - ARIA for equipment purchases, license renewals, and contract subscriptions for over 8,000 customers globally, $500 Million portfolio managed",
          skillsUsed: ["ARIA RPA", "Process Automation", "Stakeholder Management", "Project Planning"],
          toolsUsed: ["ARIA Platform", "MS Project", "Jira", "Confluence"],
          expertise: { "ARIA RPA": "Expert", "Process Automation": "Advanced", "Stakeholder Management": "Expert", "Project Planning": "Expert" }
        },
        {
          title: "17% reduction in Sales expense with Oracle ERP",
          description: "Led Oracle Fusion Cloud ERP implementation across seven multinational divisions, driving a 60% improvement in sales by collaborating with 40+ stakeholders, external consultant, and product team. Total revenue increased by 10%. Project valuation: $1.2 million",
          skillsUsed: ["Oracle Fusion Cloud", "ERP Implementation", "Change Management", "Business Analysis"],
          toolsUsed: ["Oracle Fusion Cloud", "MS Project", "SharePoint", "Power BI"],
          expertise: { "Oracle Fusion Cloud": "Expert", "ERP Implementation": "Advanced", "Change Management": "Expert", "Business Analysis": "Advanced" }
        },
        {
          title: "Eliminated 43% of false warranty claims in Salesforce",
          description: "Enhanced the CRM workflows, improving claim verification for 7,000+ equipment records, and reducing operational inefficiencies",
          skillsUsed: ["Salesforce CRM", "Workflow Optimization", "Data Analysis", "Process Excellence"],
          toolsUsed: ["Salesforce", "SQL", "Excel", "Power BI"],
          expertise: { "Salesforce CRM": "Advanced", "Workflow Optimization": "Expert", "Data Analysis": "Advanced", "Process Excellence": "Expert" }
        },
        {
          title: "Saved 150k USD on Payment Gateway launch",
          description: "Introduced PayTrace –Payment Gateway, achieving PCI compliance, streamlined payment and refunds process. Savings - $150k Platform charges and 4000+ manhours in a year",
          skillsUsed: ["Payment Gateway Integration", "PCI Compliance", "Risk Management", "Vendor Management"],
          toolsUsed: ["PayTrace", "Security Tools", "Compliance Frameworks"],
          expertise: { "Payment Gateway Integration": "Advanced", "PCI Compliance": "Intermediate", "Risk Management": "Advanced", "Vendor Management": "Expert" }
        },
        {
          title: "Implemented PIM platform targeting 20% sales increase",
          description: "Directed the end-to-end implementation of a Product Information Management (PIM) platform, consolidating over 65,000 digital assets onto a unified platform. Project valuation: $1.8 million",
          skillsUsed: ["PIM Implementation", "Digital Asset Management", "Product Management", "System Integration"],
          toolsUsed: ["PIM Platform", "Digital Asset Tools", "Integration APIs"],
          expertise: { "PIM Implementation": "Advanced", "Digital Asset Management": "Expert", "Product Management": "Advanced", "System Integration": "Advanced" }
        }
      ]
    },
    {
      company: "OLA ANI Technology Private Limited",
      period: "May'21 to January'22",
      role: "Project Manager – Strategic Initiatives, OLA Cabs",
      roleDescription: "Spearheaded strategic expansion initiatives for India's leading ride-hailing platform, focusing on market penetration in tier-2 and tier-3 cities. Led cross-functional teams to execute large-scale operational improvements, safety enhancements, and pandemic response measures affecting millions of users nationwide.",
      achievements: [
        {
          title: "10% revenue increase scaling Bike Taxis",
          description: "Directed the up scaling operational growth of 2W from active 50 cities to 90 cities across India for revenue increase in Bike Taxi segment in tier-2 and tier-3 cities",
          skillsUsed: ["Market Expansion", "Operations Scaling", "Revenue Growth", "Regional Strategy"],
          toolsUsed: ["Analytics Tools", "Operations Dashboard", "Market Research Tools"],
          expertise: { "Market Expansion": "Expert", "Operations Scaling": "Advanced", "Revenue Growth": "Advanced", "Regional Strategy": "Expert" }
        },
        {
          title: "4% market share increase & 80% vaccinated driver rides",
          description: "Collected and verified 450,000+ vaccination certificates, displaying driver vaccination status in the customer UI that enhanced trust to boost ride bookings. Project valuation: ₹ 8 crores",
          skillsUsed: ["Data Verification", "UI/UX Enhancement", "Trust Building", "Large Scale Operations"],
          toolsUsed: ["Verification Systems", "Mobile App Platforms", "Database Management"],
          expertise: { "Data Verification": "Advanced", "UI/UX Enhancement": "Intermediate", "Trust Building": "Expert", "Large Scale Operations": "Expert" }
        },
        {
          title: "Distributed 770 Oxygen Concentrators",
          description: "Executed the distribution of OCs across 10 Tier-1 cities with the support of 'Give India' (govt affiliated supplier of OCs) and Shadowfax Logistics during the second wave of COVID-19",
          skillsUsed: ["Crisis Management", "Logistics Coordination", "Government Relations", "Emergency Response"],
          toolsUsed: ["Logistics Management Systems", "Tracking Tools", "Communication Platforms"],
          expertise: { "Crisis Management": "Expert", "Logistics Coordination": "Advanced", "Government Relations": "Advanced", "Emergency Response": "Expert" }
        }
      ]
    },
    {
      company: "Reliance Industries Limited",
      period: "October'12 to January'19",
      role: "Manager – Planning",
      roleDescription: "Managed large-scale EPC project planning and execution for India's largest conglomerate, overseeing electrical system commissioning projects worth ₹500+ crores. Led SAP ERP implementation initiatives covering thousands of equipment pieces and inventory items, ensuring operational continuity and preventing production shutdowns.",
      achievements: [
        {
          title: "EPC Project Coordination",
          description: "Coordinated planning proposals, directly managed schedules, material resources, and project closure documentation for commissioning the electrical system of an EPC project valued at approximately ₹510 crore in 2017",
          skillsUsed: ["EPC Project Management", "Resource Planning", "Schedule Management", "Documentation"],
          toolsUsed: ["MS Project", "SAP", "Engineering Tools", "Documentation Systems"],
          expertise: { "EPC Project Management": "Expert", "Resource Planning": "Advanced", "Schedule Management": "Expert", "Documentation": "Advanced" }
        },
        {
          title: "Saved ₹5 Crore - SAP ERP Implementation",
          description: "Actively participated in planning & implementing the SAP ECC PM & MM modules to manage over Operations for 5,000 pieces of equipment & 20,000+ inventory items, prevented 10+ total shutdown losses",
          skillsUsed: ["SAP ECC", "Plant Maintenance", "Materials Management", "Inventory Optimization"],
          toolsUsed: ["SAP ECC", "Inventory Management Systems", "Maintenance Tools"],
          expertise: { "SAP ECC": "Advanced", "Plant Maintenance": "Expert", "Materials Management": "Advanced", "Inventory Optimization": "Expert" }
        }
      ]
    }
  ];

  const skills = {
    "Technical Skills": [
      { name: "Oracle Fusion Cloud", level: "Expert" },
      { name: "SAP ECC", level: "Advanced" },
      { name: "Salesforce", level: "Advanced" },
      { name: "Power BI", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "R Studio", level: "Intermediate" },
      { name: "MS Projects", level: "Expert" },
      { name: "Jira", level: "Expert" },
      { name: "Confluence", level: "Advanced" }
    ],
    "Methodologies": [
      { name: "Agile & SDLC", level: "Expert" },
      { name: "Lean Six Sigma", level: "Advanced" },
      { name: "Risk Management", level: "Advanced" },
      { name: "Change Management", level: "Expert" },
      { name: "Process Excellence", level: "Expert" },
      { name: "UAT Planning", level: "Advanced" }
    ],
    "Leadership": [
      { name: "Stakeholder Management", level: "Expert" },
      { name: "Cross Functional Collaboration", level: "Expert" },
      { name: "Product Management", level: "Advanced" },
      { name: "Business Analysis", level: "Advanced" },
      { name: "Budgeting & KPIs", level: "Expert" }
    ]
  };

  const certifications = [
    "Project Management Professional (PMP) by PMI",
    "Certified Scrum Master (CSM) by Scrum Alliance",
    "Lean Six Sigma Green Belt by KPMG"
  ];

  const getExpertiseColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-300";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 transition-all duration-300 hover:text-blue-600">
              Milind Baranwal
            </h1>
            <div className="flex gap-2 sm:gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="transform transition-all duration-200 hover:scale-105 hover:shadow-md"
              >
                <Download className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Download </span>CV
              </Button>
              <Button 
                size="sm"
                className="transform transition-all duration-200 hover:scale-105 hover:shadow-md"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        data-section
        className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Professional Info */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Digital Transformation
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Leader</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  Led multi-million-dollar ERP, automation, and strategic transformation initiatives, managing a $500M global portfolio across Fortune 500 firms, covering both B2B & B2C sectors in the US and Europe markets.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm transform transition-all duration-200 hover:scale-105 hover:shadow-md">
                  $500M Portfolio Managed
                </Badge>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm transform transition-all duration-200 hover:scale-105 hover:shadow-md">
                  Global Program Leader
                </Badge>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm transform transition-all duration-200 hover:scale-105 hover:shadow-md">
                  Digital Transformation
                </Badge>
              </div>
            </div>

            {/* Photo and Personal Details Side by Side */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 order-1 lg:order-2">
              {/* Professional Photo */}
              <div className="relative group flex-shrink-0">
                <div className="w-48 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-slate-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl border-4 border-black">
                  <img 
                    src="/lovable-uploads/58397a47-003c-4816-b499-c979e8318efc.png" 
                    alt="Milind Baranwal - Professional Photo"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-lg font-bold">10+</span>
                  <span className="text-xs absolute bottom-1">Years</span>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 text-slate-600 animate-fade-in flex-1" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm break-all">Baranwal.milind@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm">+91-7000141541</span>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <MapPin className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    DivyaSree Republic of Whitefield, EPIP Zone, Vydehi Bengaluru - 560066
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button 
            onClick={() => scrollToSection('metrics')}
            className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Key Metrics */}
      <section 
        id="metrics" 
        data-section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/50"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12 animate-fade-in">
            Key Achievements
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {keyMetrics.map((metric, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-4 sm:pt-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-base text-slate-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section 
        id="experience" 
        data-section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12 animate-fade-in">
            Professional Experience
          </h3>
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="group-hover:bg-slate-50/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg font-medium text-blue-600 mt-1 group-hover:text-blue-700 transition-colors duration-300">
                        {exp.role}
                      </CardDescription>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                        {exp.roleDescription}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs sm:text-sm whitespace-nowrap transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {exp.achievements.map((achievement, idx) => (
                      <div 
                        key={idx} 
                        className="border-l-4 border-blue-200 pl-6 animate-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                      >
                        <h4 className="font-semibold text-slate-900 mb-2">{achievement.title}</h4>
                        <p className="text-sm text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-xs font-medium text-slate-600 mb-2">Skills Applied:</h5>
                            <div className="flex flex-wrap gap-2">
                              {achievement.skillsUsed.map((skill, skillIdx) => (
                                <Badge 
                                  key={skillIdx}
                                  className={`text-xs ${getExpertiseColor(achievement.expertise[skill] || 'Intermediate')} border`}
                                >
                                  {skill} ({achievement.expertise[skill] || 'Intermediate'})
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-xs font-medium text-slate-600 mb-2">Tools & Technologies:</h5>
                            <div className="flex flex-wrap gap-2">
                              {achievement.toolsUsed.map((tool, toolIdx) => (
                                <Badge 
                                  key={toolIdx}
                                  variant="outline"
                                  className="text-xs bg-slate-50 hover:bg-slate-100 transition-colors"
                                >
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section 
        id="skills" 
        data-section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <Card 
                    key={category}
                    className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg text-slate-900">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {skillList.map((skill, idx) => (
                          <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                            <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                            <Badge 
                              className={`text-xs ${getExpertiseColor(skill.level)} border`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications & Education */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Certifications</h3>
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {certifications.map((cert, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 group animate-fade-in"
                          style={{ animationDelay: `${0.4 + (idx * 0.1)}s` }}
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="text-sm sm:text-base text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                            {cert}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Education</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <CardContent className="pt-6">
                      <div className="font-semibold text-slate-900">PGPM – Operations & Analytics</div>
                      <div className="text-blue-600">Great Lakes Institute of Management, Chennai</div>
                      <div className="text-sm text-slate-600">2019 - 2020</div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <CardContent className="pt-6">
                      <div className="font-semibold text-slate-900">B.Tech. – Electrical Engineering</div>
                      <div className="text-blue-600">National Institute of Technology, Raipur</div>
                      <div className="text-sm text-slate-600">2008 - 2012</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        id="contact" 
        data-section
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-xl sm:text-2xl font-bold mb-4">Ready to Drive Digital Transformation?</h4>
          <p className="text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Let's discuss how I can help accelerate your organization's digital transformation journey with proven expertise in managing large-scale programs and delivering measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
