import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

function FirstPage() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-10 px-4">
            <div className="max-w-md mb-10 md:mb-20 text-center md:text-left">
                <h1 className="text-6xl md:text-6xl font-bold mb-4">Shadbook</h1>

                <p className="hidden md:block text-xl md:text-2xl font-medium text-neutral-600">
                    O Shadbook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
                </p>
            </div>

            <div className="w-full max-w-sm flex flex-col gap-5">
                <Card className="shadow-none md:shadow-2xl border-0 md:border-1">
                    <CardContent className="pt-6">
                        <form>
                            <div className="space-y-4">
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Email"
                                    className="h-12"
                                    required
                                />
                                <Input
                                    id="senha"
                                    type="password"
                                    placeholder="Senha"
                                    className="h-12"
                                    required
                                /> 
                                <Button 
                                    type="submit"
                                    className="w-full h-12"
                                >
                                    Entrar
                                </Button>
                                <div className="flex justify-center">
                                    <Button variant="link" type="button">
                                        Esqueceu a senha?
                                    </Button>
                                </div>
                                <Separator />
                                <div className="flex justify-center">
                                    <Button variant="outline" className="h-12">
                                        Criar nova conta
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="flex justify-center text-sm text-center">
                    <p>
                        <Button variant="link" className="p-1 font-semibold h-auto mt-5">
                            Crie uma página
                        </Button>
                        para uma celebridade, uma marca ou uma empresa.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
