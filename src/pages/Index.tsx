import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-sans">
      <div className="text-center space-y-6 p-4">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Página Inicial</h1>
        <p className="text-xl text-muted-foreground mb-8">Demonstração da página de erro</p>
        <Button
          onClick={() => navigate("/error")}
          variant="default"
          size="lg"
        >
          Ver Página de Erro
        </Button>
      </div>
    </div>
  );
};

export default Index;
