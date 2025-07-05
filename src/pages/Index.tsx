
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Milind Baranwal</h1>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button size="sm">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-slate-900 leading-tight">
                  Digital Transformation
                  <span className="text-blue-600"> Leader</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Led multi-million-dollar ERP, automation, and strategic transformation initiatives, managing a $500M global portfolio across Fortune 500 firms, covering both B2B & B2C sectors in the US and Europe markets.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">$500M Portfolio Managed</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Global Program Leader</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Digital Transformation</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>Baranwal.milind@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+91-7000141541</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5" />
                <span>DivyaSree Republic of Whitefield, EPIP Zone, Vydehi Bengaluru - 560066</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-slate-100">
                  <img 
                    src="/lovable-uploads/58397a47-003c-4816-b499-c979e8318efc.png" 
                    alt="Milind Baranwal - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  10+
                  <span className="text-xs absolute bottom-2">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-slate-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600 mt-1">
                        {exp.role}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 leading-relaxed">{achievement}</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
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
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Certifications</h3>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-semibold text-slate-900">PGPM – Operations & Analytics</div>
                      <div className="text-blue-600">Great Lakes Institute of Management, Chennai</div>
                      <div className="text-sm text-slate-600">2019 - 2020</div>
                    </CardContent>
                  </Card>
                  <Card>
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
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Ready to Drive Digital Transformation?</h4>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help accelerate your organization's digital transformation journey with proven expertise in managing large-scale programs and delivering measurable results.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <ExternalLink className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
