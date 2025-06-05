
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NavigationCard } from "@/components/NavigationCard";
import { MessageCircle, Linkedin, Github, Mail, Phone } from "lucide-react";

export function ContactPopup() {
  const contactMethods = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/soufiane-elboubkari",
      href: "https://linkedin.com/in/soufiane-elboubkari"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/soufianeElbk",
      href: "https://github.com/soufianeElbk"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "elboubkarisoufiane03@gmail.com",
      href: "mailto:elboubkarisoufiane03@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+212 663057516",
      href: "tel:+212663057516"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full">
          <NavigationCard
            icon={<MessageCircle />}
            title="Contact"
            description="Get in touch with me"
            onClick={() => {}}
            className="w-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="glassmorphism border-blue-200/30 dark:border-blue-700/30 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-900 dark:text-blue-100 text-xl sm:text-2xl text-center mb-4">Contact Me</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pb-4">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-sm sm:text-base">
            Let's connect and discuss opportunities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism rounded-2xl p-3 sm:p-4 hover:scale-105 transition-all duration-300 hover:bg-blue-50/20 dark:hover:bg-blue-900/20 block"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-sm">{method.label}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs break-words">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="glassmorphism rounded-2xl p-4 sm:p-6 mt-6">
            <h2 className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">Get In Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center text-xs sm:text-sm">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation
              about technology and innovation. Feel free to reach out through any of the channels above!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
