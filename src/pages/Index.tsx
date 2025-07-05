
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
  ];

  const experiences = [
    {
      company: "Dover Corporation",
      period: "January'22 – April'25",
      role: "Program Manager – Digital Transformation, Central PMO",
      achievements: [
        "Saved 240k USD by automating billing system using SaaS based RPA tool - ARIA for 8,000+ customers globally, $500M portfolio managed",
        "17% reduction in Sales expense with Oracle ERP - Led implementation across seven multinational divisions, 60% improvement in sales, 10% total revenue increase",
        "Eliminated 43% of false warranty claims in Salesforce – Enhanced CRM workflows for 7,000+ equipment records",
        "Saved 150k USD on Payment Gateway launch with PayTrace implementation, achieving PCI compliance",
        "Implemented PIM platform consolidating 65,000+ digital assets, targeting 20% sales increase"
      ]
    },
    {
      company: "OLA ANI Technology Private Limited",
      period: "May'21 to January'22",
      role: "Project Manager – Strategic Initiatives, OLA Cabs",
      achievements: [
        "10% revenue increase scaling Bike Taxis from 50 to 90 cities across India",
        "4% market share increase & 80% rides by vaccinated drivers through verification of 450,000+ vaccination certificates",
        "Distributed 770 Oxygen Concentrators across 10 Tier-1 cities during COVID-19 second wave"
      ]
    },
    {
      company: "Reliance Industries Limited",
      period: "October'12 to January'19",
      role: "Manager – Planning",
      achievements: [
        "EPC Project Coordination for electrical system commissioning valued at ₹510 crore",
        "Saved ₹5 Crore implementing SAP ERP for 5,000+ equipment pieces & 20,000+ inventory items"
      ]
    }
  ];

  const skills = {
    "Technical Skills": [
      "Oracle Fusion Cloud", "SAP ECC", "Salesforce", "Power BI", "SQL", "Python", "R Studio", "MS Projects", "Jira", "Confluence"
    ],
    "Methodologies": [
      "Agile & SDLC", "Lean Six Sigma", "Risk Management", "Change Management", "Process Excellence", "UAT Planning"
    ],
    "Leadership": [
      "Stakeholder Management", "Cross Functional Collaboration", "Product Management", "Business Analysis", "Budgeting & KPIs"
    ]
  };

  const certifications = [
    "Project Management Professional (PMP) by PMI",
    "Certified Scrum Master (CSM) by Scrum Alliance",
    "Lean Six Sigma Green Belt by KPMG"
  ];

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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

              <div className="space-y-3 sm:space-y-4 text-slate-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm sm:text-base break-all">Baranwal.milind@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm sm:text-base">+91-7000141541</span>
                </div>
                <div className="flex items-start gap-2 group cursor-pointer hover:text-blue-600 transition-colors duration-200">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm sm:text-base leading-relaxed">
                    DivyaSree Republic of Whitefield, EPIP Zone, Vydehi Bengaluru - 560066
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-slate-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  <img 
                    src="/lovable-uploads/58397a47-003c-4816-b499-c979e8318efc.png" 
                    alt="Milind Baranwal - Professional Photo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-lg sm:text-2xl font-bold">10+</span>
                  <span className="text-xs absolute bottom-1 sm:bottom-2">Years</span>
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
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="group-hover:bg-slate-50/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <CardTitle className="text-lg sm:text-xl text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {exp.company}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg font-medium text-blue-600 mt-1 group-hover:text-blue-700 transition-colors duration-300">
                        {exp.role}
                      </CardDescription>
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
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 group/item animate-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors duration-200">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                          >
                            {skill}
                          </Badge>
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
