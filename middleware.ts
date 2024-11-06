import { clerkMiddleware } from "@clerk/nextjs/server";

// Exporte clerkMiddleware diretamente, sem chamá-la
export default clerkMiddleware;

export const config = {
    matcher: [
        // Ignore os arquivos internos do Next.js e todos os arquivos estáticos, a menos que estejam nos parâmetros de pesquisa
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Sempre execute para as rotas de API
        '/(api|trpc)(.*)',
    ],
};
