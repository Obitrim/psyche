import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Brain,
  Users,
  Shield,
  Target,
  Award,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: MessageCircle, value: "50,000+", label: "Consultations" },
    { icon: BookOpen, value: "500+", label: "Articles Published" },
    { icon: Award, value: "100+", label: "Expert Psychologists" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We believe in providing empathetic and understanding mental health support to everyone who needs it.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your mental health journey is personal. We ensure complete confidentiality and data protection.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description:
        "All our content and recommendations are based on scientific research and clinical expertise.",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Connect with others on similar journeys and build a supportive network of understanding.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      description:
        "Specializes in cognitive behavioral therapy and anxiety disorders.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Psychiatrist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      description: "Expert in mood disorders and medication management.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child Psychologist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
      description:
        "Dedicated to helping children and families navigate mental health challenges.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-psyche-50 via-white to-psyche-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              About PsycheHub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing
              <span className="text-psyche-600"> Mental Health</span>
              <br />
              Support
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              PsycheHub is a comprehensive mental health platform that connects
              individuals with expert psychologists, provides educational
              resources, and fosters a supportive community for mental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/articles">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-psyche-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-psyche-300 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-psyche-400 rounded-full opacity-15"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To make mental health support accessible, affordable, and
                stigma-free for everyone. We believe that mental wellness is a
                fundamental human right, and we're committed to breaking down
                barriers to care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through our platform, we connect individuals with qualified
                mental health professionals, provide evidence-based educational
                content, and create a supportive community where everyone can
                find the help they need.
              </p>
              <div className="flex items-center gap-4">
                <Brain className="w-8 h-8 text-psyche-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Empowering minds, one conversation at a time
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-psyche-100 to-psyche-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 text-psyche-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we serve
              our community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-psyche-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-psyche-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of qualified mental health professionals is dedicated to
              providing the highest quality care and support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-psyche-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-psyche-600 to-psyche-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Mental Health Journey?
          </h2>
          <p className="text-xl text-psyche-100 mb-8 max-w-2xl mx-auto">
            Join thousands of others who have found support, understanding, and
            hope through PsycheHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-psyche-600"
              asChild>
              <Link to="/articles">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
