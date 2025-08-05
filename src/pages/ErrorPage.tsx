import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans">
      <Card className="w-full max-w-md mx-auto shadow-large border border-border/50">
        <CardContent className="p-8 text-center space-y-6">
          {/* Warning Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-warning" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Página Temporariamente Indisponível
          </h1>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-sm">
              A conta do TikTok de <span className="font-medium text-foreground">Milena Feffers</span> está fora do ar no momento.
            </p>
            
            <p className="text-sm">
              Identificamos a remoção da conta por parte da plataforma devido à identificação de conteúdo considerado malicioso pelas diretrizes do TikTok.
            </p>
            
            <p className="text-sm">
              Estamos trabalhando para resolver o problema o quanto antes.
            </p>
            
            <p className="text-sm font-medium text-foreground">
              Agradecemos pela compreensão. 💬
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Button
              onClick={handleGoHome}
              variant="soft"
              size="lg"
              className="w-full font-medium"
            >
              Voltar ao início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPage;