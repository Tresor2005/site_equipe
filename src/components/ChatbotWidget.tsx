
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChatbotWidgetProps {
  vectorshiftUrl?: string;
}

const ChatbotWidget = ({ vectorshiftUrl }: ChatbotWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-team-green to-team-yellow text-team-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="w-full h-full bg-team-white border-2 border-team-green shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-team-green to-team-yellow text-team-white p-4">
              <CardTitle className="text-lg font-semibold flex items-center">
                <MessageCircle className="mr-2" size={20} />
                Assistant Virtuel de notre université
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 flex flex-col h-80">
              {/* Vectorshift Chatbot Iframe */}
              <div className="flex-1">
                {vectorshiftUrl ? (
                  <iframe
                    src={vectorshiftUrl}
                    className="w-full h-full border-0"
                    title="Chatbot Vectorshift"
                    allow="microphone; camera"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full p-4 text-center">
                    <p className="text-muted-foreground">
                      Veuillez configurer l'URL du chatbot Vectorshift
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {vectorshiftUrl && (
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <p className="text-xs text-muted-foreground text-center">
                     developpé sur Vectorshift
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
