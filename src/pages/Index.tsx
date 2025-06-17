
import Header from "@/components/Header";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  // URL de votre chatbot Vectorshift
  const vectorshiftChatbotUrl = "https://app.vectorshift.ai/chatbots/deployed/684942eb1bb2289c332ec8c5";

  return (
    <div className="min-h-screen">
      <Header />
      <TeamSection />
      <Footer />
      <ChatbotWidget vectorshiftUrl={vectorshiftChatbotUrl} />
    </div>
  );
};

export default Index;
